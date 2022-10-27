import isInt8Array from 'isInt8Array';
import isUint8Array from 'isUint8Array';
import isUint8ClampedArray from 'isUint8ClampedArray';
import isInt16Array from 'isInt16Array';
import isUint16Array from 'isUint16Array';
import isInt32Array from 'isInt32Array';
import isUint32Array from 'isUint32Array';
import isFloat32Array from 'isFloat32Array';
import isFloat64Array from 'isFloat64Array';
import isBigInt64Array from 'isBigInt64Array';
import isBigUint64Array from 'isBigUint64Array';

/**
 * Check if `value` is an `TypedArray` object
 *
 * @param value The value to check
 * @returns {boolean} `true` if value is an `TypedArray`, else `false`
 * @since 0.1.0
 */
function isTypedArray(
  value: any
): value is
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array
  | BigInt64Array
  | BigUint64Array {
  if (isInt8Array(value)) return true;
  if (isUint8Array(value)) return true;
  if (isUint8ClampedArray(value)) return true;
  if (isInt16Array(value)) return true;
  if (isUint16Array(value)) return true;
  if (isInt32Array(value)) return true;
  if (isUint32Array(value)) return true;
  if (isFloat32Array(value)) return true;
  if (isFloat64Array(value)) return true;
  if (isBigInt64Array(value)) return true;
  if (isBigUint64Array(value)) return true;

  return false;
}

export default isTypedArray;
