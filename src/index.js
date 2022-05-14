const MAX_BALLS = 99
const balls = []
const foundBalls = []

for (let index = 0; index < MAX_BALLS; index++) {
  balls[index] = index + 1
}

const playerElement = document.querySelector('#player .numbers')
const cpuElement = document.querySelector('#cpu .numbers')
const marksElement = document.querySelector('.marks')
const numberElement = document.querySelector('.number')
numberElement.addEventListener('click', findBall)

function createItem(ball) {
  const item = document.createElement('div')
  item.innerHTML = ball
  item.classList.add('item')
  return item
}

function addEventReload() {
  numberElement.removeEventListener('click', findBall)
  numberElement.addEventListener('click', () => window.location.reload())
}

function verifyWinner() {
  const player = document.querySelectorAll('#player .numbers .disabled-number');
  const cpu = document.querySelectorAll('#cpu .numbers .disabled-number')

  if (player.length === 15) {
    numberElement.style.fontSize = '15px'
    numberElement.innerHTML = 'Jugador Gana! \n volver a jugar?'
    addEventReload()
  } else if (cpu.length === 15) {
    numberElement.style.fontSize = '15px'
    numberElement.innerHTML = 'CPU Gana! \n volver a jugar?'
    addEventReload()
  }
}

function verifyNumber(number) {
  const player = document.querySelector('#player .numbers')
  const cpu = document.querySelector('#cpu .numbers')
  player.childNodes.forEach(element => {
    if (Number(element.innerHTML) === number) {
      element.classList.add('disabled-number')
    }
  })
  cpu.childNodes.forEach(element => {
    if (Number(element.innerHTML) === number) {
      element.classList.add('disabled-number')
    }
  })
  verifyWinner()
}

function findBall() {
  const randomNumber = Math.floor(Math.random() * balls.length)
  const foundBall = balls.splice(randomNumber, 1)
  foundBalls.push(foundBall[0])
  numberElement.innerHTML = foundBall
  marksElement.appendChild(createItem(foundBall))
  verifyNumber(foundBall[0])
}

function generateBallCard(element) {
  const auxBalls = [...balls]
  for (let index = 0; index < 15; index++) {
    const randomNumber = Math.floor(Math.random() * auxBalls.length)
    const ball = auxBalls.splice(randomNumber, 1)
    element.appendChild(createItem(ball))
  }
}

generateBallCard(playerElement)
generateBallCard(cpuElement)
