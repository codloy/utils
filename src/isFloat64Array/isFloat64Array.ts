import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Float64Array` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Float64Array`, else `false`
 * @since 0.1.0
 */
function isFloat64Array(value: any): value is Float64Array {
  return tag(value) === Tag.Float64Array;
}

export default isFloat64Array;
