const listEl = document.querySelector('#categories');
const itemsEl = listEl.querySelectorAll('.item');

console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach(item => {
  const headerEl = item.querySelector('h2').textContent;
  const numberOfItems = item.querySelectorAll('li').length;
  console.log(`Category: ${headerEl} \nElements: ${numberOfItems}`);
});
