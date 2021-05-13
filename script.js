let numberone = 0
let numbertwo = 0
let counter = 0
let answer = 0

document.getElementById('button').addEventListener('click', calculate)

function calculate () {
  numberone = document.getElementById('one').value
  numberone = parseInt(numberone)
  numbertwo = document.getElementById('two').value
  numbertwo = parseInt(numbertwo)

  for (counter = 0; counter < numberone; counter++) {
    (
      answer = answer + numbertwo
    )
  document.getElementById('answer').innerHTML = answer
}
