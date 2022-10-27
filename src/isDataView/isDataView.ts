import tag from 'tag';
import Tag from 'types/Tag';

/**
 * Check if `value` is an `DataView` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `DataView`, else `false`
 * @since 0.1.0
 */
function isDataView(value: any): value is DataView {
  return tag(value) === Tag.DataView;
}

export default isDataView;
