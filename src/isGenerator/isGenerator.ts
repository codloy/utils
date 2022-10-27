import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Generator` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Generator`, else `false`
 * @since 0.1.0
 */
function isGenerator(value: any): value is Generator {
  return tag(value) === Tag.Generator;
}

export default isGenerator;
