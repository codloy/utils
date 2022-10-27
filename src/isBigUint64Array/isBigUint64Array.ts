import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `BigUint64Array` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `BigUint64Array`, else `false`
 * @since 0.1.0
 */
function isBigUint64Array(value: any): value is BigUint64Array {
  return tag(value) === Tag.BigUint64Array;
}

export default isBigUint64Array;
