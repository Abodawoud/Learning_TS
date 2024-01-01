/**
    *Interface
    * is a custom type that we can define like a type alias
 */
interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
    getname(): string;
    // another way
    // getname: () => string;
}
type Person2 = {
    name: string;
    age: number;
    greet(phrase: string): void;
    getname(): string;
    // another way
    // getname: () => string;
};
const person: Person = {
    name: 'Maximilian',
    age: 30,
    greet(phrase: string) {
        return phrase + ' ' + this.name;
    },
    getname() {
        return this.name;
    },
};
console.log(person.greet('Hi there - I am'));

const person2: Person2 = {
    name: 'Maximilian',
    age: 30,
    greet(phrase: string) {
        return phrase + ' ' + this.name;
    },
    getname() {
        return this.name;
    },
};
console.log(person2.greet('Hi there - I am'));


// the difference between interface and type
interface User {
    name: string;
    age: number;
}
// close and open the interface to add more properties
interface User {
    email: string;
    password: string;
}
//extends
interface Admin extends User {
    role: "Admin" | "Moderator" | "User";
}
// type Admin = User & { role: "Admin" | "Moderator" | "User" }; //using union types
