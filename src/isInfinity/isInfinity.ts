import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Infinity` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Infinity`, else `false`
 * @since 0.1.0
 */
function isInfinity(value: any): value is typeof Infinity {
  return tag(value) === Tag.Infinity;
}

export default isInfinity;
