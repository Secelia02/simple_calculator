let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-el");

function add() {
  let sum = num1 + num2;
   sumEl.innerText = `Sum:${sum}`;
}
function subtract() {
  let difference = num1 - num2;
   sumEl.textContent = `Difference:${difference}`
}
function divide() {
  let quotient = num1 / num2;
  sumEl.textContent = `Quotient:${quotient}`
}
function multiply() {
  let product = num1 * num2;
  sumEl.textContent = `Product:${product}`
}