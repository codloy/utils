import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Uint16Array` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Uint16Array`, else `false`
 * @since 0.1.0
 */
function Uint32Array(value: any): value is Uint16Array {
  return tag(value) === Tag.Uint16Array;
}

export default Uint32Array;
