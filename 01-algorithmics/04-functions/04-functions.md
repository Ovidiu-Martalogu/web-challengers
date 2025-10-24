# FUNCTION CHALLENGES


## CHALLENGE 1: Count to N
Write a function that takes a positive integer as a parameter and returns an array containing all the numbers from 1 to the given number (inclusive).

📌 **Note:** 
The function should not take input from the UI.

**Example** 
```
// Given the parameter 7
countToN(7);

// Expected output:
[1, 2, 3, 4, 5, 6, 7]
```


## CHALLENGE 2: Count to N (comma-separated)
Write a function that takes a positive integer as a parameter and returns a string containing all the numbers from 1 to the given number (inclusive), separated by commas.

📌 **Note:** The function should not take input from the UI.

**Example** 
```
// Given the parameter 7
countToN(7);

// Expected output:
"1,2,3,4,5,6,7"
```


## CHALLENGE 3: Count Count Between Two Numbers (comma-separated)
Write a function that takes two positive integers as parameters and returns a string containing all the numbers between the two values (inclusive), separated by commas.

📌 **Note:**
- The function should not take input from the UI.
- The order of parameters does not matter; the function should always count in ascending order.

**Example 1** 
```
// Given the parameters 3 and 7
countBetween(3, 7);

// Expected output:
"3,4,5,6,7"
```

**Example 2** 
```
// Given the parameters 7 and 3 (swapped order)
countBetween(7, 3);

// Expected output:
"3,4,5,6,7"
```


## CHALLENGE 4: Find All Divisors
Write a function that takes a positive integer as a parameter and returns an array containing all of its divisors, including 1 and the number itself.

📌 **Note:** The function should not take input from the UI.

**Example 1** 
```
// Given the number 12
findDivisors(12);

// Expected output:
[1, 2, 3, 4, 6, 12]
```

**Example 2** 
```
// Given the number 7 (a prime number)
findDivisors(7);

// Expected output:
[1, 7]
```


## CHALLENGE 5: FizzBuzz Validator
Write a function that takes a number and a string answer as parameters and checks if the answer correctly follows the FizzBuzz game rules.

📌 FizzBuzz Rules:
- If the number is divisible by 3, the correct answer is "Fizz".
- If the number is divisible by 5, the correct answer is "Buzz".
- If the number is divisible by both 3 and 5, the correct answer is "FizzBuzz".
- Otherwise, the correct answer should be the number itself as a string.

**Examples ** 
```
// Given the number 15 and the answer "FizzBuzz"
checkFizzBuzz(15, "FizzBuzz");  // true ✅

// Given the number 9 and the answer "Fizz"
checkFizzBuzz(9, "Fizz");       // true ✅

// Given the number 10 and the answer "Buzz"
checkFizzBuzz(10, "Buzz");      // true ✅

// Given the number 7 and the answer "7"
checkFizzBuzz(7, "7");          // true ✅

// Given the number 8 and the answer "Fizz"
checkFizzBuzz(8, "Fizz");       // false ❌ (Correct answer: "8")
```


## CHALLENGE 6: Random Hexadecimal Color
Write a function that returns a random color in the hexadecimal format (e.g., #RRGGBB).

**Examples ** 
```
// Calling the function
randomHexColor();

// Possible outputs (randomized each time):
"#a3c4f3"
"#ff5733"
"#4e92b8"
"#fcf39b"
```


## CHALLENGE 7: Array Rotations
Write a function that takes an array as a parameter and displays all the possible rotations of the array elements in the console. A rotation of an array involves moving the first element to the last position and shifting all other elements one position to the left.

📌 **Note:** The function should not take input from the UI.

**Examples ** 
```
// Given the array
const arr = ["apple", "banana", "cherry"];

// Calling the function
arrayRotations(arr);

// Expected output in the console:
console.log(["apple", "banana", "cherry"]);
console.log(["banana", "cherry", "apple"]);
console.log(["cherry", "apple", "banana"]);
```


## CHALLENGE 7: Shuffle Array Elements
Write a function that receives an array as a parameter and returns a new array with the elements shuffled randomly. This can be used to randomize the order of players in a game.

📌 **Note:** 
- The function should not take input from the UI.
- The function should return the shuffled array instead of logging it

**Example ** 
```
// Given the array of player names
const players = ["Alice", "Bob", "Charlie", "Diana"];

// Calling the function to shuffle the players
const shuffledPlayers = shuffleArray(players);

// Expected output (shuffled order, random each time):
// shuffledPlayers might return something like:
// ["Charlie", "Bob", "Diana", "Alice"]
// or
// ["Diana", "Alice", "Charlie", "Bob"]
// or
// ["Bob", "Charlie", "Alice", "Diana"]
```


## CHALLENGE 8: Fortune Cookie Function
Write a function that returns a random fortune from a set of predefined fortunes, simulating the experience of opening a fortune cookie.

📌 **Note:** 
- The function should not take input from the UI 
- The function should return a string representing one random fortune each time it's called.

**Example ** 
```
// Calling the function to get a fortune
const fortune = getFortune();

// Expected output (randomized each time):
console.log(fortune);
// Possible outputs:
// "You will find great success in your career."
// "Your smile will brighten someone's day."
// "A pleasant surprise is in store for you."
// "An exciting opportunity will come your way soon."
```