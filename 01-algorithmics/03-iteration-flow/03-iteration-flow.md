# ITERATION FLOW CHALLENGES

## CHALLENGE 1: Count to N
Write a program that takes a positive number as input and counts from 1 up to that number, displaying each value along the way.

**Example** 
```
Input: 7

Output: 
    1
    2
    3
    4
    5
    6
    7
```

## CHALLENGE 2: Count to N (comma-separated)
Write a program that takes a positive integer as input and prints the numbers from 1 to that number in a single line, separated by commas.

**Example** 
```
Input: 7

Output: 1, 2, 3, 4, 5, 6, 7
```


## CHALLENGE 3: Count Count Between Two Numbers (comma-separated)
Write a program that takes two positive integers as input and prints the numbers from the smaller number to the larger number in a single line, separated by commas.

**Example 1** 
```
Input: 3 8

Output: 3, 4, 5, 6, 7, 8
```

**Example 2** 
```
Input: 8 3

Output: 3, 4, 5, 6, 7, 8
```


## CHALLENGE 4: Count & Filter by 3 or 4 (comma-separated)
Write a program that takes two positive integers as input and prints the numbers between them (inclusive) that are divisible by 3 or 4, in a single line, separated by commas.

**Example 1** 
```
Input: 3 15

Output: 3, 4, 6, 8, 9, 12, 15
```

**Example 2** 
```
Input: 15 3

Output: 3, 4, 6, 8, 9, 12, 15
```


## CHALLENGE 5: FizzBuzz
Write a program that prints the numbers from 1 to a given positive integer. However, for multiples of 3, print "Fizz" instead of the number, for multiples of 5, print "Buzz", and for numbers that are multiples of both 3 and 5, print "FizzBuzz".

**Example** 
```
Input: 15

Output: 
    1  
    2  
    Fizz  
    4  
    Buzz  
    Fizz  
    7  
    8  
    Fizz  
    Buzz  
    11  
    Fizz  
    13  
    14  
    FizzBuzz
```

## CHALLENGE 6: Number Guessing Game
Write a program that generates a random number between 1 and a specified maximum value (e.g., 100) and asks the user to guess the number. After each guess, the program should tell the user whether their guess is too high, too low, or correct. The game continues until the user guesses the correct number.

### Requirements
1. Generate a random number within a specified range (1 to N).
2. Ask the user to input their guess.
3. After each guess, give feedback:
4. "Too high" if the guess is greater than the random number.
5. "Too low" if the guess is less than the random number.
6. "Correct" if the guess matches the random number.
7. Track the number of attempts and display it when the user guesses correctly.

**Example** 
```
Input:  Guess a number between 1 and 100: 50  
Output: Your guess is too low.  

Input:  Guess a number between 1 and 100: 75  
Output: Your guess is too high.  

Input:  Guess a number between 1 and 100: 60  
Output: You guessed the number in 3 attempts.
```


## CHALLENGE 7: Dice Game Simulation

Write a program that simulates a dice game where two players take turns to roll a 6-sided die. Each player rolls once per turn, and the player with the higher roll wins the round. The game continues for a set number of rounds, and at the end, the program should declare the winner based on who has won the most rounds.

### Requirements
1. Simulate the rolling of a 6-sided die (random numbers between 1 and 6).
2. Let the user input how many rounds they want to play.
3. For each round, roll a die for Player 1 and Player 2.
4. After each round, display the outcome:
    - "Player 1 wins the round" if Player 1's roll is higher.
    - "Player 2 wins the round" if Player 2's roll is higher.
    - "It's a tie" if both players roll the same number.
5. At the end of all rounds, display the total number of rounds won by each player and declare the overall winner:
    - "Player 1 is the winner" or "Player 2 is the winner" based on who won more rounds.
    - If both players tie in total rounds won, declare "It's a tie."

**Example** 
```
Input:  
    How many rounds would you like to play? 5  

Output:  
    Round 1:  
    Player 1 rolled: 4  
    Player 2 rolled: 3  
    Player 1 wins the round.  

    Round 2:  
    Player 1 rolled: 6  
    Player 2 rolled: 6  
    It's a tie.  

    Round 3:  
    Player 1 rolled: 2  
    Player 2 rolled: 5  
    Player 2 wins the round.  

    Round 4:  
    Player 1 rolled: 3  
    Player 2 rolled: 1  
    Player 1 wins the round.  

    Round 5:  
    Player 1 rolled: 1  
    Player 2 rolled: 4  
    Player 2 wins the round.  

    Final Result:  
    Player 1 won 2 rounds.  
    Player 2 won 3 rounds.  
    Player 2 is the winner!
```


## CHALLENGE 8: Russian Roulette Simulation

Write a JavaScript program that simulates a game of Russian Roulette using a browser confirm modal box. The game randomly loads one chamber with a "bullet," and the user can "pull the trigger" by clicking the "OK" button on the modal. If the bullet is in the chamber, the user "loses." If there’s no bullet, the game continues. The user can also choose to quit by clicking "Cancel."

### Requirements
1. Simulate a 6-chamber revolver (6 possible positions).
2. Randomly load one chamber with a "bullet" (a randomly chosen position in the 6 chambers).
3. Use a "confirm" modal to ask the user if they want to "pull the trigger" or quit.
    - Clicking "OK" simulates pulling the trigger.
    - Clicking "Cancel" ends the game (user quits).
4. If the user "pulls the trigger":
    - If the bullet is in the current chamber, show an alert: "Bang! You lose." and end the game.
    - If the bullet is not in the chamber, show an alert: "Click! No bullet, try again."
5. Repeat until the user either "loses" or "quits."
6. Optionally, keep track of the number of successful pulls before the game ends.

**Example** 
```
Input:  Pull the trigger? (Click OK to pull, Cancel to quit):  
Output: Click! No bullet, try again.

Input:  Pull the trigger? (Click OK to pull, Cancel to quit):  
Output: Click! No bullet, try again.

Input: Pull the trigger? (Click OK to pull, Cancel to quit):  
Output: Bang! You lose.

Output: You survived 2 rounds.
```

## CHALLENGE 9: Survival Game

Write a JavaScript program that simulates a survival challenge. The program should prompt the user to enter:
- The player's name
- The player's starting Hit Points (HP) (maximum 100)
- A hunting skill level (between 0 and 10)

The simulation will run for a set number of days. Each day, the player goes hunting to find food.

### Hunting Mechanics:
- The chance of a successful hunt is determined by the hunting skill.
    - A hunting skill of 0 means 0% success (always fails).
    - A hunting skill of 10 means 100% success (always succeeds).
    - A hunting skill of X gives an X × 10% success rate.
- Use a simulated dice roll (a random number between 1 and 10) to determine the outcome:
    - If the roll is less than or equal to the hunting skill, the hunt succeeds (+10 HP).
    - Otherwise, the hunt fails (-10 HP).

### Logging Daily Events:
Use console.log() to display the events of each day. Example output:
```
    Day 4 starts!  
    John (Hunting Skill: 5) rolls a 8  
    John is starving... 💀  
    Current HP: 50  
```

If the player's HP reaches 0 or below, they die and the simulation ends early. Otherwise, the game continues until the final day.

Good luck, survivor! 🚀