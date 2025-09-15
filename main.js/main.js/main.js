const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.choices button');
const resultMessage = document.getElementById('result-message');
const computerChoiceDisplay = document.getElementById('computer-choice');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        
        computerChoiceDisplay.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        
        const result = getResult(playerChoice, computerChoice);
        resultMessage.textContent = result;
    });
});

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a draw!";
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win! 🎉";
    } else {
        return "You lose! 😢";
    }
}

                                                                                                                                        