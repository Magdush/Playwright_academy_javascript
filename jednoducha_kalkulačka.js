function add(a, b) {
  const result = a + b;
  console.log(`${a} + ${b} = ${result}`);
}

function subtract(a, b) {
  const result = a - b;
  console.log(`${a} - ${b} = ${result}`);
}

const multiply = (a, b) => {
  const result = a * b;
  console.log(`${a} * ${b} = ${result}`);
};

const divide = (a, b) => {
  const result = a / b;
  console.log(`${a} / ${b} = ${result}`);
};

add(565, 584);
subtract(474, 520);
multiply(5822, 65);
divide(632, 6);

/*C:\Program Files\nodejs\node.exe --experimental-network-inspection .\jednoducha_kalkulačka.js
565 + 584 = 1149
474 - 520 = -46
5822 * 65 = 378430
632 / 6 = 105.33333333333333
*/
