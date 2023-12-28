/**
    * ReadOnly 
    * Optional
    * & used to combine types
 */

// ReadOnly
type Person = {
    readonly _id: number;
    name: string;
    age: number;
}
let person: Person = {
    _id: 1,
    name: 'John',
    age: 20
}
person._id = 2; //! Error:: Cannot assign to '_id' because it is a read-only property.

// Optional
type OptionalPerson = {
    _id: number;
    name?: string;
    age?: number;
}
// that means we can have a person without name and age

// & used to combine types
type creditDate = {
    creditDate: Date;
}
type creditName = {
    cardName: string;
}
type creditDetails = creditDate & creditName & {
    cvv: number;
};
