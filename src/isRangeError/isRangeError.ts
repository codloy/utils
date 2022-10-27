import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `RangeError` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `RangeError`, else `false`
 * @since 0.1.0
 */
function isRangeError(value: any): value is RangeError {
  return tag(value) === Tag.RangeError;
}

export default isRangeError;
