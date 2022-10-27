import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `WeakRef` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `WeakRef`, else `false`
 * @since 0.1.0
 */
function isWeakRef(value: any): boolean {
  return tag(value) === Tag.WeakRef;
}

export default isWeakRef;
