// Task 01

let text = document.getElementById('beautiful').innerText="Preety";

// Task 02

let styless = document.querySelector('.beauty');
styless.style.cssText = "background-color: green;";

// Task 03

let newElement = document.createElement('div');
newElement.textContent="I'm DIV";
document.body.append(newElement);

// Task 04

let ul = document.querySelector('.ul');

let listElement = document.createElement('li');
listElement.textContent="I'm List";
ul.appendChild(listElement);

// Task 05

let li1 = document.querySelector('.li1');

ul.removeChild(li1);

// Task 06

ul.removeChild(ul.lastChild);

// Task 07

let src = document.querySelector('#check')

src.setAttribute('type','radio');

// Task 08

styless.classList.add('newClass')
styless.classList.remove('newClass')

// Task 09

let btn = document.querySelector('.btn');
let para = document.querySelector('.para');

btn.addEventListener("click",()=>{
    para.textContent="Rishi Singh";
    
})

// Task 10

para.addEventListener("mouseover",()=>{
    para.style.cssText = "border-color:yellow;border-width:2px;border-style:solid";
})