import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Object` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Object`, else `false`
 * @since 0.1.0
 */
function isObject<K>(value: any): value is K | { [key: string]: any } {
  return tag(value) === Tag.Object;
}

export default isObject;
