$(".carousel").carousel({
  interval: false
});

const blackColorBox = document.querySelector(".black");
const beigeColorBox = document.querySelector(".beige");
const blackCheckMark = document.querySelector(".active-check");
const beigeCheckMark = document.querySelector(".hidden-check");
blackColorBox.addEventListener("click", toggleBlackSelection);
beigeColorBox.addEventListener("click", toggleBeigeSelection);

function toggleBlackSelection() {
  blackCheckMark.classList.remove("hidden-check");
  beigeCheckMark.classList.add("hidden-check");
}

function toggleBeigeSelection() {
  blackCheckMark.classList.add("hidden-check");
  beigeCheckMark.classList.remove("hidden-check");
}

let currentQuantity = 1;

const updateQuantity = () => {
  document.querySelector(".number").innerText =
    "quantity" + " ( " + currentQuantity + " ) ";
};
const subtractButton = document.querySelector(".subtract");
const plusButton = document.querySelector(".plus");
subtractButton.addEventListener("click", decrease);
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
