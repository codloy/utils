import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Set` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Set`, else `false`
 * @since 0.1.0
 */
function isSet<T>(value: any): value is Set<T> {
  return tag(value) === Tag.Set;
}

export default isSet;
