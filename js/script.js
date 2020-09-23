window.addEventListener('load', start);

var inputRed = document.querySelector('#rangeVermelho'),
  inputGreen = document.querySelector('#rangeVerde'),
  inputBlue = document.querySelector('#rangeAzul'),
  inputAlpha = document.querySelector('#rangeAlpha');

function changeColor() {

  var txtColor = `rgba(${inputRed.value}, ${inputGreen.value}, ${inputBlue.value}, ${inputAlpha.value})`;

  var txtRed = document.querySelector('#campoVermelho'),
    txtGreen = document.querySelector('#campoVerde'),
    txtBlue = document.querySelector('#campoAzul'),
    txtAlpha = document.querySelector('#campoAlpha');

  var boxSize = document.querySelector('.box-size'),
    spanBox = document.querySelector('.spanbox');

  boxSize.style.backgroundColor = txtColor;
  spanBox.innerHTML = txtColor;

  txtRed.value = inputRed.value;
  txtGreen.value = inputGreen.value;
  txtBlue.value = inputBlue.value;
  txtAlpha.value = inputAlpha.value;

}

function start() {
  changeColor();
}

inputRed.addEventListener('input', changeColor);
inputGreen.addEventListener('input', changeColor);
inputBlue.addEventListener('input', changeColor);
inputAlpha.addEventListener('input', changeColor);