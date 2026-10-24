# @_linked/dcmi

[DCMI Metadata Terms](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/) for
Linked: the Dublin Core vocabularies as Turtle, an accessor for every term, and the `Image` shape.
The package mirrors the three namespaces and holds only their terms.

## Ontologies

| Prefix | Namespace | Module |
|---|---|---|
| `dc` | `http://purl.org/dc/elements/1.1/` | `@_linked/dcmi/ontologies/dc` |
| `dcterms` | `http://purl.org/dc/terms/` | `@_linked/dcmi/ontologies/dcterms` |
| `dcmitype` | `http://purl.org/dc/dcmitype/` | `@_linked/dcmi/ontologies/dcmitype` |

Import a module as a namespace:

```ts
import * as dcterms from '@_linked/dcmi/ontologies/dcterms';

@literalProperty({path: dcterms.title}) get title(): string {…}
```

Each module has one named export per term; `ontologies/<prefix>.data` holds `ns`, `dataFiles`,
`_ontologyResource` and `loadData()`. A term's export name is its local name made an identifier
(`dcterms:ISO639-2` → `dcterms.ISO639_2`). `linked generate-ontology` writes the modules from the
data (`package.json` `"linkedOntologies"`), and `linked build` fails when they are stale; never
edit them by hand.

## The data

The data is DCMI's latest release, [DCMI Metadata Terms](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/), Date Issued 2020-01-20, as
DCMI publishes it in Turtle, unchanged apart from a leading comment that names the source:

| File | Source |
|---|---|
| `src/data/dcelems.ttl` | <https://www.dublincore.org/specifications/dublin-core/dcmi-terms/dublin_core_elements.ttl> |
| `src/data/dcterms.ttl` | <https://www.dublincore.org/specifications/dublin-core/dcmi-terms/dublin_core_terms.ttl> |
| `src/data/dcmitype.ttl` | <https://www.dublincore.org/specifications/dublin-core/dcmi-terms/dublin_core_type.ttl> |

To refresh, download each file, put the comment back with the new release date, update the
`-added` files' version, and run `npx linked generate-ontology`.

The official files are the only source of the package's terms: the package never adds a class
or property to a standard's namespace. What the published standard lacks, mainly metadata, goes
in one extra file per prefix, `src/data/<prefix>-added.ttl`, listed in `"linkedOntologies"`' data:

- the ontology entity itself: `owl:Ontology`, title, description,
  `vann:preferredNamespacePrefix`, `vann:preferredNamespaceUri`, the source URL and version;
- annotations on terms the standard already defines, such as a missing `rdfs:label`.

New classes or properties never go there; a term a standard lacks belongs in the consumer's own
ontology package.

DCMI's files describe each namespace (title, publisher, modified) but do not declare it an
`owl:Ontology`, so `dc-added.ttl`, `dcterms-added.ttl` and `dcmitype-added.ttl` add the ontology
entity, the preferred prefix and namespace, and the source and version.

## Development

```bash
npx linked build    # checks the ontology modules, compiles, writes lib/esm/data/shapes.ttl
npm test            # runs against lib/
```
