import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `ReferenceError` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `ReferenceError`, else `false`
 * @since 0.1.0
 */
function isReferenceError(value: any): value is ReferenceError {
  return tag(value) === Tag.ReferenceError;
}

export default isReferenceError;
