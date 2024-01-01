var person = {
    name: 'Maximilian',
    age: 30,
    greet: function (phrase) {
        return phrase + ' ' + this.name;
    },
    getname: function () {
        return this.name;
    },
};
console.log(person.greet('Hi there - I am'));
var person2 = {
    name: 'Maximilian',
    age: 30,
    greet: function (phrase) {
        return phrase + ' ' + this.name;
    },
    getname: function () {
        return this.name;
    },
};
console.log(person2.greet('Hi there - I am'));
