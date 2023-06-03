const fontSizeControl = document.getElementById('font-size-control');

const elOutput = document.querySelector('#text');

fontSizeControl.addEventListener('input', () => {
  elOutput.style.fontSize = fontSizeControl.value + 'px';
});
