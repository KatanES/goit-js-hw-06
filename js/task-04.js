let counterValue = 0;
const bttnDecrement = document.querySelector(`[data-action="decrement"]`);
const bttnIncrement = document.querySelector(`[data-action="increment"]`);
const value = document.querySelector('#value');

bttnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

bttnIncrement.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});
