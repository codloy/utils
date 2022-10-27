import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `ArrayBuffer` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `ArrayBuffer`, else `false`
 * @since 0.1.0
 */
function isArrayBuffer(value: any): value is ArrayBuffer {
  return tag(value) === Tag.ArrayBuffer;
}

export default isArrayBuffer;
