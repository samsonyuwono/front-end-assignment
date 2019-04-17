$(".carousel").carousel({
  interval: false
});

const productImageContainer = document.querySelector(
  ".product-images-container"
);
const productImages = document.querySelectorAll(".product-image");
productImages.forEach(image => image.addEventListener("click", toggleZoom));

let zoomedIn = false;

function toggleZoom(event) {
  const productImageNumber = event.target.dataset.image;
  const currentZoomClass = document.querySelector(
    ".zoom-img-" + productImageNumber
  );
  if (zoomedIn === false) {
    zoomedIn = true;
    productImageContainer.classList.remove("product-image-container");
    productImageContainer.classList.add("product-zoom-images");
  } else {
    zoomedIn = false;
    productImageContainer.classList.add("product-image-container");
    productImageContainer.classList.remove("product-zoom-images");
  }
  currentZoomClass.scrollIntoView();
}

const carouselContainer = document.querySelector(".carousel-inner");
const carouselIndicators = document.querySelector(".carousel-indicators");
const carouselImages = document.querySelectorAll(".carousel-img");
carouselImages.forEach(image =>
  image.addEventListener("click", toggleCarouselZoom)
);

function toggleCarouselZoom(event) {
  const carouselImageNumber = event.target.dataset.image;
  const carouselZoomClass = document.querySelector(
    ".carousel-zoom-" + carouselImageNumber
  );
  if (zoomedIn === false) {
    zoomedIn = true;
    carouselIndicators.style.position = "absolute";
    carouselContainer.classList.remove("carousel-inner");
    carouselContainer.classList.add("product-zoom-images");
  } else {
    //zoomOut needs to be fixed
    zoomedIn = false;
    carouselIndicators.style.position = "sticky";
    carouselContainer.classList.add("carousel-inner");
    carouselContainer.classList.remove("product-zoom-images");
  }
  carouselZoomClass.scrollIntoView();
}

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

const sizeContainer = document.querySelector(".size-container");
const sizeDropdown = document.querySelector(".size-dropdown");
const sizeOption = document.querySelectorAll(".size-option");
sizeDropdown.addEventListener("click", toggleDropdown);
sizeOption.forEach(size => size.addEventListener("click", handleOptionSelect));

let isOpen = false;

function toggleDropdown() {
  if (isOpen === false) {
    isOpen = true;
    sizeContainer.style.overflow = "initial";
  } else {
    isOpen = false;
    sizeContainer.style.overflow = "hidden";
  }
}

function handleOptionSelect(event) {
  while (sizeDropdown.firstChild) {
    sizeDropdown.removeChild(sizeDropdown.firstChild);
  }
  sizeDropdown.innerHTML = document.getElementById(event.target.id).innerHTML;
  toggleDropdown();
}
