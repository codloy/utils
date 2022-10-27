import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Reflect` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Reflect`, else `false`
 * @since 0.1.0
 */
function isReflect(value: any): value is typeof Reflect {
  return tag(value) === Tag.Reflect;
}

export default isReflect;
