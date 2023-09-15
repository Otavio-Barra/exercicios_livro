let value = document.querySelector("#value");
let time = document.querySelector("#time");
let button = document.querySelector("#calc-value");
let div = document.querySelector("#result");

button.addEventListener("click", () => {
  let calcTime = time.value / 15;
  let calcValue = Math.ceil(calcTime) * value.value;

  let h2 = document.createElement("h2");
  h2.textContent = `Valor a pagar R$ ${calcValue.toFixed(2)}`;
  div.append(h2);
});
