"use strict";

function jadeneCase(str) {
  return str.split(" ");
}

console.log(jadeneCase("rwetgewr rtyr retye"));

//////////////////////////

function clearFalsy(array) {
  let newArr = [];
  array.forEach((element) => {
    if (element !== false) {
      newArr.push(element);
    }
  });

  return newArr;
}

console.log(clearFalsy([1, 1, 1, false, 2, 3, 4, 5, false]));

///////////////////////

///////////////////////

function removeItem(array, item) {
  let arr = [];

  array.forEach((element) => {
    if (element !== item) {
      arr.push(element);
    }
  });
  return arr;
}

console.log(removeItem([1, 1, 2, 3, 4, 56, 43, 2, 4, 56, 6, 6, 6, 6, 6], 6));

///////////////////////////////

const array = [
  [1, 2, 3, 9],
  [5, 18, 0, 12],
  [3, 5, 129, 5],
  [28, 99, 2, 34],
];

function func(array) {
  return array.map((res) => Math.max(...res));
}

class SquirrelClass {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  set name(name) {
    if (typeof name === "number") {
      throw new TypeError("name must be a string");
    }

    if (name === "" || name.length > 128) {
      throw new SyntaxError("");
    }
  }

  get name() {
    return this.name;
  }

  set age(age) {
    if (typeof age !== "number") {
      throw new TypeError("Age must be a number");
    }

    if (!Number.isInteger(age) || age > 50 || age < 0) {
      throw new RengeError("Age must be within 0 and 50");
    }
  }

  get age() {
    return this._age;
  }

  sayHi() {
    return `hi, my name is ${this.name}`;
  }
}

//////////////////////////////////////

class User {
    constructor(name,age,isMale){
    this._name = name;
    this._age = age;
    this._isMale = isMale;
}

set name(name) {
    if (typeof name === "number") {
      throw new TypeError("name must be a string");
    }

    if (name = "" || name.length > 128 || name !== "") {
      throw new SyntaxError("trulyalya");
    }
  }

  get name() {
    return this._name;
  }

  set age(age) {
    if (typeof age !== "number") {
      throw new TypeError("Age must be a number");
    }

    if (!Number.isInteger(age) || age > 50 || age < 0) {
      throw new RengeError("Age must be within 0 and 50");
    }
  }

  get age() {
    return this._age;
  }

  /* get getFullName(){
      return `${this.name} ${this.surname}`
  } */

  sayHi(){
      return `hi, my name is ${this.name}`;
  }

  sendMessage(mess){
      console.log(mess);
  }



}


class Admin extends User{
    constructor(name, age, isMale, isBanned= false){
    super (name, age, isMale,isBanned);

    
    }


    banUser(...rest){

        if (!rest){
            rest.sendMessage(false);
        }

    }

}

const user = new User ("anton", 25, true);

const admin = new Admin ("vasya", 26, true);





class Student extends User{
    constructor(name,surname,year){
        super(name);
        this.surname = surname;
        this.year = year;
    }


     getCourse(){
        let date = new Date();
        let course = 0;
       course = date.getFullYear(date) - this.year;
       if(course >5){
           return "You edded university";
       }
       return course;
    }


    getFullName(){
      return `${this.name} ${this.surname}`
  }


}

const student = new Student("Vasya", "Petrov", 2018);
