"use strict";

// JSON Handling and Output-Based Debugging

const order = {
  orderId: 501,
  customer: "Rahul",
  amount: 5000,
  deliveryDate: undefined,
  discount: null,
  calculateTax: function () {
    return 500;
  },
};

// Convert JavaScript object into JSON string
const jsonData = JSON.stringify(order);

console.log("JSON String:");
console.log(jsonData);

// Convert JSON string back into JavaScript object
const parsedOrder = JSON.parse(jsonData);

console.log("Parsed Object:");
console.log(parsedOrder);

console.log("Original Order:", order);
console.log("Parsed Order:", parsedOrder);

// Predicting JSON Output

console.log("\nUndefined in an object:");
console.log(JSON.stringify({ name: "Rahul", age: undefined }));

console.log("\nUndefined in an array:");
console.log(JSON.stringify([10, undefined, 30]));

console.log("\nNaN and Infinity:");
console.log(JSON.stringify({ price: NaN, discount: Infinity }));

console.log("\nInvalid JSON:");

try {
  console.log(JSON.parse("{name: 'Rahul', age: 25}"));
} catch (error) {
  console.log("Error:", error.message);
}

console.log("\nCircular Reference:");

const user = { name: "Rahul" };
user.self = user;

try {
  console.log(JSON.stringify(user));
} catch (error) {
  console.log("Error:", error.message);
}

console.log("\nDate Object:");
console.log(JSON.stringify({ createdAt: new Date("2026-01-01") }));
