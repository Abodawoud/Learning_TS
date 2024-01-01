/*
    * Tupels vs Arrays
    * Tupels
    * Tupels are fixed length and fixed type
    * tupels are used to represent a collection of different values
    * if we used push method on tupels it won't give any error
    * -----------------------------------------------
    * Arrays
    * Arrays are dynamic length and dynamic type
    * arrays are used to represent a collection of similar values
*/
//tupels
let tup: [string, number, boolean] = ['hello', 1, true];
tup.push('world'); // no error


//arrays
//we can use union types to create tupels
let arr: (string | number | boolean)[] = ['hello', 1, true];
