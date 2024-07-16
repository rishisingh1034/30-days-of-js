// Tasks/Activities

// Activity 1: For Loop

// Task 01

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Task 02

for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}

// Activity 2: While Loop

// Task 03

let j = 1
let count = 0;
while (j <= 10) {
    count += j;
    j++;
}
console.log(count);

// Task 04

let k = 10;
while (k >= 1) {
    console.log(k);
    k--;
}

// Activity 2: do...While Loop
// Task 05

let l = 1
do {
    console.log(l);
    l++;
} while (l <= 5);

// Task 06
let n = 5;
let factorial = 1;
do {
    factorial *= n;
    n--;
} while (n > 0);
console.log(factorial);

// Activity 4: Nested Loops
let p = 5
for (let i = 1; i <= p; i++) {
    let row = ''
    for (let j = 1; j <= i; j++) {
        row += "*"
    }
    console.log(row);
}

// Activity 5: Loop control statements

//Task 08
for (let i = 1; i <= 10; i++) {
    if (i == 5) continue;
    console.log(i);

}

//Task 09
for (let i = 1; i <= 10; i++) {
    if (i == 7) break;
    console.log(i);

}
