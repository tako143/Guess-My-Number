const againBtn = document.querySelector('.again-button');
const hiddenNumber = document.querySelector('.hidden-number');
const inputNumber = document.querySelector('#guess');
const checkBtn = document.querySelector('.check-button');
const message = document.querySelector('.message');
const scoreElem = document.querySelector('.score');
const highScoreElem = document.querySelector('.highscore');

//generate number
let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
console.log(secretNumber);
checkBtn.addEventListener('click', function() {
    let guess = Number(inputNumber.value);
    if (!guess) {
        message.textContent = '⛔️ No number!';
    }else if(guess !== secretNumber) {
        if(score > 1) {
            message.textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
            score--;
        } else {
            message.textContent = '💥 You lost the game!';
            document.body.style.backgroundColor = 'red';
            score = 0;
            checkBtn.disabled = true;
        }
    }else{
        message.textContent = '✅🎉 Correct Number!';
        hiddenNumber.textContent = secretNumber;
        document.body.style.backgroundColor = 'green';
        checkBtn.disabled = true;
        inputNumber.disabled = true;

        if(score > highScore) {
            highScore = score;
            highScoreElem.textContent = score;
        }
    }
    scoreElem.textContent = score;
});

againBtn.addEventListener('click', () => {
    secretNumber = Math.floor(Math.random() * 20 + 1);
    console.log(secretNumber);
    score = 20;
    scoreElem.textContent = score;
    document.body.style.backgroundColor = '#222222';
    message.textContent = 'Start guessing...';
    hiddenNumber.textContent = '?';
    checkBtn.disabled = false;
    inputNumber.disabled = false;
    inputNumber.value = '';
});

