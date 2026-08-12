// Generates README.md from data/extensions.yml. Run: pnpm build
import { readFile, writeFile } from 'node:fs/promises'
import { parse } from 'yaml'

const root = new URL('..', import.meta.url)
const data = parse(await readFile(new URL('data/extensions.yml', root), 'utf8'))

const STORES = [
  ['chrome', 'Chrome'],
  ['firefox', 'Firefox'],
  ['safari', 'Safari'],
  ['edge', 'Edge'],
]

// Matches GitHub's heading-anchor algorithm: strip invalid chars, then turn
// EACH space into a hyphen ("A & B" → "a--b").
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^\w\- ]/g, '')
    .replace(/ /g, '-')

const renderExtension = (ext) => {
  const primary =
    ext.homepage ?? ext.source ?? Object.values(ext.stores ?? {})[0]
  const links = STORES.filter(([key]) => ext.stores?.[key]).map(
    ([key, label]) => `[${label}](${ext.stores[key]})`,
  )
  // Always render Source when present — its presence is the open-source
  // marker the README legend promises, even when it duplicates the name link.
  if (ext.source) links.push(`[Source](${ext.source})`)
  const description = ext.description.trim().replace(/\s+/g, ' ')
  return `- [${ext.name}](${primary}) - ${description}<br>${links.join(' · ')}`
}

const toc = data
  .map((c) => `- [${c.category}](#${slugify(c.category)})`)
  .join('\n')

const sections = data
  .map(
    (c) =>
      `## ${c.category}\n\n${c.extensions.map(renderExtension).join('\n')}`,
  )
  .join('\n\n')

const count = data.reduce((n, c) => n + c.extensions.length, 0)

const readme = `<!-- Generated from data/extensions.yml by scripts/build.mjs — do not edit by hand. -->

# Awesome Browser Extensions [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of trustworthy browser extensions, with cross-browser install links.

Extension stores are exhaustive; this list is not. Every entry here is well
known, actively maintained, and worth trusting with the permissions it asks
for — and when the obvious choice has changed (an acquisition, a Manifest V3
casualty, an abandoned original), the entry says so.

**How to read an entry:** the store links show where each extension is
actually available — Chrome · Firefox · Safari · Edge. A \`Source\` link means
the extension is open source; entries without one are closed source, noted in
the description.

Currently listing **${count}** extensions.

## Contents

${toc}

${sections}

## Contributing

Entries live in [\`data/extensions.yml\`](data/extensions.yml); the README is
generated. See [CONTRIBUTING.md](CONTRIBUTING.md) for the inclusion criteria
and how to add an extension.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the authors have waived all copyright and
related rights to this work.
`

await writeFile(new URL('README.md', root), readme)
console.log(`README.md generated: ${count} extensions in ${data.length} categories`)
