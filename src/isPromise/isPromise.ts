import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Promise` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Promise`, else `false`
 * @since 0.1.0
 */
function isPromise<K>(value: any): value is Promise<K> {
  return tag(value) === Tag.Promise;
}

export default isPromise;
