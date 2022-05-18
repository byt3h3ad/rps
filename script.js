let userScore = 0
let compScore = 0
const userScore_span = document.getElementById("user-score")
const compScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")
// cached the DOM

function getComputerChoice () {
  const choices = ['r', 'p', 's']
  return choices[Math.floor(Math.random()*3)]
}

function toWord(letter) {
  if (letter === 'r') return 'Rock'
  if (letter === 'p') return 'Paper'
  if (letter === 's') return 'Scissors'
}
 
function win (user, computer) {
  const userChoice_div = document.getElementById(user)
  userScore++
  userScore_span.innerHTML = userScore
  compScore_span.innerHTML = compScore
  // result_p.innerHTML = `Your ${toWord(user)} beats the ${toWord(computer)}! You win!`
  result_p.innerHTML = `${toWord(user)}${'user'.fontsize(3).sub()} beat the ${toWord(computer)}${'comp'.fontsize(3).sub()}! You win!`
  document.getElementById(user).classList.add('green_glow')
  setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 300)
}

function lose (user, computer) {
  const userChoice_div = document.getElementById(user)
  compScore++
  userScore_span.innerHTML = userScore
  compScore_span.innerHTML = compScore
  // result_p.innerHTML = `Your ${toWord(user)} lost to the ${toWord(computer)}! You lose...`
  result_p.innerHTML = `${toWord(user)}${'user'.fontsize(3).sub()} lost to the ${toWord(computer)}${'comp'.fontsize(3).sub()}! You lose...`
  userChoice_div.classList.add('red_glow')
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300)
}

function draw (user, computer) {
  const userChoice_div = document.getElementById(user)
  result_p.innerHTML = `${toWord(user)}${'user'.fontsize(3).sub()} equals ${toWord(computer)}${'comp'.fontsize(3).sub()}. It's a DRAWWW..`
  document.getElementById(user).classList.add('grey_glow')
  setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300)
}

function game(userChoice) {
  const compChoice = getComputerChoice()
  switch (userChoice + compChoice) {
    case 'rs': 
    case 'pr': 
    case 'sp':
      win(userChoice, compChoice)
      break
    case 'sr':
    case 'rp':
    case 'ps':
      lose(userChoice, compChoice)
      break
    case 'ss':
    case 'rr':
    case 'pp':
      draw(userChoice, compChoice)
      break 
  }
}

function main() {
  rock_div.addEventListener('click', () => game('r'))

  paper_div.addEventListener('click', () => game('p'))

  scissors_div.addEventListener('click', () => game('s'))
}

main()