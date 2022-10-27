import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `WeakSet` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `WeakSet`, else `false`
 * @since 0.1.0
 */
function isWeakSet<K extends object>(value: any): value is WeakSet<K> {
  return tag(value) === Tag.WeakSet;
}

export default isWeakSet;
