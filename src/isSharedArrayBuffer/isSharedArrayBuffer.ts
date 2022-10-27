import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `SharedArrayBuffer` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `SharedArrayBuffer`, else `false`
 * @since 0.1.0
 */
function isSharedArrayBuffer(value: any): value is SharedArrayBuffer {
  return tag(value) === Tag.SharedArrayBuffer;
}

export default isSharedArrayBuffer;
