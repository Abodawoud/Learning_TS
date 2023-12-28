/**
    * Alias is a custom type
 */

type User = {name: string, email: string, age: number};

function logIn(user: User): User{
    return {name: "name", email: "email", age: 20} || user;
}
logIn({name: "name", email: "email", age: 20});
