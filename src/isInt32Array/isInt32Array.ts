import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Int32Array` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Int32Array`, else `false`
 * @since 0.1.0
 */
function isInt32Array(value: any): value is Int32Array {
  return tag(value) === Tag.Int32Array;
}

export default isInt32Array;
