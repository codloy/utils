import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Math` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Math`, else `false`
 * @since 0.1.0
 */
function isMath(value: any): value is Math {
  return tag(value) === Tag.Math;
}

export default isMath;
