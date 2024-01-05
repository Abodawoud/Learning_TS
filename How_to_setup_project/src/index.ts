class User {
  _name: string
  _email: string
  _age: number
  readonly city: string = ""
  #userId: string = ''

  constructor(name: string, email: string, age: number) {
    this._name = name;
    this._email = email;
    this._age = age;
  }
}
const me = new User('Yousef', 'y@g.com', 21);
// me.city = 'asd';


// professional way
class User2 {
  constructor(
    public name: string,
    public email: string,
    public age: number,
    public readonly city: string = '',
    // private userId: string
  ) {
  }
}
const me2 = new User2('Yousef', 'y@g.com', 21);
// me.city = 'asd';

// [protected userId: string] is only accessible inside the class and its children
