import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Symbol` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Symbol`, else `false`
 * @since 0.1.0
 */
function isSymbol(value: any): value is Symbol {
  return tag(value) === Tag.Symbol;
}

export default isSymbol;
