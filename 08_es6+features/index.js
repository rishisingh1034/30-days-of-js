// day-08 ES6+ Features

// Task 01

let name = "Rishi";
let age = 19;

console.log(`Name:${name},Age:${age}`);

// Task 02

console.log(`I'm doing 30 Days of JS Challenge \n with the help od ChaiCode.com`);

// Task 03

const arr = [1,2,3,4,5];
const [a,b,d] = arr;

console.log(a,b,d);

// Task 04

const book = {
    title:"JavaScript",
    author:"ChaiCode",
    year:"2024"
}

const {title,author} = book;
console.log(title,author);

// Task 05

const newArr = [...arr,6,7,8];
console.log(newArr);

// Task 06

function result(...args){
    return args.reduce((index,acc)=> acc + index);
}

console.log(result(1,2,3,4,5));

// Task 07

function newFun(f1,f2=3){
    return f1*f2;
}

console.log(newFun(2,2));
console.log(newFun(2));

// Task 08

const person= {
    name,
    age,
    hello(){
        return `Hello ${this.name} i'm ${age} years old`
    },
    newAge() {
        this.age += 1;
        return`I am now ${this.age} years old.`;
      }
}

console.log(person.hello());
console.log(person.newAge());

// Task 09

const propName1 = 'firstName';
const propName2 = 'lastName';

const person1 = {
  [propName1]: 'Rishi',
  [propName2]: 'Singh',
  age: 19,
  greet() {
    console.log(`Hello, my name is ${this[propName1]} ${this[propName2]} and I am ${this.age} years old.`);
  }
};

console.log(person1);

person1.greet();