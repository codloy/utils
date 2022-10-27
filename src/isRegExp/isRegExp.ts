import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `RegExp` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `RegExp`, else `false`
 * @since 0.1.0
 */
function isRegExp(value: any): value is RegExp {
  return tag(value) === Tag.RegExp;
}

export default isRegExp;
