// DAY-06 Arrays

//Tasks/Activities

// Activity 1: Array Creation and Access

// Task 01

const arr = [1,2,3,4,5];

console.log(arr);

// Task 02

console.log(arr[0],arr[arr.length-1]);

// Task 03

arr.push(6);
console.log(arr);

// Task 04

arr.pop();
console.log(arr);

// Task 05

arr.shift(0);
console.log(arr);

// Task 06

arr.unshift(0,1);
console.log(arr);

// Activity 2: Array Methods

// Task 07

let doubleArr = arr.map((num) => num*2);
console.log(doubleArr);

// Task 08

let evenArr = arr.filter((num)=>num%2==0)
console.log(evenArr);

// Task 09

let sumNum = arr.reduce((num,sum)=> sum + num);
console.log(sumNum);

// Activity 4: Array Iteration

//Task 10

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Task 11

arr.forEach(element => {
    console.log(element);
});

// Activity 5: multi dimensional Array

// Task 12

const arr2 = [
    [1,2,3],
    ["a","b","c"],
    ["p","q","r","s"]
]

console.log(arr2);

// Task 13

console.log(arr2[2][2]);