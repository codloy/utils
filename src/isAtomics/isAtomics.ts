import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Atomics` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Atomics`, else `false`
 * @since 0.1.0
 */
function isAtomics(value: any): value is Atomics {
  return tag(value) === Tag.Atomics;
}

export default isAtomics;
