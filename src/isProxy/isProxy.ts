import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `Proxy` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `Proxy`, else `false`
 * @since 0.1.0
 */
function isProxy(value: any): value is typeof Proxy {
  return tag(value) === Tag.Proxy;
}

export default isProxy;
