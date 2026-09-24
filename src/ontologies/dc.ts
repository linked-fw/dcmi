import { Prefix } from '@_linked/core/utils/Prefix';
import { createNameSpace } from '@_linked/core/utils/NameSpace';

const dataFile = '../data/dcelems.json';
export const loadData = () => {
  //@ts-ignore
  return import('../data/dcelems.json', { with: { type: 'json' } }).then(
    (data) => data.default
  );
};

const base = 'http://purl.org/dc/elements/1.1/';
export const ns = createNameSpace(base);
Prefix.add('dc', base);

export const _ontologyResource = ns('');
export const contributor = ns('contributor');
export const coverage = ns('coverage');
export const creator = ns('creator');
export const date = ns('date');
export const description = ns('description');
export const format = ns('format');
export const identifier = ns('identifier');
export const language = ns('language');
export const publisher = ns('publisher');
export const relation = ns('relation');
export const rights = ns('rights');
export const source = ns('source');
export const subject = ns('subject');
export const title = ns('title');
export const type = ns('type');

export const dcelems = {
  _ontologyResource,
  contributor,
  coverage,
  creator,
  date,
  description,
  format,
  identifier,
  language,
  publisher,
  relation,
  rights,
  source,
  subject,
  title,
  type,
};

