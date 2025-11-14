// prompt('Enter your number');
// let yourNumer=prompt('Enter your number');
// yourNumer=Number(yourNumer);


console.log(`CHALLENGE 1 - SEQUENTIAL FLOW CHALLENGES ... `);
console.log(`uncomment the code to make it work ...`);
/*
let yourNumber = prompt('Enter your number');
yourNumber =Number(yourNumber);
if(isNaN(yourNumber)){
    prompt(`You didn't enter a number \n Please enter your number`);
}
let opposite = yourNumber * -1;
let remainer = yourNumber % 2;
let thePower = 2 ** yourNumber;
let previousNumber= yourNumber -1;
let nextNumber = yourNumber +1;
console.log(`the opposide is ${opposite}, the remainer is ${remainer},  2 the power of ${yourNumber} is ${thePower}`);
console.log(remainer);
console.log(thePower);
console.log(`The previous number is ${previousNumber} , the given number is ${yourNumber}, and the next number is ${nextNumber}`);
*/

console.log(``);
console.log(`CHALLENGE 2 - Basic Arithmetic Operations ....`);
console.log(`uncomment the code to make it work ...`);
/*
let userFistNumber = prompt(`Enter your first number`);
let userSecondNumber = prompt(`Enter your second number`);
userFistNumber=Number(userFistNumber);
userSecondNumber=Number(userSecondNumber);
let sum = userFistNumber + userSecondNumber;
let difference = userFistNumber - userSecondNumber;
let product = userFistNumber * userSecondNumber;
let division = userFistNumber / userSecondNumber;
//Now we know that arithmetic mean is given by dividing the sum of 
// observations by the number of observations. 
// Arithmetic mean of numbers 2, 4, 6, 8 and 10 is 6.
let aritmeticMean = (userFistNumber + userSecondNumber) / 2;
let remainder = userFistNumber % userSecondNumber;
let powerOf= userFistNumber ** userSecondNumber;
console.log(`first number ${userFistNumber}, the second number ${userSecondNumber} \n Sum = ${sum} 
    \n difference = ${difference} \n product = ${product}, division =${division} 
    \n aritmeticMean = ${aritmeticMean} , remainder = ${remainder} 
    \n powerof = ${powerOf}`);

*/
console.log(``);
console.log(`CHALLENGE 3 -  Final Grade Calculation ....`);
console.log(`uncomment the code to make it work...`);
/*
let studentGrades1 = 9.5;
let studentGrades2 = 8.5;
let studentGrades3 = 8.5;

let average = (studentGrades1 + studentGrades2 + studentGrades3) /3;
console.log(`${average}`);
*/

console.log(``);
console.log(`CHALLENGE 4 - Next Term in Arithmetic Progression ....`);
console.log(`uncomment the code to make it work...`);
/*
let userFirstNr = prompt(`Enter your first number`);
userFirstNr = Number(userFirstNr);
let userSecondNr = prompt(`Enter your second number`);
userSecondNr = Number(userSecondNr);
let nextNr =userSecondNr + (userSecondNr - userFirstNr); 
console.log(`The next number in the sequence is: ${nextNr}`);
*/
console.log(``);
console.log(`CHALLENGE 5 - Currency Conversion ....`);
console.log(`uncomment the code to make it work...`);

/*
let amount=prompt(`Insert an amount to convert`);
amount= Number(amount);
const exchangeRate = 4.5;
let converted = amount * exchangeRate;
console.log(`The amount you enter ${amount} \n Converted amount: ${converted}`);

*/

console.log(``);
console.log(`CHALLENGE 6 - Dice Roll Simulation ....`);
console.log(`uncomment the code to make it work...`);

let userChoice;
do {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(diceRoll);
    userChoice = confirm(`You roll : ${diceRoll} \n Do you whant to dice roll?`);
} while (userChoice)

 let mix = [2,5,9, 1,6];
 console.log(mix.sort());
   