/**
    * When you write [value: type] the `[: type] called type annotation`
    * Funcion can return string or number or boolean or void or any or never
    * never means that the function will never return anything
    and it used in error handling that throws exception or terminate the program
 */
function add(num) {
    return num + 2;
}
add("2"); //! Error:: Argument of type '"2"' is not assignable to parameter of type 'number'.
function getUpper(val) {
    return val.toUpperCase();
}
getUpper(2); //! Error:: Argument of type '2' is not assignable to parameter of type 'string'.
function logIn(user, email, isPaid) { }
logIn("user", "email", "isPaid"); //! Error:: Argument of type '"isPaid"' is not assignable to parameter of type 'boolean'.
function signUp(user, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
signUp("user", "email"); // If you remove the |--> = false --> //! Error:: Expected 3 arguments, but got 2.
var sayHello = function (name) {
    return "Hello ".concat(name);
};
function createCourse(_a) {
    var string = _a.title, string = _a.desc, number = _a.price;
    return { title: title, desc: desc, price: price };
}
// misbehaviour
function createCourse2(_a) {
    var title = _a.title, desc = _a.desc, price = _a.price;
    return { title: title, desc: desc, price: price };
}
var newCourse = { title: "title", desc: "desc", price: 100, extra: "extra" };
var course = createCourse({ title: "title", desc: "desc", price: 100, extra: "extra" });
var course2 = createCourse(newCourse); //<---- misbehaviour
var course3 = function () { return createCourse({ title: "title", desc: "desc", price: 100 }); };
