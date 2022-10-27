import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Function` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Function`, else `false`
 * @since 0.1.0
 */
function isFunction(value: any): value is Function {
  return tag(value) === Tag.Function;
}

export default isFunction;
