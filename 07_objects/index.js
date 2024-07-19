
// Day 07 Objects

// Tasks/Activities

// Activity 1:Object Creation and Access

// Task 01

const book = {
    title:"JavaScript",
    author:"ChaiCode",
    year:"2024"
}
console.log(book);

// Task 02

console.log(`Book:${book.title}, Author:${book.author}`);

// Task 03
function addMethod(){
    return `${book.title},,${book.author}`
}

book.addMethod = addMethod();
console.log(book);

// Task 04
