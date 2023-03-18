const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

inputName.addEventListener('input', event => {
  outputName.textContent = event.target.value || 'Anonymous';
});
