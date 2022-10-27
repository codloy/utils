import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Number` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Number`, else `false`
 * @since 0.1.0
 */
function isNumber(value: any): value is number {
  return tag(value) === Tag.Number;
}

export default isNumber;
