function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const spanEl = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');

changeColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  body.setAttribute(
    'style',
    `background-color: ${randomColor}; transition: background-color 500ms linear`
  );
  spanEl.textContent = `${randomColor}`;
});
