---
"@_linked/dcmi": minor
---

The `dc`, `dcterms` and `dcmitype` accessor modules are generated from `src/data/dcelems.ttl`,
`dcterms.ttl` and `dcmitype.ttl` by `linked generate-ontology` (`package.json`
`"linkedOntologies"`), and `linked build` fails when they are stale. One named export per term:
`ontologies/dc` 15, `ontologies/dcterms` 98 (up from 77), `ontologies/dcmitype` 12.

Breaking changes:

- The aggregated objects are gone: `dcelems` (from `ontologies/dc`), `dcterms` and `dcmitype`.
  Import each module as a namespace:

  ```ts
  import * as dcterms from '@_linked/dcmi/ontologies/dcterms';
  @literalProperty({path: dcterms.title}) get title(): string {…}
  ```

- `ns`, `dataFiles`, `loadData` and `_ontologyResource` moved to `ontologies/<prefix>.data`
  (`dc.data`, `dcterms.data`, `dcmitype.data`); `import * as dcterms` no longer reaches them, and
  each registered ontology carries only its terms.
- Terms whose local name is not an identifier, new in this release: `dcterms:ISO639-2` →
  `ISO639_2`, `dcterms:ISO639-3` → `ISO639_3`. No previously exported name changed.
- Requires `@_linked/core` ^2.41.0 and `@_linked/xsd` ^1.4.0.
