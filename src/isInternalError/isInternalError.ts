import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `InternalError` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `InternalError`, else `false`
 * @since 0.1.0
 */
function isInternalError(value: any): value is Error {
  return tag(value) === Tag.InternalError;
}

export default isInternalError;
