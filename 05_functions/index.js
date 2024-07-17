// Day 05 functions

// Task/Activites

// Activity 1:Function Declartion

// Task 01

function oddEven(num){
    if(num%2==0)
        return "Even"
    else
    return "Odd"
}

console.log(oddEven(100));

// Task 02

function square(num) {
    return num*num;
}

console.log(square(9));

// Activity 2:Function Expression

// Task 03

const maximum = function(a,b){
    if(a>b)
        return a+" is Greater"
    else
    return b+" is Greater"
}

console.log(maximum(2,3));

// Task 04

const jointString = function(str1,str2){
    let newStr = "";
    return newStr.concat(str1,str2);
}

console.log(jointString("Chai ","Code"));

// Activity 3:Arrow Functions

// Task 05

const fun1 = (a,b)=>{
    return a+b;
}

console.log(fun1(2,3));

// Task 06

const character = (str,chr) => {
    return str.includes(chr);
}

console.log(character("bjp","r"));

// Activity 4 : Function Parameters and Default Values

// Task 07

function fun2(num1,num2=4) {
    return num1*num2;
}

console.log(fun2(9));

// Task 08

function agecalc(name,age=20){
    return `Congrats ${name} now you've become ${age} of old!`
}

console.log(agecalc("Rishi"));

// Activity 5 : Higher-Order Functions

// Task 09

function mainFun(func1,num){
    for (let i = 0; i < num; i++) {
        func1();
    }
}

function func1(){
     console.log("Arrow is good");
}

(mainFun(func1,3));

// Task 10

function fab(fab1,fab2,val){
    const result1 = fab1(val);
    const result2 = fab2(result1);

    return result2;
}

function powerof4(x){
    return x*x*x*x;
}

function half(y){
    return y/2;
}

console.log(fab(powerof4,half,2));