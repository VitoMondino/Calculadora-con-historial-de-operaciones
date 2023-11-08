let result = document.getElementById('result');
let historyList = document.getElementById('history-list');
let history = [];

function addToResult(value) {
  if (value === '.') {
    if (result.value.endsWith('.')) {
      console.log("Error: No se pueden agregar más de un punto consecutivo.");
      return;
    }

    let lastNumber = result.value.split(/[+\-*/]/).pop();
    if (lastNumber.includes('.')) {
      console.log("Error: No se pueden agregar más de un punto en un número.");
      return;
    }
  } else if (result.value.length > 0 && (value === '+' || value === '-' || value === '*' || value === '/')) {
    let lastChar = result.value[result.value.length - 1];
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
      console.log("Error: No se pueden agregar signos consecutivos de suma, resta, multiplicación o división.");
      return;
    }
  }

  result.value += value;
}
function clearResult() {
  result.value = '';
}
function calculate() {
  //extrayendo el valor de "result.value" y asignándolo a la variable "expression" para que pueda ser utilizada posteriormente en el código
  let expression = result.value;
  if (expression.includes('/0')) {
    result.value = 'No es posible dividir por 0';
    return;
  }
  //Evaluar la expresión y obtener la respuesta
  let answer = eval(expression);
  //el contenido de la variable "answer" se está almacenando dentro de la variable "result.value"
  result.value = answer;
  history.push(expression + ' = ' + answer);
  // Actualizar la visualización del historial
  
  updateHistory();
}
function clearHistory() {
  history = [];
  updateHistory();
}
function deleteLast() {
  let currentValue = result.value;
  result.value = currentValue.substring(0, currentValue.length - 1);
}
function updateHistory() {
  historyList.innerHTML = '';
  for (let i = 0; i < history.length; i++) {
    let item = document.createElement('li');
    item.textContent = history[i];
    historyList.appendChild(item);
  }
}


