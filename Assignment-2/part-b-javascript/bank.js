"use strict";

// Types and Type Coercion

function parseAmount(input) {
  if (input === null || input === undefined) {
    throw new Error("Amount is required");
  }

  if (typeof input !== "string" && typeof input !== "number") {
    throw new Error("Invalid input type");
  }

  if (typeof input === "string") {
    input = input.trim();

    if (input === "") {
      throw new Error("Amount cannot be empty");
    }
  }

  let amount = Number(input);

  if (Number.isNaN(amount)) {
    throw new Error("Please enter a valid number");
  }

  if (amount <= 0) {
    throw new Error("Amount must be greater than zero");
  }

  return amount;
}

let inputs = ["500", " 250 ", "", "abc", null, undefined, "12.5.3"];

for (let input of inputs) {
  try {
    let result = parseAmount(input);
    console.log("Valid amount:", result);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

console.log("5" + 2);
console.log("5" - 2);

console.log(typeof null);

// Variable Scoping and Hoisting

const BANK_NAME = "JS National Bank";
let transactionCounter = 0;

transactionCounter++;

console.log(BANK_NAME);
console.log("Transactions:", transactionCounter);

console.log(accountType);
var accountType = "Savings";

try {
  console.log(customerName);
} catch (error) {
  console.log("Let error:", error.message);
}

let customerName = "Venu";

announce();

function announce() {
  console.log("Welcome to JS National Bank");
}

try {
  notify();
} catch (error) {
  console.log("Function expression error:", error.message);
}

var notify = function () {
  console.log("Bank notification");
};

// Asynchronous JavaScript

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("var loop:", i);
  }, 1000);
}

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("let loop:", i);
  }, 1000);
}
