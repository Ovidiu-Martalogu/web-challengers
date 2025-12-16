console.log(`CHALLENGE 1: Count Above and Below the Average....`);
console.log(`Uncomment the code to make it work...`);
/*
let GredesNr = prompt(`How many grades?`);
GredesNr = Number(GredesNr);

let studentGrades = [];
for (let i = 0; i < GredesNr; i++) {
    studentGrades[i] = prompt(`Input grades ${i}`);
}
console.log(studentGrades);

// let studentGrades = [9, 10, 9, 9, 5];
let sum = 0;
for (let i = 0; i < studentGrades.length; i++) {
    sum += Number(studentGrades[i]);

}
console.log(sum);
let averageGrades = sum / studentGrades.length;
console.log(`Average grade is : ${averageGrades}`);

let number1 = [];
let number2 = [];
for (let i = 0; i < studentGrades.length; i++) {

    if (averageGrades < studentGrades[i]) {
        number1.push(studentGrades[i]);
        // console.log(`rades above the average:${studentGrades[i]}`);

    } else {
        number2.push(studentGrades[i]);
    }

    // console.log(`test:${studentGrades[i]}`);
}
console.log(`this is numbers above the average: ${number1}`);
console.log(`grades above the average:${number1.length}`);
console.log(`this is numbers below the average: ${number2}`);
console.log(`Grades BELOW the average:${number2.length}`);
*/

console.log(``);
console.log(`CHALLENGE 2: Weekly Temperature Extremes....`);
console.log(`Uncomment the code to make it work...`);

/*

let temperaturesNr= prompt(`Input the number of Temperatures`);
 temperaturesNr = Number(temperaturesNr);

let temperatures=[];

for (let i = 0; i < temperaturesNr; i++) {
    temperatures[i] = prompt(`Insert the temperatures ${i}`);
    
}
console.log(`The temperatures are : ${temperatures}`);


let minimum = Math.min(...temperatures);
let maximum = Math.max(...temperatures);
console.log(`Minimum temperature: ${minimum} C`);
console.log(`Maximum temperature: ${maximum} C`);




console.log(``);
console.log(`CHALLENGE 3: Greatest Daily Temperature Difference....`);
console.log(`Uncomment the code to make it work...`);
*/

console.log(``);
console.log(`CHALLENGE 3: Greatest Daily Temperature Difference ....`);
console.log(`Uncomment the code to make it work...`);

/*
let dayNumber = prompt(`Input the number of temperatures`);
dayNumber = Number(dayNumber);

let day1 = [];
let day2 = [];
let day3 = [];
let day4 = [];
let day5 = [];
let day6 = [];
let day7 = [];
let daysDiff = [];

for (let i = 0; i < dayNumber; i++) {
    day1[i] = Number(prompt(`insert temperatures for day1,temp: ${i + 1}`));
    day2[i] = Number(prompt(`insert temperatures for day2,temp: ${i + 1}`));
    day3[i] = Number(prompt(`insert temperatures for day3,temp: ${i + 1}`));
    day4[i] = Number(prompt(`insert temperatures for day4,temp: ${i + 1}`));
    day5[i] = Number(prompt(`insert temperatures for day5,temp: ${i + 1}`));
    day6[i] = Number(prompt(`insert temperatures for day6,temp: ${i + 1}`));
    day7[i] = Number(prompt(`insert temperatures for day7,temp: ${i + 1}`));
    daysDiff = [Math.max(...day1) - Math.min(...day1), Math.max(...day2) - Math.min(...day2),
    Math.max(...day3) - Math.min(...day3), Math.max(...day4) - Math.min(...day4),
    Math.max(...day5) - Math.min(...day5), Math.max(...day6) - Math.min(...day6),
    Math.max(...day7) - Math.min(...day7)
    ];
}
// day1dif = Math.max(...day1) - Math.min(...day1);
// day2dif = Math.max(...day2) - Math.min(...day2);
// day3 = Math.max(...day3) - Math.min(...day3);
// day4 = Math.max(...day4) - Math.min(...day4);
// day5 = Math.max(...day5) - Math.min(...day5);
// day6 = Math.max(...day6) - Math.min(...day6);
// day7 = Math.max(...day7) - Math.min(...day7);
// console.log(day1dif);
// console.log(day2dif);

console.log(`day1:${day1} , day2:${day2}, day3:${day3},
     day4:${day4}, day5:${day5}, day6:${day6}, day7:${day7}`);


console.log(`temperature difference are : ${daysDiff}`);


const index = daysDiff.indexOf(Math.max(...daysDiff));
console.log(`the index of greates temperature difference: ${index}`);
let daySelected;
switch (index) {
    case 0:
        daySelected = "day1";
        break;
        case 1:
        daySelected = "day2";
        break;
        case 2:
        daySelected = "day3";
        break;
        case 3:
        daySelected = "day4";
        break;
        case 4:
        daySelected = "day5";
        break;
        case 5:
        daySelected = "day6";
        break;
        case 6:
        daySelected = "day7";
        break;
     
    default:
        break;
}
console.log(`Greatest
      temperature difference : ${Math.max(...daysDiff)} is on ${daySelected}`);
      */

console.log(``);
console.log(`CHALLENGE 4: Random Excuse Generator ....`);
console.log(`Uncomment the code to make it work...`);

/*
let introductoryPhrase = ["Sorry, but", "I can't believe it, but",
    "I was planning to do it, but", "This might sound crazy, but"];
let perpetrator = ["my dog", "a drunken elf", "the pope",
    "your uncle on a skateboard", "Jesus and Budha"];
let motivation = ["insisted on playing a game of chess", "broke my computer",
    "made a mess", "stole my charger",
    "forced me to play rock paper scissors for 3 hours"
];
let randomPicker = Math.floor(Math.random() * introductoryPhrase.length);
let randomPhrase = Math.floor(Math.random()*perpetrator.length);
console.log(randomPhrase , randomPicker);
    console.log(`${introductoryPhrase[randomPicker]} ${perpetrator[randomPhrase]} ${motivation[randomPhrase]}`);
*/

console.log(``);
console.log(`CHALLENGE 5: Lottery Number ....`);
console.log(`Uncomment the code to make it work...`);

const maxNumber = 46;
let randomNr = Math.floor(Math.random() * maxNumber + 1);
//console.log(randomNr);
const playngNr = 5;


let playerNr = [];
let chosenNr = [];

for (let i = 0; i <= playngNr; i++) {
    playerNr[i] = prompt(`insert your ${i + 1} number between 1 and ${maxNumber}`);
    playerNr[i] = Number(playerNr[i]);
    chosenNr.push(Math.floor(Math.random(i) * maxNumber + 1));
}
playerNr.sort();
console.log(`Your numbers are: ${playerNr}`);


chosenNr.sort();
console.log(`Winning numbers are: ${chosenNr}`);
let allNumbers = [];
for (let i = 0; i <= playngNr; i++) {
    // console.log(` your number:${playerNr[i]} and winning numbers:${chosenNr[i]}`);
    allNumbers.push(playerNr[i], chosenNr[i])


}
console.log(`test:${allNumbers}`);
let dupli = [];
allNumbers.sort();
console.log(` `);

console.log(`test:${allNumbers}`);
for (let i = 0; i < allNumbers.length; i++) {
    if (allNumbers[i] === allNumbers[i + 1] && !dupli.includes(allNumbers[i])) {
        dupli.push(allNumbers[i]);
    }else{
        console.log(`You do not have winnig numbers!`);
    }
} console.log(dupli);
console.log(`winning numbers : ${dupli}`);