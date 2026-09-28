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
  if (b === 0) {
    return "ERROR"
  } else {
    return a / b;
  }
};

let firstNum = "";
let secondNum = "";
let operator = "";

function operate(operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  let res;
  if (operator === '+') {
    res = add(num1, num2);
  } else if (operator === '-') {
    res = subtract(num1, num2);
  } else if (operator === '*') {
    res = multiply(num1, num2);
  } else if (operator === '/') {
    res = divide(num1, num2);
  }

  if (res === "ERROR") {
    return res;
  }

  return Math.round(res * 10000) / 10000;
};

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
  });
});

const operators = document.querySelectorAll(".operator")
operators.forEach(oprBtn => {
  oprBtn.addEventListener('click', (e) => {
    const clickOpr = e.target.textContent;

    if (operator !== "" && firstNum !== "" && secondNum !== "") {
      const interOprResult = operate(operator, firstNum, secondNum);
      display.textContent = interOprResult;

      firstNum = interOprResult.toString();
      secondNum = "";
    }

    operator = clickOpr;
  });
});

const equal = document.querySelector(".equal");
equal.addEventListener('click', (e) => {
  if (operator === "" || firstNum === "" || secondNum === "") {
    return;
  }
  const result = operate(operator, firstNum, secondNum);
  display.textContent = result;

  firstNum = "";
  secondNum = "";
  operator = "";
});

const allClear = document.querySelector(".all-clear");
allClear.addEventListener('click', () => {
  display.textContent = "0"

  firstNum = "";
  secondNum = "";
  operator = "";
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener('click', () => {
  if (operator === "") {
    if (firstNum.includes(".")) return;

    firstNum += "."
    display.textContent = firstNum;
  } else {
    if (secondNum.includes(".")) return;

    secondNum += ".";
    display.textContent = secondNum;
  }
});

const backspace = document.querySelector(".backspace");
backspace.addEventListener('click', () => {
  if (operator === "") {
    firstNum = firstNum.slice(0, -1);

    if (firstNum === "") {
      display.textContent = "0";
    } else {
      display.textContent = firstNum;
    }
  } else {
    secondNum = secondNum.slice(0, -1);

    if (secondNum === "") {
      display.textContent = "0";
    } else {
      display.textContent = secondNum;
    }
  }
})