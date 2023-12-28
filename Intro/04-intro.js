/**
    * Alias is a custom type
 */
function logIn(user) {
    return { name: "name", email: "email", age: 20 } || user;
}
logIn({ name: "name", email: "email", age: 20 });
