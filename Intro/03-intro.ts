/**
    * When you write [value: type] the `[: type] called type annotation`
    * Funcion can return string or number or boolean or void or any or never
    * never means that the function will never return anything
    and it used in error handling that throws exception or terminate the program
 */
function add(num: number) {
    return num + 2;
}
add("2"); //! Error:: Argument of type '"2"' is not assignable to parameter of type 'number'.

function getUpper(val: string) {
    return val.toUpperCase();
}
getUpper(2); //! Error:: Argument of type '2' is not assignable to parameter of type 'string'.

function logIn(user: string, email: string, isPaid: boolean) {}
logIn("user", "email", "isPaid"); //! Error:: Argument of type '"isPaid"' is not assignable to parameter of type 'boolean'.

function signUp(user: string, email: string, isPaid: boolean = false) {}
signUp("user", "email");                // If you remove the |--> = false --> //! Error:: Expected 3 arguments, but got 2.

const sayHello = (name: string): string => {
    return `Hello ${name}`;
}

function createCourse({title: string, desc: string, price: number}): {title: string, desc: string, price: number} {
    return {title, desc, price};
}

// misbehaviour
function createCourse2({title, desc, price}): {title: string, desc: string, price: number} {
    return {title, desc, price};
}
let newCourse = {title: "title", desc: "desc", price: 100, extra: "extra"};

let course = createCourse({title: "title", desc: "desc", price: 100, extra: "extra"});
let course2 = createCourse(newCourse);//<---- misbehaviour


let course3 = ():{} => createCourse({title: "title", desc: "desc", price: 100});
