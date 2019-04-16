$(".carousel").carousel({
  interval: false
});

let currentQuantity = 1;

const updateQuantity = () => {
  document.querySelector(".number").innerText =
    "quantity" + " ( " + currentQuantity + " ) ";
};
const subtractButton = document.querySelector(".subtract");
const plusButton = document.querySelector(".plus");
subtractButton.addEventListener("click", reduce);
plusButton.addEventListener("click", increase);

function decrease() {
  if (currentQuantity > 1) {
    currentQuantity -= 1;
  }
  updateQuantity();
}

function increase() {
  currentQuantity += 1;
  updateQuantity();
}
