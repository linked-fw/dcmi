import * as xsd from '@_linked/xsd/ontologies/xsd';
import { Shape } from '@_linked/core/shapes/Shape';
import { literalProperty, objectProperty } from '@_linked/core/shapes/SHACL';
import type { NodeReferenceValue } from '@_linked/core/utils/NodeReference';
import * as dcmitype from '../ontologies/dcmitype.js';
import * as dcterms from '../ontologies/dcterms.js';
import { linkedShape } from '../package.js';

@linkedShape
export class Image extends Shape {
  static targetClass = dcmitype.Image;

  @literalProperty({
    path: dcterms.title,
    maxCount: 1,
    datatype: xsd.string,
  })
  get title(): string {
    return '';
  }

  @literalProperty({
    path: dcterms.description,
    maxCount: 1,
    datatype: xsd.string,
  })
  get description(): string {
    return '';
  }

  /**
   * Sets the date that the image was taken.
   * Needs to confirm ISO 8601 date/time,
   * @see pattern from: https://stackoverflow.com/a/37563868
   * @see https://www.w3.org/TR/NOTE-datetime
   */
  @literalProperty({
    path: dcterms.date,
    pattern:
      /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i,
  })
  get date(): string {
    return '';
  }

  @literalProperty({
    path: dcterms.format,
    maxCount: 1,
    datatype: xsd.string,
  })
  get format(): string {
    return '';
  }

  @objectProperty({
    path: dcterms.creator,
    maxCount: 1,
  })
  get creator(): NodeReferenceValue {
    return null;
  }

  @objectProperty({
    path: dcterms.publisher,
    maxCount: 1,
  })
  get publisher(): NodeReferenceValue {
    return null;
  }

  @objectProperty({
    path: dcterms.subject,
  })
  get subjects(): NodeReferenceValue[] {
    return [];
  }
}
