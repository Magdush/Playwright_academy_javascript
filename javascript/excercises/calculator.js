/*Cvičení - kalkulačka, funkce (⌛10:00)
Vytvoř jednoduchou kalkulačku pomocí funkcí. Zvol function nebo constant function. Složka: javascript/exercises, název souboru: calculator.js
Vytvoř 4 funkce: add, subtract, multiply, divide, které budou mít 2 parametry (2 čísla, například: a, b)
Funkce také zapíší výsledek do konzole.
Vytvoř volání:
add: 15+48
subtract: 98-41
multiply: 54*30
divide: 88/6

*/
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

add(15, 48);
subtract(98, 41);
multiply(54, 30);
divide(88, 6);
