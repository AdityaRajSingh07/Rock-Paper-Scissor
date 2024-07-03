const choices = ['rock', 'paper', 'scissors'];

const buttons = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const userChoice = e.target.id;
        userChoiceDisplay.textContent = `Your choice: ${userChoice}`;
        
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        computerChoiceDisplay.textContent = `Computer's choice: ${computerChoice}`;
        
        const result = getResult(userChoice, computerChoice);
        resultDisplay.textContent = `Result: ${result}`;
    });
});

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a draw!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}
