---
'@_linked/dcmi': minor
---

The ontology data ships as Turtle and the package holds only DCMI's terms.

- `src/data/dcelems.json`, `dcmitype.json` and `dcterms.json` are replaced by `dcelems.ttl` (138
  triples), `dcmitype.ttl` (89) and `dcterms.ttl` (866), copied into `lib/esm/data/` by the
  build. Each ontology module's `loadData()` now resolves to the Turtle text (`string[]`, read
  through `@_linked/core/ontology/loadOntologyFiles`, server only) and the modules export
  `dataFiles`.
- **Breaking:** the `Image` term of the `dcterms` ontology (`dcterms:Image`) is removed, also
  from the `dcterms` object: DCMI Metadata Terms defines no such class. The image class is
  `dcmitype:Image` (`dcmitype.Image`), which the `Image` shape already targets.
- **Breaking:** the root `data/` folder (a copy of `src/data`'s JSON) is no longer published;
  the data is in `lib/esm/data/*.ttl`.
- The package declares that it mirrors the `dc`, `dcmitype` and `dcterms` namespaces, so the
  shape check reports any term in them the data does not define. A test asserts the check finds
  nothing in this package.
