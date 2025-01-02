const output = document.getElementById('display');
const keys = document.querySelectorAll('button');

let num1 = '';
let num2 = '';
let operation = null;

keys.forEach(key => {
  key.addEventListener('click', () => {
    const value = key.textContent;

    if (value === '=') {
      if (operation && num1 !== '') {
        const result = calculate(num1, operation, num2);
        output.textContent = result;
        num1 = result.toString();
        num2 = '';
        operation = null;
      }
    } else if (value === 'C') {
      num1 = '';
      num2 = '';
      operation = null;
      output.textContent = '0';
    } else if (['+', '-', '*', '/'].includes(value)) {
      operation = value;
      num1 = num2 === '' ? num1 : num2; 
      num2 = '';
    } else {
      if (!operation) {
        num1 += value;
      } else {
        num2 += value;
      }
      output.textContent = operation ? num2 : num1; 
    }
  });
});

function calculate(a, op, b) {
  a = parseFloat(a);
  b = parseFloat(b);

  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    default: return 0;
  }
}