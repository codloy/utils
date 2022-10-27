/**
 * Check if `value` is an `JSON` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `JSON`, else `false`
 * @since 0.1.0
 */
function isJSON(value: any): value is JSON {
  try {
    JSON.parse(value);

    return true;
  } catch (err) {
    return false;
  }
}

export default isJSON;
