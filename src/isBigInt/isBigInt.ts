import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `BigInt` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `BigInt`, else `false`
 * @since 0.1.0
 */
function isBigInt(value: any): value is BigInt {
  return tag(value) === Tag.BigInt;
}

export default isBigInt;
