const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

let firstNum = "";
let secondNum = "";
let operator = "";

function operate(operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);

  if (operator === '+') {
    return add(num1, num2);
  } else if (operator === '-') {
    return subtract(num1, num2);
  } else if (operator === '*') {
    return multiply(num1, num2);
  } else if (operator === '/') {
    return divide(num1, num2);
  }
}

const display = document.querySelector(".display");
const btns = document.querySelectorAll(".num, .num0");

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const clickNum = e.target.textContent;

    if (operator === "") {
      firstNum += clickNum;
      display.textContent = firstNum;
    } else {
      secondNum += clickNum;
      display.textContent = secondNum;
    }
  })
})

const operators = document.querySelectorAll(".operator")
operators.forEach(oprBtn => {
  oprBtn.addEventListener('click', (e) => {
    const clickOpr = e.target.textContent;

    operator = clickOpr;
  })
})

const equal = document.querySelector(".equal");
equal.addEventListener('click', (e) => {
  const result = operate(operator, firstNum, secondNum);
  display.textContent = result;

  firstNum = "";
  secondNum = "";
  operator = "";
})

const allClear = document.querySelector(".all-clear");
allClear.addEventListener('click', () => {
  display.textContent = "0"

  firstNum = "";
  secondNum = "";
  operator = "";
})