import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `SyntaxError` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `SyntaxError`, else `false`
 * @since 0.1.0
 */
function isSyntaxError(value: any): value is SyntaxError {
  return tag(value) === Tag.SyntaxError;
}

export default isSyntaxError;
