
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
function bookYear(year){
    return book.year = year;
}

book.year = bookYear(2022);
console.log(book);

// Task 05

const library = {
    name:"city lib",
    address:"b-steet",
    books:[
        {
            title:"a",
            auther:"me",
            year:"2010"
        },
        {
            title:"b",
            auther:"you",
            year:"2015"
        },
        {
            title:"c",
            auther:"they",
            year:"2020"
        },
    ]
}

console.log(library);

//Task 06

console.log(library.name);
console.log(library.books.map((title)=>title.title));

// Task 07

library.books.map((book)=>{
    book.details = function(){
        return `${this.title} and ${this.year} /n`
    }
    console.log(book.details());
})

// Task 08

library.books.forEach(book => {
    console.log(`${book.title}`);
    for (const i in book) {
        if (book.hasOwnProperty(book)) {
            console.log(i);
        }
    }
    
});

// Task 09

const key = Object.keys(book);
console.log(key);

const value = Object.values(book);
console.log(value);