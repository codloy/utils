import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `URIError` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `URIError`, else `false`
 * @since 0.1.0
 */
function isURIError(value: any): value is URIError {
  return tag(value) === Tag.URIError;
}

export default isURIError;
