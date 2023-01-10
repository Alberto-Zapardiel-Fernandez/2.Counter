const $number = document.getElementById('number'),
  $btnDecrease = document.getElementById('decrease'),
  $btnReset = document.getElementById('reset'),
  $btnIncrease = document.getElementById('increase');

let number = 0;

document.addEventListener('click', (e) => {
  if (e.target.id === $btnDecrease.id) number--;
  if (e.target.id === $btnIncrease.id) number++;
  if (e.target.id === $btnReset.id) number = 0;

  if (number > 0) $number.style.color = 'green';
  if (number < 0) $number.style.color = 'red';
  if (number === 0) $number.style.color = 'black';

  $number.textContent = number;
});
