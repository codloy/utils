import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `GeneratorFunction` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `GeneratorFunction`, else `false`
 * @since 0.1.0
 */
function isGeneratorFunction(value: any): value is GeneratorFunction {
  return tag(value) === Tag.GeneratorFunction;
}

export default isGeneratorFunction;
