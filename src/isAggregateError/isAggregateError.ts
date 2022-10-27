/**
 * Check if `value` is an `AggregateError` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `AggregateError`, else `false`
 * @since 0.1.0
 */
function isAggregateError(value: any): value is false {
  //   return value instanceof ReferenceError;
  return false;
}

export default isAggregateError;
