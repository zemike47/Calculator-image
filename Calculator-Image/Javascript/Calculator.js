let currentInput = "";
let operator = null;
let previousValue = null;

function Calculator(input) {
  if (typeof input === "number") {
    // If the input is a number, concatenate it to the current input
    currentInput += input;
    document.getElementById("result").innerText = currentInput;
  } else if (["+", "-", "*", "/"].includes(input)) {
    // If the input is an operator, store the current input as previous value
    operator = input;
    previousValue = parseFloat(currentInput);
    currentInput = "";
    document.getElementById("result").innerText = operator;
  } else if (input === "=") {
    // Perform the calculation
    if (operator && previousValue !== null) {
      const currentValue = parseFloat(currentInput);
      let result;
      switch (operator) {
        case "+":
          result = previousValue + currentValue;
          break;
        case "-":
          result = previousValue - currentValue;
          break;
        case "*":
          result = previousValue * currentValue;
          break;
        case "/":
          result = previousValue / currentValue;
          break;
      }
      // Display the result
      document.getElementById("result").innerText = result;

      // Reset values
      currentInput = "";
      operator = null;
      previousValue = null;
    }
  }
}
