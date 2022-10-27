import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Map` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Map`, else `false`
 * @since 0.1.0
 */
function isMap<K, V>(value: any): value is Map<K, V> {
  return tag(value) === Tag.Map;
}

export default isMap;
