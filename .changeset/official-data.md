---
"@_linked/dcmi": minor
---

The data is DCMI's latest release, DCMI Metadata Terms of 2020-01-20, as DCMI publishes it in
Turtle (`dublin_core_elements.ttl`, `dublin_core_terms.ttl`, `dublin_core_type.ttl`), with a
comment naming the source. `dcelems.ttl` and `dcterms.ttl` were the 2012 release.

- Same terms: `dc` 15, `dcterms` 98, `dcmitype` 12. Nothing added, removed or renamed.
- What changed upstream since 2012: revised comments, descriptions and notes; the per-term
  `dcterms:hasVersion` and most `dcterms:modified` dropped; and 25 `dcterms` properties lose formal
  ranges or domains (24 `rdfs:range`, 2 `rdfs:domain`), mostly for `dcam:rangeIncludes`:
  `accessRights`, `accrualMethod`, `accrualPeriodicity`, `accrualPolicy`, `audience`,
  `bibliographicCitation`, `conformsTo`, `contributor`, `coverage`, `creator`, `educationLevel`,
  `extent`, `format`, `instructionalMethod`, `language`, `license`, `mediator`, `medium`,
  `provenance`, `publisher`, `rights`, `rightsHolder`, `spatial`, `temporal`, `type`. A store that
  inferred types from those ranges no longer does.
- New `dc-added.ttl`, `dcterms-added.ttl`, `dcmitype-added.ttl`: the ontology entity DCMI's files
  lack (`owl:Ontology`, `vann` prefix and namespace, source and version), listed in
  `"linkedOntologies"`. Never a new term.
- New README: the ontologies, the namespace import, the sources and the `-added` convention.
