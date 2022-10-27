import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Date` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Date`, else `false`
 * @since 0.1.0
 */
function isDate(value: any): value is Date {
  return tag(value) === Tag.Date;
}

export default isDate;
