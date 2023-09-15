let product = document.querySelector("#product");
let price = document.querySelector("#price");
let button = document.querySelector(".showPromotion");
let div = document.querySelector(".showInfos");

button.addEventListener("click", () => {
  let promotion = Math.floor(price.value) / 2;
  let calcProduct = price.value * 3 - promotion;

  let h2 = document.createElement("h2");
  let h2Promotion = document.createElement("h2");
  h2.textContent = `${
    product.value
  } - Promocao: leve 3 por RS ${calcProduct.toFixed(2)} `;
  h2Promotion.textContent = `O terceiro produto custa a penas R$ ${promotion.toFixed(
    2
  )}`;
  div.append(h2, h2Promotion);
});
