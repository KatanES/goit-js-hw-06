// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
document.body.style.backgroundColor = '#abbbc4';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  controls: document.querySelector('#controls'),
  inputNumberEl: document.querySelector('[type="number]'),
  createBtnEl: document.querySelector('button[data-create]'),
  destroyBtnEl: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};
boxes.style.display = 'flex';
boxes.style.flexWrap = 'wrap';
boxes.style.alignItems = 'center';
boxes.style.marginTop = '30px';

refs.inputNumberEl.addEventListener('input', toogleValue);
refs.createBtnEl.addEventListener('click', () => {
  createBoxes(Number(inputNumberEl.value));
});

destroyBtnEl.addEventListener('click', destroyBoxesMarkup);
