import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Array` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Array`, else `false`
 * @since 0.1.0
 */
function isArray<T>(value: any): value is T[] {
  return tag(value) === Tag.Array;
}

export default isArray;
