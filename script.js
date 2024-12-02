// script.js

let currentInput = "";
let previousInput = "";
let operator = null;

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = null;
    updateDisplay("0");
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || "0");
}

function appendNumber(number) {
    if (number === "." && currentInput.includes(".")) return;
    currentInput += number;
    updateDisplay(currentInput);
}

function appendOperator(op) {
    if (currentInput === "" && op === "-") {
        // Allow negative numbers
        currentInput = "-";
        updateDisplay(currentInput);
        return;
    }
    if (currentInput === "") return;
    if (previousInput !== "") calculate();
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    if (previousInput === "" || currentInput === "") return;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 === 0 ? "Error" : num1 / num2;
            break;
        default:
            return;
    }
    updateDisplay(result);
    previousInput = result.toString();
    currentInput = "";
    operator = null;
}

function updateDisplay(value) {
    const display = document.getElementById("display");
    display.textContent = value;
}