import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `BigInt64Array` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `BigInt64Array`, else `false`
 * @since 0.1.0
 */
function isBigInt64Array(value: any): value is BigInt64Array {
  return tag(value) === Tag.BigInt64Array;
}

export default isBigInt64Array;
