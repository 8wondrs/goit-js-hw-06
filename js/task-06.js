const textInput = document.getElementById('validation-input');
const lettersLength = Number(textInput.dataset.length);
textInput.addEventListener('blur', event => {
  if (event.target.value.length === lettersLength) {
    event.target.classList.remove('invalid');
    event.target.classList.add('valid');
  } else {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
  }
});
