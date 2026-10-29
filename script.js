let display = document.getElementById("display");
let firstNumber = null;
let operator = "";
let newNumber = true;

function addNumber(number) {
    if (newNumber) {
        display.value = number === "." ? "0." : number;
        newNumber = false;
    } else {
        if (number === "." && display.value.includes(".")) {
            return;
        }
        display.value += number;
    }
}

function chooseOperator(op) {
    firstNumber = Number(display.value);
    operator = op;
    newNumber = true;
}

function calculate() {
    if (firstNumber === null || operator === "") return;

    let secondNumber = Number(display.value);
    let result;

    if (operator === "+") {
        result = firstNumber + secondNumber;
    } else if (operator === "-") {
        result = firstNumber - secondNumber;
    } else if (operator === "*") {
        result = firstNumber * secondNumber;
    } else if (operator === "/") {
        result = secondNumber === 0
            ? "Cannot divide by zero"
            : firstNumber / secondNumber;
    } else if (operator === "%") {
        result = firstNumber % secondNumber;
    }

    display.value = String(result);
    firstNumber = null;
    operator = "";
    newNumber = true;
}

function clearDisplay() {
    display.value = "0";
    firstNumber = null;
    operator = "";
    newNumber = true;
}

function deleteNumber() {
    if (newNumber) return;

    display.value = display.value.slice(0, -1) || "0";

    if (display.value === "0") {
        newNumber = true;
    }
}