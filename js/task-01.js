// const list = document.querySelector('#categories');
// console.dir(list);
// console.log([...list.children]);

// const listStatic = document.querySelectorAll('li.item');
// const listDynamic = document.getElementsByClassName('item');
// const list = document.querySelector('#categories');
// console.log(listStatic);
// console.log(listDynamic);

const list = document.querySelector('#categories');

const items = list.querySelectorAll('li.item');
console.log('Number of categories:', items.length);

items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const nestedItems = item.querySelectorAll('li');

  console.log('Category:', title);
  console.log('Elements:', nestedItems.length);
});
