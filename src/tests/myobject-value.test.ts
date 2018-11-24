import MyObject from '../';

const test = new MyObject(5);

console.log("Value getter: ", test.value() === 5);
console.log("Value setter: ", test.value(10) === 10);
