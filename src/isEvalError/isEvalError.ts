/**
 * Check if `value` is an `EvalError` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `EvalError`, else `false`
 * @since 0.1.0
 */
function isEvalError(value: any): value is EvalError {
  return value instanceof EvalError;
}

export default isEvalError;
