import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `WeakMap` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `WeakMap`, else `false`
 * @since 0.1.0
 */
function isWeakMap<K extends object, V>(value: any): value is WeakMap<K, V> {
  return tag(value) === Tag.WeakMap;
}

export default isWeakMap;
