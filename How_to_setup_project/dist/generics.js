"use strict";
/**
  * Generics are used to create reusable components.
  * <T> is a generic type.
  * <T> is a placeholder for the type of the argument passed to the function.
  * <T> is a placeholder for the return type of the function.
*/
// Example 1
// To use interfaces with generics, we need to specify the generic type in the function call.
// Generic will return the same type as the argument passed to the function.
function identity(arg) {
    return arg;
}
identity({
    name: 'water',
    brand: 'nestle',
    size: 500
}); // returns { name: 'water', brand: 'nestle', size: 500 }
identity(5); // returns 5
// Example 2
function identityTwo(val) {
    return val;
}
// Example 3
function identityThree(val) {
    return val;
}
