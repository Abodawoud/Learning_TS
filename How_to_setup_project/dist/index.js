"use strict";
var _User_userId;
class User {
    constructor(name, email, age) {
        this.city = "";
        _User_userId.set(this, '');
        this._name = name;
        this._email = email;
        this._age = age;
    }
}
_User_userId = new WeakMap();
const me = new User('Yousef', 'y@g.com', 21);
// me.city = 'asd';
// professional way
class User2 {
    constructor(name, email, age, city = '') {
        this.name = name;
        this.email = email;
        this.age = age;
        this.city = city;
    }
}
const me2 = new User2('Yousef', 'y@g.com', 21);
// me.city = 'asd';
// [protected userId: string] is only accessible inside the class and its children
