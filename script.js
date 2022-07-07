
const rock = document.querySelector('.Rock');
let result = document.querySelector('.result');
let playerScore = document.querySelector('.playerScore');
let comScore = document.querySelector('.comScore');
let winCount = 0;
let loseCount = 0;
rock.addEventListener('click', function(e){
    playRound(1);
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function playRound(playerSelection){
    const rock = 1;
    const paper = 2;
    const scissors = 3;
    let comSelection = getRandomInt(3)+1; // 1 = rock, 2 = paper, 3 = scissors ... 1>3  2>1  3>2
    if (playerSelection == comSelection) {
        console.log("its a tie");
        result.textContent = "It's a tie!";
    }
    else if ((playerSelection == rock && comSelection == scissors)||(playerSelection == paper && comSelection == rock)||(playerSelection == scissors && comSelection == paper)  ) {
        console.log("You Win!");
        result.textContent = 'You Win!';
        winCount++;
        console.log(winCount);
        playerScore.textContent = winCount;
    }
    else {
        console.log("You Lose!");
        result.textContent = 'You Lose!';
        loseCount++;
        comScore.textContent = loseCount;
}
}