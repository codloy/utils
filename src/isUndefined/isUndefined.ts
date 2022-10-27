import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `undefined` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `undefined`, else `false`
 * @since 0.1.0
 */
function Uint32Array(value: any): value is undefined {
  return tag(value) === Tag.Undefined;
}

export default Uint32Array;
