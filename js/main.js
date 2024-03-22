function generateRandomNumber() {
  return Math.floor(Math.random() * 100); // також можна було визначити рандомне число наближене Math.round() замість Math.floor()
}

let randomNumber = generateRandomNumber();
const input = document.getElementById('input');
const checkBtn = document.querySelector('.btn');
let p = document.querySelector('.p');
const restart = document.querySelector('.start');
const textNumber = document.querySelector('.ul');

checkBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const li = document.createElement('li');
  li.innerText = input.value.trim();
  textNumber.appendChild(li);
  if (randomNumber > input.value) {
    p.innerText = 'your number is heigh';
    p.style.background = 'red';
    input.value = '';
    textNumber.appendChild(li);
  } else if (randomNumber < input.value) {
    p.innerText = 'your number is low';
    p.style.background = 'red';
    input.value = '';
  } else {
    p.innerText = `Congratulation your number is ${randomNumber}`;
    p.style.background = 'green';
    input.value = '';
    input.disabled = true;
    input.placeholder = '';
    checkBtn.disabled = true;
    checkBtn.style.display = 'none';
  }

  if (textNumber.childElementCount > 10) {
    alert('YOU ARE LOOSER!');
    randomNumber = generateRandomNumber();
    p.style.background = 'none';
    p.innerText = '';
    textNumber.innerText = '';
    input.value = '';
  }
});
restart.addEventListener('click', () => {
  randomNumber = generateRandomNumber();
  p.style.background = 'none';
  p.innerText = '';
  textNumber.innerText = '';
  //   input.value = '';
  input.disabled = false;
  input.placeholder = 'write your number';
  checkBtn.disabled = false;
  checkBtn.style.display = '';
});
