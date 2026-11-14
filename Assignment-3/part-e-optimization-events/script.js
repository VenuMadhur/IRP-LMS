"use strict";

function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");

const searchProducts = debounce(function (event) {
  const searchValue = event.target.value;

  searchResult.textContent = searchValue
    ? `Searching for: ${searchValue}`
    : "Enter a product name to search.";
}, 500);

searchInput.addEventListener("input", searchProducts);

function throttle(callback, delay) {
  let lastTime = 0;

  return function (...args) {
    const currentTime = Date.now();

    if (currentTime - lastTime >= delay) {
      callback(...args);
      lastTime = currentTime;
    }
  };
}

const scrollResult = document.getElementById("scrollResult");

const handleScroll = throttle(function () {
  console.log("Scroll event triggered");
  scrollResult.textContent = "Scroll event triggered!";
}, 1000);

window.addEventListener("scroll", handleScroll);

function calculateDiscount(price, percentage) {
  return price - (price * percentage) / 100;
}

function memoize(callback) {
  const cache = new Map();

  return function (price, percentage) {
    const key = `${price}-${percentage}`;

    if (cache.has(key)) {
      console.log("Result from cache:", cache.get(key));
      return cache.get(key);
    }

    const result = callback(price, percentage);

    cache.set(key, result);

    console.log("Fresh calculation:", result);

    return result;
  };
}

const memoizedDiscount = memoize(calculateDiscount);

const calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", function () {
  memoizedDiscount(50000, 10);
});

const bubbleContainer = document.getElementById("bubbleContainer");
const bubbleButton = document.getElementById("bubbleButton");
const stopButton = document.getElementById("stopButton");

bubbleContainer.addEventListener("click", function () {
  console.log("Parent container clicked");
});

bubbleButton.addEventListener("click", function () {
  console.log("Button clicked");
});

stopButton.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Propagation stopped at button");
});

const productList = document.getElementById("productList");

productList.addEventListener("click", function (event) {
  if (event.target.classList.contains("removeButton")) {
    const product = event.target.closest(".product");

    if (product) {
      product.remove();
      console.log("Product removed");
    }
  }
});
