import { Prefix } from '@_linked/core/utils/Prefix';
import { createNameSpace } from '@_linked/core/utils/NameSpace';

const dataFile = '../data/dcterms.json';
export const loadData = () => {
  //@ts-ignore
  return import('../data/dcterms.json', { with: { type: 'json' } }).then(
    (data) => data.default
  );
};

const base = 'http://purl.org/dc/terms/';
export const ns = createNameSpace(base);
Prefix.add('dcterms', base);

export const _ontologyResource = ns('');
export const AgentClass = ns('AgentClass');
export const Agent = ns('Agent');
export const BibliographicResource = ns('BibliographicResource');
export const FileFormat = ns('FileFormat');
export const Frequency = ns('Frequency');
export const Jurisdiction = ns('Jurisdiction');
export const LicenseDocument = ns('LicenseDocument');
export const LinguisticSystem = ns('LinguisticSystem');
export const Location = ns('Location');
export const LocationPeriodOrJurisdiction = ns('LocationPeriodOrJurisdiction');
export const MediaType = ns('MediaType');
export const MediaTypeOrExtent = ns('MediaTypeOrExtent');
export const MethodOfAccrual = ns('MethodOfAccrual');
export const MethodOfInstruction = ns('MethodOfInstruction');
export const PeriodOfTime = ns('PeriodOfTime');
export const PhysicalMedium = ns('PhysicalMedium');
export const PhysicalResource = ns('PhysicalResource');
export const Policy = ns('Policy');
export const ProvenanceStatement = ns('ProvenanceStatement');
export const RightsStatement = ns('RightsStatement');
export const SizeOrDuration = ns('SizeOrDuration');
export const Standard = ns('Standard');
export const abstract = ns('abstract');
export const accessRights = ns('accessRights');
export const accrualMethod = ns('accrualMethod');
export const accrualPeriodicity = ns('accrualPeriodicity');
export const accrualPolicy = ns('accrualPolicy');
export const alternative = ns('alternative');
export const audience = ns('audience');
export const available = ns('available');
export const bibliographicCitation = ns('bibliographicCitation');
export const conformsTo = ns('conformsTo');
export const contributor = ns('contributor');
export const coverage = ns('coverage');
export const created = ns('created');
export const creator = ns('creator');
export const date = ns('date');
export const dateAccepted = ns('dateAccepted');
export const dateCopyrighted = ns('dateCopyrighted');
export const dateSubmitted = ns('dateSubmitted');
export const description = ns('description');
export const educationLevel = ns('educationLevel');
export const extent = ns('extent');
export const format = ns('format');
export const hasFormat = ns('hasFormat');
export const hasPart = ns('hasPart');
export const hasVersion = ns('hasVersion');
export const identifier = ns('identifier');
export const instructionalMethod = ns('instructionalMethod');
export const isFormatOf = ns('isFormatOf');
export const isPartOf = ns('isPartOf');
export const isReferencedBy = ns('isReferencedBy');
export const isReplacedBy = ns('isReplacedBy');
export const isRequiredBy = ns('isRequiredBy');
export const issued = ns('issued');
export const isVersionOf = ns('isVersionOf');
export const language = ns('language');
export const license = ns('license');
export const mediator = ns('mediator');
export const medium = ns('medium');
export const modified = ns('modified');
export const provenance = ns('provenance');
export const publisher = ns('publisher');
export const references = ns('references');
export const relation = ns('relation');
export const replaces = ns('replaces');
export const requires = ns('requires');
export const rights = ns('rights');
export const rightsHolder = ns('rightsHolder');
export const source = ns('source');
export const spatial = ns('spatial');
export const subject = ns('subject');
export const tableOfContents = ns('tableOfContents');
export const temporal = ns('temporal');
export const title = ns('title');
export const type = ns('type');
export const valid = ns('valid');
export const Image = ns('Image');

export const dcterms = {
  _ontologyResource,
  abstract,
  accessRights,
  accrualMethod,
  accrualPeriodicity,
  accrualPolicy,
  alternative,
  audience,
  available,
  bibliographicCitation,
  conformsTo,
  contributor,
  coverage,
  created,
  creator,
  date,
  dateAccepted,
  dateCopyrighted,
  dateSubmitted,
  description,
  educationLevel,
  extent,
  format,
  hasFormat,
  hasPart,
  hasVersion,
  identifier,
  instructionalMethod,
  isFormatOf,
  isPartOf,
  isReferencedBy,
  isReplacedBy,
  isRequiredBy,
  issued,
  isVersionOf,
  language,
  license,
  mediator,
  medium,
  modified,
  provenance,
  publisher,
  references,
  relation,
  replaces,
  requires,
  rights,
  rightsHolder,
  source,
  spatial,
  subject,
  tableOfContents,
  temporal,
  title,
  type,
  valid,
  Agent,
  AgentClass,
  BibliographicResource,
  FileFormat,
  Frequency,
  Jurisdiction,
  LicenseDocument,
  LinguisticSystem,
  Location,
  LocationPeriodOrJurisdiction,
  MediaType,
  MediaTypeOrExtent,
  MethodOfAccrual,
  MethodOfInstruction,
  PeriodOfTime,
  PhysicalMedium,
  PhysicalResource,
  Policy,
  ProvenanceStatement,
  RightsStatement,
  SizeOrDuration,
  Standard,
  Image,
};

