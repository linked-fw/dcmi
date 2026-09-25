# @\_linked/dcmi

## 1.3.0

### Minor Changes

- [#19](https://github.com/linked-fw/dcmi/pull/19) [`1ca407f`](https://github.com/linked-fw/dcmi/commit/1ca407fec9bb0e15c84f84c485b8af492ebe48d7) Thanks [@flyon](https://github.com/flyon)! - Require `@_linked/core@^2.22.8` (was `^2.21.0`), and pin it in the lockfile.

  The declared range was wide enough that the resolved core depended on whatever the
  consumer — or this repo's own CI, via `package-lock.json` — happened to install. Core
  decides how a shape's IRI is minted, so a stale core made this package emit legacy
  `data.lincd.org` IRIs instead of the arch-02 `linked.cm` scheme. Which IRIs a published
  package produces should not be a function of the installer's dependency tree.

  Minor rather than patch: this raises the minimum core a consumer must resolve, so it
  changes what gets installed rather than only what this package does internally.

## 1.2.0

### Minor Changes

- [#17](https://github.com/linked-fw/dcmi/pull/17) [`28bc8d0`](https://github.com/linked-fw/dcmi/commit/28bc8d0fc8844f06cf32dd9f54e3f3043d854ca7) Thanks [@flyon](https://github.com/flyon)! - Register this package's shape under the `dcmi` slug, not `core`

  `src/package.ts` re-exported core's decorators instead of creating this
  package's own `linkedPackage('@_linked/dcmi')`, so `@linkedShape` bound to
  `corePackage`. **The shape IRIs change:**

  | Before                                      | After                                       |
  | ------------------------------------------- | ------------------------------------------- |
  | `https://linked.cm/shape/core/Image`        | `https://linked.cm/shape/dcmi/Image`        |
  | `https://linked.cm/shape/core/Image/<prop>` | `https://linked.cm/shape/dcmi/Image/<prop>` |

  (the seven property shapes: `title`, `description`, `date`, `format`,
  `creator`, `publisher`, `subjects`.)

  A shape IRI is persisted data, so this is a minor rather than a patch: anything
  that stored or compared these ids sees new ones. This package's exports also
  move out of core's entry in the package tree and into `@_linked/dcmi`, which is
  what `Server.call` routes on — and `Image` is a common enough name that sharing
  core's namespace was a live collision hazard.

  Same defect and same fix as linked-fw/owl#26.

## 1.1.4

### Patch Changes

- [#15](https://github.com/linked-fw/dcmi/pull/15) [`31da7d0`](https://github.com/linked-fw/dcmi/commit/31da7d060c0283006cf481337d6dcd2a121c7e4c) Thanks [@flyon](https://github.com/flyon)! - The ontology no longer registers by importing itself.

  It carried `import * as _this from './<prefix>.js'` and passed that namespace to
  `linkedOntology()`. Under `tsc` the self-reference survives; under a bundler it does
  not — Rollup treats it as a circular import and elides it, so the binding is
  `undefined` and a consuming app dies at boot with `_this is not defined`.

  Registration now lives in a `<prefix>.register.ts` sibling, imported from the package
  entry. Nothing changes for consumers: importing this package still registers the
  ontology.

## 1.1.3

### Patch Changes

- [#13](https://github.com/linked-fw/dcmi/pull/13) [`70fc591`](https://github.com/linked-fw/dcmi/commit/70fc591513711d72ed59620382c5c4ea63267437) Thanks [@flyon](https://github.com/flyon)! - Compile the whole `src` folder, and let a bare import resolve under Node10.

  The build only emitted what an entry transitively reached, so any module
  nothing imported was never built — and never type-checked, so it rotted
  quietly. `include` now covers `src/**/*` with tests excluded explicitly.

  `typesVersions` maps every specifier through `lib/esm/*`, so a `types` value
  that already carried that prefix had it applied twice and no consumer on
  classic Node10 resolution could `import` the package by its bare name.

## 1.1.2

### Patch Changes

- [#10](https://github.com/linked-fw/dcmi/pull/10) [`f09fa94`](https://github.com/linked-fw/dcmi/commit/f09fa944828a952e6b932efe3f02a69f7dbfa07c) Thanks [@flyon](https://github.com/flyon)! - Declare npm as the package manager for this repo, convert the build scripts off `yarn`, and mark `package-lock.json` as a generated file.

## 1.1.0

### Minor Changes

- [`0ceffd6`](https://github.com/linked-cm/dcmi/commit/0ceffd6b2182c7b3d1485e8a2f85fba29ba2dfe7) - ESM-only. Dropped the CommonJS build; ships ES modules only (`type: module`, no `require` export condition, no `lib/cjs`). Fixed the root `types` field. CJS consumers on Node 22+ can `require()` it (sync ESM) or use dynamic `import()`.

## 1.0.4

### Patch Changes

- [#3](https://github.com/linked-cm/dcmi/pull/3) [`88ba3eb`](https://github.com/linked-cm/dcmi/commit/88ba3eb6be900e0175d84e673584d8699e95d206) Thanks [@flyon](https://github.com/flyon)! - loadData: ESM-only JSON import — drop the dead CJS branch, add the `{ with: { type: 'json' } }` import attribute.

## 1.0.3

### Patch Changes

- [`c64ce97`](https://github.com/linked-cm/dcmi/commit/c64ce974230c657c34d4e3551cadabd71577e8cc) - Initial release under the new publishing setup.
