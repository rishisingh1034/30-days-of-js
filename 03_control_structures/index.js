//Tasks/Activities

// Activity 1: If-Else Statements

//task 01

function num(num) {
    if (num == 0) {
        return "Zero";
    } else if (num > 0) {
        return "Positive";
    } else {
        return "Negative";
    }
}

console.log(num(2));

//task 02

function age(age) {
    if (age >= 18) {
        return "Eligible to Vote!"
    } else {
        return "Not Eligible to Vote!"
    }
}
console.log(age(19));

//Activity 2: Nested If-Else Statements
//task 03

function largest(a, b, c) {
    if (a > b && a > c) {
        return "Largest:" + a;
    } else if (b > a && b > c) {
        return "Largest:" + b;
    } else {
        return "Largest:" + c;

    }
}

console.log(largest(2, 3, 4));

//Activity 3: Switch Case
//task 04

let day;
switch (new Date().getDay()) {
    case 1:
        day = "Sunday"
        break;
    case 2:
        day = "Monday"
        break;
    case 3:
        day = "Tuesday"
        break;
    case 4:
        day = "Wednesday"
        break;
    case 5:
        day = "Thursday"
        break;
    case 6:
        day = "Friday"
        break;
    case 7:
        day = "Saturday"
        break;
    default:
        break;
}

console.log(day);

//Task 05

let grade = 45;
switch (true) {
    case grade >= 90:
        grade = "A"
        break;
    case grade >= 80:
        grade = "B";
        break;
    case grade >= 60:
        grade = "C";
        break;
    case grade >= 33:
        grade = "D";
        break;
    default:
        grade = "E"
        break;
}

console.log(grade);

// Activity 4: Conditional (Ternary) Operator
//Task 06

let newNum = 33;
let oddEven = newNum % 2 == 0 ? "Even" : "Odd";

console.log(oddEven);

//Activity 5: Combining Conditions
//task 07

function leapYear(year) {
    if ((year % 400 == 0) || (year % 100 != 0) && (year % 4 == 0)){
        return "Leap Year";
    }else{
        return "Not a Leap Year"
    }
}

console.log(leapYear(2024))