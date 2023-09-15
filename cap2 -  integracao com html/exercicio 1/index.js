const inputText = document.querySelector("#medicamento");
const inputNumber = document.querySelector("#valor");
const div = document.querySelector(".infos");

let button = document.querySelector(".showInfo");
button.addEventListener("click", () => {
  let h2 = document.createElement("h2");
  h2.textContent = `Promocao de ${inputText.value}`;
  let h3 = document.createElement("h3");
  let value = Math.floor(inputNumber.value);
  h3.textContent = `leve 2 por apenas ${value.toFixed(2)}`;

  div.append(h2, h3);
});
