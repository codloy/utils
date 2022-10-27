import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Error` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Error`, else `false`
 * @since 0.1.0
 */
function isError(value: any): value is Error {
  return tag(value) === Tag.Error;
}

export default isError;
