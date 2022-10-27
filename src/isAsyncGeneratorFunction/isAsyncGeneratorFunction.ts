import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `AsyncGeneratorFunctionFunction` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `AsyncGeneratorFunction`, else `false`
 * @since 0.1.0
 */
function isAsyncGeneratorFunction(value: any): value is AsyncGeneratorFunction {
  return tag(value) === Tag.AsyncGeneratorFunction;
}

export default isAsyncGeneratorFunction;
