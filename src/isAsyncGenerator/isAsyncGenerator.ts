import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `AsyncGenerator` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `AsyncGenerator`, else `false`
 * @since 0.1.0
 */
function isAsyncGenerator(value: any): value is AsyncGenerator {
  return tag(value) === Tag.AsyncGenerator;
}

export default isAsyncGenerator;
