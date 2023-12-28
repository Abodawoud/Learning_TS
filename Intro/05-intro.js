/**
    * ReadOnly
    * Optional
    * & used to combine types
 */
var person = {
    _id: 1,
    name: 'John',
    age: 20
};
person._id = 2; //! Error:: Cannot assign to '_id' because it is a read-only property.
