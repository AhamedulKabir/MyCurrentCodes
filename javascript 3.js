
// //// factorial function
// // function fact(n){
// //     let result = 1;
// //     let i = n;
// //     while(i >= 1){
// //         result = result * i;
// //         i--;
// //     }
// //     return result;
// // }
// // console.log(fact(5));


// //// Convert Feet to Inch
// // function feetToInch(feet){
// //     const inchValue = feet * 12;
// //     return inchValue;
// // }
// // const result = feetToInch(5);
// // console.log(result);

// //// Finding Bad Data in an Array
// // function findingBadData(arr){
// //     if(!Array.isArray(arr)){
// //         return 'Please provide me an array of number'
// //     } else {
// //         let badData = 0;
// //         for(let item of arr){
// //             if(typeof item !== 'number'){
// //                 return 'Please provide me an array of number'
// //             }else {
// //                 if(item < 0){
// //                     badData++;
// //                 }
// //             }
// //         }
// //         return badData;
// //     }
// // }
// // const result = [2, -5, -7, -13];
// // console.log(findingBadData(result));

// //// Gem to Diammond converter
// // function gemToDiamond(x,y,z){
// //     if(typeof x!== 'number' || typeof y!== 'number' || z!== 'number'){
// //         return 'Please provide me valid number input';
// //     } else if(x <0 || y < 0|| z < 0){
// //         console.log('Please provide me all positive number');
// //     } else{
// //         const friend1 = 21;
// //         const friend2 = 32;
// //         const friend3 = 43;
// //         const total = (x * friend1) + (y * friend2) + (z * friend3);
// //         if(total > 2000){
// //             return total - 2000;
// //         }else {
// //             return total;
// //         }
// //     }
// // }

// // console.log(gemToDiamond(100,5,1));

// //// Integer or not Integer
// // function isInteger(x){
// //     if(typeof x!== 'number'){
// //         return 'Please provided a valid number'
// //     } else {
// //         if(x% 1 == 0){
// //             return true;
// //         }else {
// //             return false;
// //         }
// //     }
// // }

// // console.log(isInteger(2.44));
// // console.log(isInteger(2));

// //// Is Equal to 7 or not
// // function isLGSeven(x){
// //     if(typeof x!== 'number'){
// //         return "Please provided me valid number";
// //     } else{
// //         const differ = x - 7;
// //         if(differ < 7){
// //             return differ;
// //         }else{
// //             return x * 2;
// //         }
// //     }
// // }
// // console.log(isLGSeven(15));

// ////A mind game program
// // function mindGame(x){
// //     if(typeof x!== 'number' || x <= 0){
// //         return 'Please provided me a positive number'
// //     } else {
// //         const result = (((x *3) + 10)/2)-5;
// //         return result;
// //     }
// // }
// // console.log(mindGame(6));

// //// Take a radius of a circle and will return the area of circle
// // function areaOfCircle(r){
// //     const pi = 3.1416;
// //     const area = pi * r * r;
// //     return area.toFixed(2);
// // }

// // console.log(parseFloat(areaOfCircle(7)));

// //// Lowercase or uppercase
// // function a(b){
// //     if(typeof b !== 'string'){
// //         return 'Please provided a valid file name!';
// //     }else{
// //         return b.toLowerCase().endsWith('Js');

// //     }
// // }
// // console.log(a('Hello.Js'));

// //// check leap year
// // function isLeapYear(year){
// //     if(year % 4 === 0 && year % 100 != 0 || year % 400 === 0){
// //         return `${year} is leap year`;
// //     }else {
// //         return `${year} is not leap year`;
// //     }
// // }

// // console.log(isLeapYear(1900));
// // console.log(isLeapYear(2024));



// /* Write a JS function AreaOfTringle that takes the base and height of a triangle and returns its area.
// Example 1:
// Input: 7, 8
// Output: 28
// Explanation: Base 7 and height 8. After calculation,its area is 14.
// Example 2:
// Input: 10, 10
// Output: 50

// Constraints:
// Base cannot be negative
// Height cannot be negative

// Code:
// function AreaOfTraingle(base, height) {
//     if (base < 0 || height < 0) {
//         return ('base or height cannot be negative');
//     }
//     const area = 0.5 * base * height;
//     return area;
// }
// console.log(AreaOfTraingle(8, 6));
// */

// /*Write a JavaScript Function   printNumber that takes an integer N and prints all the numbers between 0 to N.
// Example:
// Input: 5
// Output: 0 1 2 3 4 5
// Constraints:
// 0 < N

// Code:
// function printNumber(N){
//     for(var i = 0; i <= N; i++){
//         console.log(i);
//     }
// }
// console.log(printNumber(5));
// */

// /*Write a function that takes an array and returns a new array containing all the odd indexed elements from this array.
// If the new  array length is less than 3. Then add a new element “DEVZEROONE” at the last position of this new array.
// If the new  array length is greater than 3. Then add a new element “DEVZEROONE” at the first position of this new array.
// In this problem. We will consider 0 as an odd number.

// Example 1:
// Input: [ 3, 6, 5, 4, 8, 10 ]
// Output: [ “DEVZEROONE”, 3, 6, 4, 10 ]
// Example 2:
// Input: [ 0, 2, 4, 7, 9 ]
// Output: [ 0, 2, 7 ]

// Constraints:
// Array length cannot be negative or zero.

// Code:
// function solution(array){
//     let result = [];
//     for(let i = 0; i< array.length; i++)
//     if(i % 2 != 0 || i == 0) result.push(array[i])
//     if(result.length < 3){
//         result.push('DEVZEROONE');
//     }
//     if(result.length > 3){
//         result.unshift('DEVZEROONE');
//     }
//       return result;
// }
// console.log(solution([3, 6, 5, 4, 8, 10]));
// console.log(solution([0, 2, 4, 7, 9]));
// */

// /*
// Write a JavaScript function that takes an array that contains string and integer elements, and returns a new array with only integer elements.
// Example 1:
// Input: [ 3, 6, “hello”, 4, “3”,  8]
// Output: [ 3, 6,  4,  8]
// Constraints:
// Array length cannot be zero or negative.

// Code:
// function filterIntegers(arr){
//     const result = [];
//     for(let i =0; i < arr.length; i++){
//         const element = arr[i];
//         if(typeof element === 'number' && Number.isInteger(element)){
//             result.push(element);
//         }
//     }
//     return result;
// }
// getResult = [3, 6, 'hello', 4 , '7', 9];
// console.log(filterIntegers(getResult));

// */



// /*
// Write a JavaScript function countWords  that takes a string and returns the number of words contained in this string.
// Example:
// Input: ”Lorem ipsum dolor sit amet consectetur”
// Output: 6

// Constraints:
// using built-in functions is prohibited

// Code:
// function countWords(str){
//     let count = 0;
//     let isWord = false;

//     for(let i = 0; i< str.length; i++){
//         if(str[i] !== ''){
//             if(!isWord){
//                 count++;
//                 isWord = true;
//             }
//         }else {
//             isWord = false;
//         }
//     }
//     return count;
// }
// console.log(countWords('ashik is a good boy'));
// */

// /*
// Write a JavaScript Function that takes a word and returns the new word without including the first two characters.
// If string length less than 2 return -1,
// If the string length is 2 returns 1
// If the string length is equal to 2 then follow the below examples.
// Example 1:
// Input: array
// Output: ray
// Example 2:
// Input: object
// Output: ject
// Constraints:
// Word length cannot be negative or zero.

// Code:
// function newWord(word){
//     if(word.length< 1){
//         return -1;
//     }else if(word.length === 1){
//         return 1;
//     }else {
//         return word.slice(1);
//     }
// }
// console.log(newWord('array'));
// */


// /*

// function isEquivalent(a, b){
//    // arrays of property names
//    var aProps = Object.getOwnPropertyNames(a);
//    var bProps = Object.getOwnPropertyNames(b);

//    // If their property lengths are different, they're different objects
//    if (aProps.length != bProps.length) {
//        return false;
//    }

//    for (var i = 0; i < aProps.length; i++) {
//        var propName = aProps[i];

//        // If the values of the property are different, not equal
//        if (a[propName] !== b[propName]) {
//            return false;
//        }
//    }

//     //If everything is matched, correct
//     return true;
// }

// isEquivalent({ 'hi': 12 }, {'hi': 12});

// var obj1 = {
//     'prop1': 'test',
//     'prop2': function(){
//     }
// };

// var obj2 = {
//     'prop1': 'test',
//     'prop2': function(){
//     }
// };

// isEquivalent(obj1, obj2);

// var function1 =function() { console.log(2)};
// var function2 =function() { console.log(2)};
// console.log(function1== function2);

// */


// /*
// Picking a number and checking what is its square root of it.
// let theNumber = Number(prompt("Pick a number"));
// if(!Number.isNaN(theNumber)){
//     console.log("Your number is the square root of" + theNumber * theNumber);
// }
// */

// /*
// if (1 + 1 == 2)
// console.log("It's true");
// */

// /*
// Taking a number and giving square
// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
//     console.log("Your number is the root of " + theNumber * theNumber);
// } else {
//     console.log("Hey, Why didn't you give me a number?");
// }
// */

// /*
// Taking a number and give weather it is small....
// let num = Number(prompt("Pick a number"));
// if (num < 10) {
//     console.log("small");
// } else if (num < 100) {
//     console.log("Medium");
// } else {
//     console.log("Large");
// }
// */

// /*
// Loop-1
// let number = 0;
// while (number <= 12){
//     console.log(number);
//     number = number + 2;
// }
// */

// /*
// Loop-2
// let result = 2;
// let counter =4;
// while(counter < 10){
//     result = result * 2;
//     counter = counter + 1;
// }
// console.log(result);
// */

// /*
// Loop-3
// let yourName;
// do {
// yourName = prompt("Who are you?");
// } while (!yourName);
// console.log('hi '+ youName +'!');
// */

// /*
// Indenting Code If statement
// if (false != true) {
//     console.log("That makes sense");
//     if (1 < 2) {
//         console.log("No surprise there")
//     }
// }
// */

// /*
// if (false != true) {
//     console.log("That makes sense");
//     if (1 < 2) {
//         console.log("No surprise there")
//     }
// }
// */

// // let result = 1;
// // for (let counter = 0; counter < 10; counter = counter + 1){
// //     result = result * .5;
// // }
// // console.log(result);


// // Weather calculaor
// // switch (prompt("What is the wheather like?")){
// //     case "rainy":
// //     console.log("Remember to bring an umbralla");
// //     break;

// //     case "sunny":
// //     console.log("Dress lightly.");
// //     break;

// //     case "cloudy":
// //     console.log("Do not go outside");
// //     break;

// //     case "dull":
// //     console.log("It is a bad weather");
// //     break;

// //     case "wet":
// //     console.log("you should dry the room");
// //     break;

// //     default:
// //     console.log("Unknown weather type!");
// //     break;


// // square funciton
// // const square = function(x){
// //     return x * x;
// // };
// // console.log(square(5));

// // const makeNoise = function(){
// // //     console.log("Pling!");
// // // };
// // // makeNoise();

// // Exponent function
// // const power = function(base, exponent){
// //     let result = 1;
// //     for(let count = 0; count< exponent; count++){
// //         result *= base;
// //     }
// //     return result;
// // };
// // console.log(power(1,10));

// //Local and global scope
// // let x = 10;//local
// // if(true){
// //     var y = 20;//Global
// //     var z = 30;//global
// //     console.log(x + y + z);
// // }
// // console.log(x + y);
// // console.log(y + z);
// // console.log(z + x);

// // const hummus = function(factor){
//     //     const ingredient = function(amount, unit, name){
//     //         let ingredientAmount = amount * factor;
//     //         if(ingredientAmount > 1){
//     //             unit += "s";
//     //         }
//     //         console.log(`${ingredientAmount} ${unit}
//     //             ${name}`);
//     //     };
//     //     ingredient(1,"can", "chickpeas");
//     //     ingredient(0.25,"cup", "tahini");
//     //     ingredient(0.25,"cup", "lemon juice");
//     //     ingredient(1,"clove", "garlic");
//     //     ingredient(2,"tablespoon", "olive oil");
//     //     ingredient(0.5,"teaspoon", "cumin");
//     // }


// //     console.log("The future says: ", future());
// // function future(){
// //     return "You will never have flying cars";
// // }




// const power = (base, exponent)=>{
//     let result =1;
//     for(let count =0; count < exponent; count++){
//         result *= base;
//     }
//     return result;
// };
// console.log(power(2, 5));




// function greet(who){
//     //     console.log("Hello "+ who);
//     // }
//     // greet("Harry");
//     // console.log("Bye");




// function power(base, exponent = 2){
//     let result = 1;
//     for(let count = 0; count <exponent; count++){
//         result *= base;
//     }
//     return result;
// }
// console.log(power(4));
// console.log(power(2,6));



// function wrapValue(n){
//     let local = n;
//     return()=> local;
// }

// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);
// console.log(wrap1());
// console.log(wrap2());


// function multiplier(factor){
//     return number => number * number;
// }
// let twice = multiplier(2);
// console.log(twice(4));

// Recurrsion 
// function power(base, exponent){
//     if(exponent ==0){
//         return 1;
//     }else {
//         return base* power(base, exponent-1);
//     }
// }
// console.log(power(2,3));


// function findSolution(target){
//     function find(current, history){
//         if(current == target){
//             return history;
//         }else if(current > target){
//             return null;
//         }else {
//             return find(current + 5, `${history}+ 5`) || find(current* 3,`${history} *3)`);
//         }
//     }return find(1, "1");
// }
// console.log(findSolution(24));

// Growing functions
/*We want to write a program that prints two numbers: the numbers of cows and chickens on a farm, with the words Cows and Chickens after them and zeros padded before both numbers so that they are always three digits long.*/
// function printFarmInventory(cows, chickens){
//     let cowString = String(cows);
//     while(cowString.length < 3){
//         cowString = "0" + cowString;
//     }
//     console.log(`${cowString} Cows`);
//     let chickenString = String(chickens);
//     while(chickenString.length < 3){
//         chickenString = "0" + chickenString;
//     }
//     console.log(`${chickenString} Chickens`);
// }
// printFarmInventory(7, 11);



/*We want to write a program that prints two numbers: the numbers of cows and chickens on a farm, with the words Cows and Chickens after them and zeros padded before both numbers so that they are always three digits long.*/

// function printZeroPaddedWithLabel(number, label){
//     let numberString = String(number);
//     while (numberString.length < 3 ){
//         numberString = "0" + numberString;
//     }
//     console.log(`${numberString} ${label}`);
// }
// function printFarmInventory(cows, chickens,pigs){
//     printZeroPaddedWithLabel(cows, "Cows");
//     printZeroPaddedWithLabel(chickens, "Chickens");
//     printZeroPaddedWithLabel(pigs, "Pigs");
// }
// printFarmInventory(7, 11, 3);


// const f = function (a) {
//     console.log(a + 2);
// };

// function g(a, b) {
//     return a * b * 3.5;
// }
// let h = a => a % 3; 


// let listOfNumbers = [2, 3, 5, 7, 11];
// console.log(listOfNumbers[2]);
// console.log(listOfNumbers[0]);
// console.log(listOfNumbers[2-1]);


// let day1 = {
//     squirrel: false,
//     events: ["work", "touched tree", "pizza", "running"]
// };
// console.log(day1.squirrel);
// console.log(day1.wolf);
// day1.wolf = false;
// console.log(day1.wolf);


// let anObject = {left: 1, right: 2};
// console.log(anObject.left);
// delete anObject.left;
// console.log(anObject.left);
// console.log("left" in anObject);
// conosle.log("right" in anObject);


// function phi(table){
//     return(table[3] * table[0] - table[2] * table[1]) /
//         Math.sqrt((table[2] + table[3]) * 
//             (table[0] + table[1])*  
//             (table[1] + table[3])*
//             (table[0] + table[2]));
// }
// console.log(phi([76, 9, 4, 1]));

// Problem code***
// function tableFor(event, journal){
//     let table = [0 , 0 , 0 , 0 ];
//     for(let i = 0; i < journal.length; i++){
//         let entry = journal[i], index = 0;
//         if(entry.events.includes(event)) index += 1;
//         if(entry.squirrel) index += 2;
//         table[index] += 1;
//     }
//     return table;
// }
// console.log(tableFor("pizza", 3));