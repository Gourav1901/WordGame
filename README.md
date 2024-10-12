Description: Word Masters is a fun and interactive web-based word-guessing game inspired by games like Wordle. Developed using HTML, CSS, and JavaScript, this project challenges players to guess a random five-letter word within six attempts. The game provides real-time feedback, helping players figure out the correct word by indicating which letters are accurate, close (in the word but in the wrong position), or incorrect.

Key Features:

Word of the Day: Fetches a random word from an external API to ensure a unique word for each session.
User Input & Interaction: Players can type letters using the keyboard, add or delete characters, and submit guesses by pressing 'Enter.'
Real-time Validation: Each guess is validated through an API that checks if the word is valid, providing immediate feedback to the user.
Feedback System: Correct letters are marked as green, letters in the wrong position as yellow, and incorrect letters as grey, visually guiding the user.
Error Handling: Invalid words are indicated, and players are prompted to retry.
Responsive Design: The game is optimized for different screen sizes and provides a smooth user experience across devices.
End Game Condition: The game concludes when the player either guesses the word correctly or runs out of attempts. In the case of a win, the interface congratulates the user, while a loss reveals the correct word.
