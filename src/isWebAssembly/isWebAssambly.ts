import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `WebAssembly` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `WebAssembly`, else `false`
 * @since 0.1.0
 */
function isWebAssembly(value: any): boolean {
  return tag(value) === Tag.WebAssembly;
}

export default isWebAssembly;
