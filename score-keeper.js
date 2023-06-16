const playerOneButton = document.querySelector('.btn-success');
const playerTwoButton = document.querySelector('.btn-primary');
const resetButton = document.querySelector('.btn-danger');

const scoreBoardOne = document.querySelector('#scoreOne')
const scoreBoardTwo = document.querySelector('#scoreTwo')

const selector = document.querySelector('#inlineFormCustomSelect')




const winnerOne = function () {
    scoreBoardOne.style.color = 'green'
}
const looserOne = function () {
    scoreBoardOne.style.color = 'red'
}
const winnerTwo = function () {
    scoreBoardTwo.style.color = 'green'
}
const looserTwo = function () {
    scoreBoardTwo.style.color = 'red'
}
const resetColor = function () {
    scoreBoardOne.style.color = '#212529'
    scoreBoardTwo.style.color = '#212529'
}


playerOneButton.addEventListener('click', function () {
    const currentNum = parseInt(scoreBoardOne.innerText) + 1
    scoreBoardOne.innerText = currentNum
    if (currentNum === parseInt(selector.value)) {
        winnerOne()
        looserTwo()
        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;
    }
})

playerTwoButton.addEventListener('click', function () {
    const currentNumTwo = parseInt(scoreBoardTwo.innerText) + 1
    scoreBoardTwo.innerText = currentNumTwo
    if (currentNumTwo === parseInt(selector.value)) {
        looserOne()
        winnerTwo()
        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;
    }
})


resetButton.addEventListener('click', function () {
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
    scoreBoardOne.innerText = 0
    scoreBoardTwo.innerText = 0
    resetColor()
})
