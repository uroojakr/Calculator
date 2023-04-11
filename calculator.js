let displayValue = "";

function handleInput(input) {
  const display = document.getElementById("display");
  const lastChar = displayValue[displayValue.length - 1];

  if (input === "Clear") {
    displayValue = "";
    display.value = "";
  } else if (input === "Del") {
    displayValue = displayValue.slice(0, -1);
    display.value = displayValue;
  } else if (/[+\-*/]/.test(input) && displayValue.length === 0) {
    // do nothing
  } else if (/[+\-*/]/.test(input) && /[+\-*/]/.test(lastChar)) {
    displayValue = displayValue.slice(0, -1) + input;
    display.value = displayValue;
  } else if (/[+\-*/]/.test(input) && /[+\-*/]/.test(lastChar) === false) {
    displayValue += input;
    display.value = displayValue;
  } else if (input === "=") {
    display.value = eval(displayValue);
    displayValue = "";
  } else {
    displayValue += input;
    display.value = displayValue;
  }
}
