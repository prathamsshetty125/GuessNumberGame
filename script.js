
let secretNumber;
let attempts = 0;
const maxAttempts = 10;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

// Start or restart the game
function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    attemptsDisplay.textContent = attempts;
    message.textContent = "Start guessing!";
    guessInput.value = "";
    guessInput.disabled = false;
    guessBtn.disabled = false;
    guessInput.focus();
}

// Check the user's guess
function checkGuess() {
    const guess = Number(guessInput.value);

    if (guessInput.value.trim() === "" ||
        !Number.isInteger(guess) ||
        guess < 1 || guess > 100) {
        message.textContent =
            "Enter a whole number between 1 and 100.";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;

    if (guess === secretNumber) {
        message.textContent =
            `Correct! You won in ${attempts} attempts!`;
        endGame();
    } else if (attempts >= maxAttempts) {
        message.textContent =
            `Game over! The number was ${secretNumber}.`;
        endGame();
    } else if (guess > secretNumber) {
        message.textContent = "Too high! Try a smaller number.";
    } else {
        message.textContent = "Too low! Try a bigger number.";
    }

    guessInput.value = "";
}

// Disable input after the game ends
function endGame() {
    guessInput.disabled = true;
    guessBtn.disabled = true;
}

// Button event listeners
guessBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", startGame);

// Allow Enter key to submit the guess
guessInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

// Initialize the game
startGame();
