/**
    * Syntax
    * let variableName: type = value;
    * Types: number, string, boolean, any, Array, enum, void, null, undefined, never, tuple, object
    * typescript give you suggestions and warnings
 */
var greeting = "Hello World";
greeting = 76; //! Error:: Type '76' is not assignable to type 'string'.
var num = 2;
num = "Hello"; //! Error:: Type '"Hello"' is not assignable to type 'number'.
console.log(greeting);
console.log(num.valueOf());
