/**
    * Array
    * It's important to note that if the array contains objects or other mutable data types,
    *  the properties of those objects can still be modified
    *  even if the array itself is declared as readonly
------------------------------------------------------------------------------------------------
    * In this case, the readonly keyword applies to the array itself,
    *  not to the objects within the array.
    *  If you want to make the objects within the array immutable as well,
    *  you would need to use additional techniques like 
    *  using Object.freeze or using TypeScript's utility types to create deep readonly types.
 */


// Tip 1:
const readOnlyArray: readonly number[] = [1, 2, 3];

// This will result in a TypeScript error
readOnlyArray[0] = 4; // Error: Index signature in type 'readonly number[]' only permits reading.

const readOnlyObjects: readonly { name: string }[] = [{ name: 'John' }];
// Tip 2:
// This is allowed, as it modifies a property of an object within the array
readOnlyObjects[0].name = 'Jane';

console.log(readOnlyObjects); // Output: [{ name: 'Jane' }]


// Array of strings arrays [read from the right to the left]
const allUsers: string[][] = [
    ['John', 'Doe'],
    ['Jane', 'Doe'],
    ['Jack', 'Doe'],
];
// you can write this also Array<string[]> === string[][]
