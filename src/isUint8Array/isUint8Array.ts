import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Uint8Array` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Uint8Array`, else `false`
 * @since 0.1.0
 */
function isUint8Array(value: any): value is Uint8Array {
  return tag(value) === Tag.Uint8Array;
}

export default isUint8Array;
