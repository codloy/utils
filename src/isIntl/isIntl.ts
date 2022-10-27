import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Intl` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Intl`, else `false`
 * @since 0.1.0
 */
function isIntl(value: any): value is typeof Intl {
  return tag(value) === Tag.Intl;
}

export default isIntl;
