const fontSize = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSize.addEventListener('input', event => {
  text.style.fontSize = event.target.value + 'px';
});
