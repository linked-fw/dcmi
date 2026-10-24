---
date: 2026-10-24
summary: >
  `Image` imports `xsd` from the vocabulary package (`@_linked/xsd/ontologies/xsd`, namespace
  import) instead of core's internal `@_linked/core/ontologies/xsd`. `@_linked/xsd` raised to
  ^1.4.1. Patch.
---

# 001 — xsd from the vocabulary package

## Why

`@_linked/core/ontologies/xsd` is core's internal module. The `xsd` terms are published by the
vocabulary package `@_linked/xsd` as a generated accessor module, which dcmi already depends on.

## What changed

- `src/shapes/Image.ts`: `import { xsd } from '@_linked/core/ontologies/xsd'` →
  `import * as xsd from '@_linked/xsd/ontologies/xsd'`. The terms it uses (`xsd.string`) exist in
  the generated module; they stay accessor references.
- `package.json`: `@_linked/xsd` ^1.4.0 → ^1.4.1; lockfile refreshed (`npm ls` shows one
  `@_linked/core@2.41.0`, deduped under `@_linked/xsd@1.4.1`).
- `.changeset/core-ontology-imports.md`: patch.
- A grep of `src`, `test` and scripts for `@_linked/core/ontologies/(xsd|rdf|rdfs|owl)`, static
  or dynamic, finds nothing else.

## Gate

- `npx linked build`: "✔ Checking ontology modules", "✔ Build successful".
- `npm test`: "# tests 3", "# pass 3", "# fail 0".

## PR

### Summary

`Image` takes its `xsd` datatypes from the `@_linked/xsd` vocabulary package instead of core's
internal ontology module.

### Changes

- `src/shapes/Image.ts`: `import * as xsd from '@_linked/xsd/ontologies/xsd'`.
- `@_linked/xsd` ^1.4.1; lockfile refreshed.
- Patch changeset.

### Verification

- `npx linked build`: "✔ Checking ontology modules", "✔ Build successful".
- `npm test`: "# tests 3", "# pass 3", "# fail 0".

### Deviations

None.

### Follow-ups

None.
