import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Boolean` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Boolean`, else `false`
 * @since 0.1.0
 */
function isBoolean(value: any): value is boolean {
  return tag(value) === Tag.Boolean;
}

export default isBoolean;
