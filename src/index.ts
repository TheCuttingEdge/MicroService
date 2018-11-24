const macroNode: Addon = require('../build/Release/macro.node');
interface Addon { MyObject: MyObject }

/**
 * Type bindings for `MyObject` from `macro` C++ lib
 *
 * C++ reference: `Macro::MyObject`
 *
 * @class MyObject
 *
 * @constructor
 * @argument        {number}    value   Initial value
 * @alias           Macro::MyObject     `macro.node`
 * @see             macro.node
 */
interface MyObject {
    new(value?: any): MyObject;
    /**
     * Value getter
     *
     * @method  value       getter.
     *
     * @return  {number}    current value
     */
    value(): number;
    /**
     * Value setter
     *
     * @method  value       setter.
     * @param   {number}    value new value
     *
     * @return  {number}    sets current value
     */
    value(value: number): number;
    /**
     * Adds one to current `value` and returns `value`
     *
     * @method  plusOne
     *
     * @return  {number} current value after set
     */
    plusOne(): number;
    /**
     * Multiply current `value` to provided `value`
     *
     * @method  multiply
     * @param   {number} multiplier  multiplier
     *
     * @return  {number}        current value after set
     */
    multiply(multiplier: number): MyObject;
}

const MyObject: MyObject = macroNode.MyObject;
export default MyObject;
