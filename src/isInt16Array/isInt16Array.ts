import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Int16Array` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Int16Array`, else `false`
 * @since 0.1.0
 */
function isInt16Array(value: any): value is Int16Array {
  return tag(value) === Tag.Int16Array;
}

export default isInt16Array;
