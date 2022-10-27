import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Uint8ClampedArray` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Uint8ClampedArray`, else `false`
 * @since 0.1.0
 */
function isUint8ClampedArray(value: any): value is Uint8ClampedArray {
  return tag(value) === Tag.Uint8ClampedArray;
}

export default isUint8ClampedArray;
