---
'@_linked/dcmi': minor
---

Register this package's shape under the `dcmi` slug, not `core`

`src/package.ts` re-exported core's decorators instead of creating this
package's own `linkedPackage('@_linked/dcmi')`, so `@linkedShape` bound to
`corePackage`. **The shape IRIs change:**

| Before | After |
| --- | --- |
| `https://linked.cm/shape/core/Image` | `https://linked.cm/shape/dcmi/Image` |
| `https://linked.cm/shape/core/Image/<prop>` | `https://linked.cm/shape/dcmi/Image/<prop>` |

(the seven property shapes: `title`, `description`, `date`, `format`,
`creator`, `publisher`, `subjects`.)

A shape IRI is persisted data, so this is a minor rather than a patch: anything
that stored or compared these ids sees new ones. This package's exports also
move out of core's entry in the package tree and into `@_linked/dcmi`, which is
what `Server.call` routes on — and `Image` is a common enough name that sharing
core's namespace was a live collision hazard.

Same defect and same fix as linked-fw/owl#26.
