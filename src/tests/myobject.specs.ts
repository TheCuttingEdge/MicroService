import MyObject from '..';
import * as assert from 'assert';

const INITIAL_VALUE = 5;
const INITIAL_VALUE_X2 = INITIAL_VALUE * 2;

const CURRENT_OBJECT = new MyObject(INITIAL_VALUE);

assert.strictEqual(String(CURRENT_OBJECT), "[object MyObject]", "String(obj) must be [object MyObject]");
// value() geter & setter
assert.strictEqual(CURRENT_OBJECT.value(), INITIAL_VALUE, "MyObject->value() getter must return INITIAL_VALUE");
CURRENT_OBJECT.value(INITIAL_VALUE_X2);
assert.strictEqual(CURRENT_OBJECT.value(), INITIAL_VALUE_X2, "MyObject->value(INITIAL_VALUE_X2) fired MyObject->value() getter must return INITIAL_VALUE x 2");
CURRENT_OBJECT.value(INITIAL_VALUE);
assert.strictEqual(CURRENT_OBJECT.value(), INITIAL_VALUE, "MyObject->value() getter must return INITIAL_VALUE");
// plusOne()
assert.notStrictEqual(CURRENT_OBJECT.plusOne(), INITIAL_VALUE, "MyObject->plusOne() must NOT equal INITIAL_VALUE");
assert.strictEqual(CURRENT_OBJECT.plusOne(), INITIAL_VALUE + 2, "MyObject->plusOne() must return INITIAL_VALUE + 2");
assert.strictEqual(CURRENT_OBJECT.plusOne(), INITIAL_VALUE + 3, "MyObject->plusOne() must return INITIAL_VALUE + 3");
assert.strictEqual(CURRENT_OBJECT.plusOne(), INITIAL_VALUE + 4, "MyObject->plusOne() must return INITIAL_VALUE + 4");
// multiply()
assert.strictEqual(CURRENT_OBJECT.multiply(10).value(), ((INITIAL_VALUE + 4) * 10), "MyObject->multiply().value() must return ((INITIAL_VALUE + 4) * 10)");
assert.notStrictEqual(CURRENT_OBJECT.multiply(-1), CURRENT_OBJECT, "MyObject->multiply(-1) must NOT equal MyObject");
assert.strictEqual(CURRENT_OBJECT.multiply(-1).multiply(-1).value(), CURRENT_OBJECT.value(), "MyObject->multiply(-1)->multiply(-1)->value() must equal MyObject->value()");
