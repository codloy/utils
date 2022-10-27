import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Float32Array` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Float32Array`, else `false`
 * @since 0.1.0
 */
function isFloat32Array(value: any): value is Float32Array {
  return tag(value) === Tag.Float32Array;
}

export default isFloat32Array;
