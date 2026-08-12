// Verifies every URL in data/extensions.yml resolves, and that store pages
// actually belong to the named extension (stores often return 200 for SPAs).
// Run: pnpm check-links
import { readFile } from 'node:fs/promises'
import { parse } from 'yaml'

const root = new URL('..', import.meta.url)
const data = parse(await readFile(new URL('data/extensions.yml', root), 'utf8'))

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36'

// name → checks whether the store page body mentions the extension.
// Match on the first word of the name to tolerate store-title variations
// ("Bitwarden Password Manager" vs "Bitwarden").
const nameProbe = (name) => name.split(/\s+/)[0].toLowerCase()

const checks = []
for (const category of data) {
  for (const ext of category.extensions) {
    const urls = new Set(
      [ext.homepage, ext.source, ...Object.values(ext.stores ?? {})].filter(
        Boolean,
      ),
    )
    for (const url of urls) {
      const isStore = Object.values(ext.stores ?? {}).includes(url)
      checks.push({ name: ext.name, url, isStore })
    }
  }
}

let failures = 0
const limit = 8
const queue = [...checks]
const workers = Array.from({ length: limit }, async () => {
  let check
  while ((check = queue.shift())) {
    const { name, url, isStore } = check
    try {
      const res = await fetch(url, {
        headers: { 'user-agent': UA, 'accept-language': 'en-US,en;q=0.9' },
        redirect: 'follow',
        signal: AbortSignal.timeout(20000),
      })
      if (!res.ok) {
        failures++
        console.log(`FAIL ${res.status} ${name}: ${url}`)
        continue
      }
      if (isStore) {
        const body = (await res.text()).toLowerCase()
        if (!body.includes(nameProbe(name))) {
          failures++
          console.log(`FAIL name-mismatch ${name}: ${url}`)
        }
      }
    } catch (err) {
      failures++
      console.log(`FAIL ${err.cause?.code ?? err.name} ${name}: ${url}`)
    }
  }
})
await Promise.all(workers)

console.log(
  failures === 0
    ? `OK: all ${checks.length} links verified`
    : `${failures}/${checks.length} links failed`,
)
process.exit(failures === 0 ? 0 : 1)
