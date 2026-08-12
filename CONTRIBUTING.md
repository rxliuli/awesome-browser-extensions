# Contributing

Thanks for helping keep this list trustworthy.

## How it works

`README.md` is generated — **do not edit it directly**. Entries live in
[`data/extensions.yml`](data/extensions.yml). To add or change an entry:

1. Edit `data/extensions.yml` (the schema is documented at the top of the file).
2. Run `pnpm install`, then `pnpm build` to regenerate `README.md`.
3. Run `pnpm check-links` — every link must resolve, and store pages must
   actually belong to the named extension.
4. Open a pull request that includes both the data change and the regenerated
   `README.md`.

## Inclusion criteria

This list is deliberately small. An extension should be:

- **Trustworthy.** Open source strongly preferred. Closed-source extensions
  are acceptable when they are the clear best-in-class, but the description
  must say they are closed source. No extensions with a history of selling
  user data, undisclosed telemetry, or quiet ownership transfers.
- **Actively maintained.** Compatible with current browser versions
  (including Manifest V3 where relevant). Abandoned extensions get removed —
  ideally replaced by their maintained successor, with a note explaining the
  succession.
- **Broadly useful.** Something a stranger could adopt from a one-line
  description. Niche tools need to be the definitive tool in their niche.
- **Respectful of attention.** Depth is welcome; mandatory complexity is not.
  The benchmark is uBlock Origin: its rule engine is enormously deep, yet
  most users never touch that depth because community rulesets absorb it —
  install it and it just works. An extension that greets you with a sprawling
  settings form before it delivers value is disqualified, however capable.
- **Honestly linked.** Store links must point to the official listing
  published by the extension's author. No unofficial mirrors, even
  convenient ones.

## Removals are contributions too

If a listed extension has been sold, abandoned, or turned hostile, a PR
removing it (or replacing it with its successor, plus a note) is at least as
valuable as a PR adding something new.

Don't just delete the entry: move it to
[`data/removed.yml`](data/removed.yml) with a dated reason. Removals render
as the README's "Removed" section — the public record that this list is
re-checked, not just appended to.
