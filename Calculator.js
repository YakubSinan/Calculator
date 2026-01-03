const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value+=input;
    display.value.slice
   
} 
function clearDisplay(){
    display.value= "";
}
function calculate(){
   let expression = display.value;

  let numbers = expression.split(/[\+\-\*\/]/).map(Number);
  let operators = expression.match(/[\+\-\*\/]/);
 if (!operators) {
    alert("invalid input");
    return;
  
  }

  let result = numbers[0];

  for (let i = 0; i < operators.length; i++) {
    let next = numbers[i + 1];

    if (operators[i] === "+") result += next;
    if (operators[i] === "-") result -= next;
    if (operators[i] === "*") result *= next;
    if (operators[i] === "/") result /= next;
  }

  display.value = result;
  }

function deleteLast() {
     display.value = display.value.slice(0, -1);
    }
