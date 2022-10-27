import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `AsyncFunction` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `AsyncFunction`, else `false`
 * @since 0.1.0
 */
function isAsyncFunction(value: any): value is Function {
  return tag(value) === Tag.AsyncFunction;
}

export default isAsyncFunction;
