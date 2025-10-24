# EVENTS IN UI

## CHALLENGE 1: Display a Dice Roll for a Set of 2 Dice (with Images)
Create a program that simulates rolling two dice and displays the results as images when a button is clicked.

**Requirements:**
1. Create a button that, when clicked, generates two random numbers between 1 and 6 (simulating a dice roll).
2. Display the two dice results as images (you will need images for each number 1 through 6).
3. Each time the button is clicked, the dice images should update to show the result of the new roll.

**Bonus:**
Display a message with the sum of the two dice, or other additional details.


## CHALLENGE 2: Carrot in the Box 🥕
Create a UI that displays a number of squares, one of which hides a carrot. The user has to click on a square to reveal if it contains the carrot.

**Requirements:**
1. Grid of Squares: Create a grid of squares (e.g., 3x3, 4x4, etc.) where each square is clickable.
2. Hidden Carrot: Randomly hide a carrot in one of the squares. This can be done by adding a class or changing the square's content (e.g., a carrot emoji, image, or message).
3. User Interaction: When the user clicks on a square, the content of that square should be revealed (e.g., show "You found the carrot!" or a carrot image if the user clicks the correct square).
4. Feedback: Provide feedback to the user when they find the carrot (e.g., a success message, and an option to restart the game).

**Bonus:**
- After the carrot is found, allow the user to reset the grid and try again.
- Show the number of attempts it took to find the carrot.
- Include a countdown timer that shows the remaining time and stops the game when the time expires.


## CHALLENGE 3: Interactive Countdown Timer
Create a countdown timer that starts from a predefined number of hours, minutes, and seconds. The timer should update every second until it reaches zero. The user should be able to start, pause, and reset the timer.

**Requirements:**
1. The timer should start from a specific hardcoded time (e.g., 01:30:00 for 1 hour, 30 minutes).
2. It should update dynamically in the DOM every second.
3. When the countdown reaches zero, display a message like "Time's up!".
4. The time should always be formatted as HH:MM:SS.
5. Include Start, Pause, and Reset buttons.
    - **Start** begins or resumes the countdown.
    - **Pause** stops the countdown without resetting the time.
    - **Reset** sets the timer back to the original time.

**Bonus**
Add a progress bar that visually represents the percentage of time remaining.


## CHALLENGE 4: Trivia Quiz
Create a trivia game where where the user answers multiple-choice questions.

**Requirements:**
1. Display a text-based question with four possible answers.
2. Only one answer should be correct.
3. When the user selects an answer:
    - Show immediate feedback ("Correct!" or "Wrong! Try again.").
4. Allow the user to try again or move to the next question.

**Bonus**
- Randomize the answer order each time the question appears.
- Cycle through multiple questions with different images.
- Keep track of the user's score and display it at the end.


## CHALLENGE 5: Random Floating Images
 Create an interactive effect where clicking a button generates a random SVG shape (e.g., snowflake, heart, butterfly, sun). The SVG appears at a random size and position, then disappears after a short time.

 **Requirements:**
1. Add multiple buttons, each corresponding to a different SVG shape (Snowflake, Heart, Butterfly, Sun).
2. When a button is clicked:
    - A randomly sized SVG appears at a random position on the screen.
    - The SVG disappears after a set interval (e.g., 3 seconds).

**Bonus**
- Add a fade-out animation before disappearing.
- Make SVGs float down before vanishing 
- Animate SVGs (e.g., spin slightly).
- Ensure SVGs do not overlap