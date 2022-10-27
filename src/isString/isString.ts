import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `String` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `String`, else `false`
 * @since 0.1.0
 */
function isString(value: any): value is string {
  return tag(value) === Tag.String;
}

export default isString;
