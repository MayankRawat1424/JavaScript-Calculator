// alert("This works");

const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBefore, calcNumber) {
  const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operation, currentResult, enteredNumber) {
  const obj = {
    logEntry: operation,
    output: currentResult,
    operand: enteredNumber,
  };
  logEntries.push(obj);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initResult = currentResult;
  currentResult += enteredNumber;
  writeToLog("ADD", currentResult, enteredNumber);
  createAndWriteLog("+", initResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initResult = currentResult;
  currentResult -= enteredNumber;
  writeToLog("SUBTRACT", currentResult, enteredNumber);
  createAndWriteLog("-", initResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initResult = currentResult;
  currentResult *= enteredNumber;
  writeToLog("MULTIPLY", currentResult, enteredNumber);
  createAndWriteLog("*", initResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initResult = currentResult;
  currentResult /= enteredNumber;
  writeToLog("DIVIDE", currentResult, enteredNumber);
  createAndWriteLog("/", initResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
