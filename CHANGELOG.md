# @\_linked/dcmi

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
