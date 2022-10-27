import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `null`
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `null`, else `false`
 * @since 0.1.0
 */
function isNull(value: any): value is null {
  return tag(value) === Tag.Null;
}

export default isNull;
