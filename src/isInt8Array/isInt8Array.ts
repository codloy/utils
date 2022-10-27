import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Int8Array` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Int8Array`, else `false`
 * @since 0.1.0
 */
function isInt8Array(value: any): value is Int8Array {
  return tag(value) === Tag.Int8Array;
}

export default isInt8Array;
