import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `NaN`
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `NaN`, else `false`
 * @since 0.1.0
 */
function isNaN(value: any): value is typeof NaN {
  return tag(value) === Tag.NaN;
}

export default isNaN;
