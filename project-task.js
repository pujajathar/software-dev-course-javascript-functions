/*
===========================================
🔁 Function Refactoring Activity
===========================================

🎯 Objective:
Students will identify repetitive or poorly organized code in a given script
and refactor it by creating programmer-defined functions.

This activity reinforces:
- Writing functions with no, single, and multiple parameters
- Using return statements effectively
- Improving code reusability and modularity

---
🧭 Instructions:

1️⃣ Analyze the provided script, which performs a series of repetitive tasks.

2️⃣ Identify sections of code that can be improved using functions.

3️⃣ Write reusable functions with appropriate parameters and return statements.

4️⃣ Refactor the original code to use your new functions.

5️⃣ Test the refactored script to ensure it produces the same output as the original.

---
*/

// ============================================
// ❌ Original Code (Before Refactoring)
// ============================================

// Script 1 - Greeting multiple users
/*console.log("Welcome, Alice!");
console.log("Welcome, Bob!");
console.log("Welcome, Charlie!");

// Script 2 - Sum calculation
let num1 = 5, num2 = 10;
let sum = num1 + num2;
console.log("The sum of 5 and 10 is " + sum);

// Script 3 - Product calculation
let product = num1 * num2;
console.log("The product of 5 and 10 is " + product);

// Script 4 - Print names from a list
let names = ["Alice", "Bob", "Charlie"];
console.log("Names in the list:");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}*/


// Refactor
function greet(name) {
    console.log(`Welcome, ${name}!`);
}

greet("Alice");
greet("Bob");
greet("Charlie");

let greeting = greet("David");
console.log(greeting);

// Script 2 - Sum calculation

let num1 = 5, num2 = 10;
function addNumbers(a, b) //Created function with parameters a and b
{
    let sum = a + b;     //Assigned ressult of addition to sum variable
    console.log(`The sum of ${a} and ${b} is ${sum}`); //print the output
    return sum; //return sum
}
let num3 = 6, num4 = 15;
addNumbers(5, 10);
addNumbers(num1, num2);
addNumbers(num3, num4);
console.log(addNumbers(2, 24));

// Script 3 - Product calculation

let product = num1 * num2;
function multiplyNumbers(a, b) {
    let product = a * b;
    console.log(`The product of ${a} and ${b} is ${product}`);
    return product;
}

multiplyNumbers(num1, num2);
multiplyNumbers(num3, num4);
console.log(multiplyNumbers(2, 24));

// Script 4 - Print names from a list

let names = ["Alice", "Bob", "Charlie"];
let moreNames = ["David", "Emma", "Fred"];

function printNames(nameList) {
    console.log("Names in the list:");
    for (let name of nameList) {
        console.log(name);
    }
}

printNames(names);
printNames(moreNames);

// BONUS! Reuse one function within another
function greetAll(nameList) {
    for (let name of nameList) {
        greet(name);
    }
}

greetAll(names);
greetAll(moreNames);

/*
/*
===========================================
🛠️ Steps for Refactoring
===========================================

🔹 Break Down Tasks into Functions:
   - Identify repetitive patterns (e.g., greetings, calculations, list printing)
   - Define separate functions for each task

🔹 Write Functions with Parameters and Return Values:
   - Parameterize functions for flexibility (e.g., pass in name, numbers, arrays)
   - Use return statements where necessary

🔹 Refactor the Original Code:
   - Replace repeated code with meaningful function calls
   - Keep your code clean, readable, and easy to maintain
*/

// ✅ Your refactored code goes below this line!
