const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

const incrementOnClick = incrementEl.addEventListener('click', () => {
  counterValue++;
  value.textContent = counterValue;
});

const decrementOnClick = decrementEl.addEventListener('click', () => {
  counterValue--;
  value.textContent = counterValue;
});
