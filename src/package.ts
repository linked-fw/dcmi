import {linkedPackage} from '@_linked/core/utils/Package';

/**
 * This package's own linked identity.
 *
 * It used to re-export core's decorators verbatim and declare `packageName`
 * as a bare literal that nothing was bound to. The decorators therefore came
 * from `corePackage`, so `Image` registered as `shape/core/Image` rather than
 * `shape/dcmi/Image`. A shape's IRI is persisted data and `Server.call` routes
 * on the package name inside it, so the wrong slug is a wrong identity, not a
 * cosmetic label — and `Image` is a common enough class name that sitting in
 * core's namespace is a live collision hazard.
 *
 * Same defect, same fix, as linked-fw/owl#26.
 */
export const {
  linkedShape,
  linkedUtil,
  linkedOntology,
  registerPackageExport,
  registerPackageModule,
  getPackageShape,
  packageExports,
  packageName,
} = linkedPackage('@_linked/dcmi');
