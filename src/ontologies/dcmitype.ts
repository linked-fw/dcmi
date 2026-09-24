import { Prefix } from '@_linked/core/utils/Prefix';
import { createNameSpace } from '@_linked/core/utils/NameSpace';

const dataFile = '../data/dcmitype.json';
export const loadData = () => {
  //@ts-ignore
  return import('../data/dcmitype.json', { with: { type: 'json' } }).then(
    (data) => data.default
  );
};

const base = 'http://purl.org/dc/dcmitype/';
export const ns = createNameSpace(base);
Prefix.add('dcmitype', base);

export const _ontologyResource = ns('');
export const Collection = ns('Collection');
export const Dataset = ns('Dataset');
export const Event = ns('Event');
export const Image = ns('Image');
export const InteractiveResource = ns('InteractiveResource');
export const MovingImage = ns('MovingImage');
export const PhysicalObject = ns('PhysicalObject');
export const Service = ns('Service');
export const Software = ns('Software');
export const Sound = ns('Sound');
export const StillImage = ns('StillImage');
export const Text = ns('Text');

export const dcmitype = {
  _ontologyResource,
  Collection,
  Dataset,
  Event,
  Image,
  InteractiveResource,
  MovingImage,
  PhysicalObject,
  Service,
  Software,
  Sound,
  StillImage,
  Text,
};

