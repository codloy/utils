import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `TypeError` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `TypeError`, else `false`
 * @since 0.1.0
 */
function isTypeError(value: any): value is TypeError {
  return tag(value) === Tag.TypeError;
}

export default isTypeError;
