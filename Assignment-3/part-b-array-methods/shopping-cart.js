"use strict";

const cart = [
  { id: 101, name: "Laptop", price: 50000, qty: 1, category: "Electronics" },
  { id: 102, name: "Mouse", price: 800, qty: 2, category: "Accessories" },
  { id: 103, name: "Keyboard", price: 1500, qty: 1, category: "Accessories" },
  { id: 104, name: "Monitor", price: 12000, qty: 1, category: "Electronics" },
  { id: 105, name: "Headphones", price: 2500, qty: 2, category: "Accessories" },
];

const productTotals = cart.map((product) => {
  return {
    name: product.name,
    totalPrice: product.price * product.qty,
  };
});

console.log("Product Totals:", productTotals);

const expensiveProducts = cart.filter((product) => product.price > 2000);

console.log("Products Above 2000:", expensiveProducts);

const cartTotal = cart.reduce((total, product) => {
  return total + product.price * product.qty;
}, 0);

console.log("Total Cart Value:", cartTotal);

cart.forEach((product) => {
  console.log(product.name, product.category, product.qty);
});

const electronicsTotal = cart
  .filter((product) => product.category === "Electronics")
  .reduce((total, product) => total + product.price * product.qty, 0);

console.log("Electronics Total:", electronicsTotal);

const inventory = new Map();

cart.forEach((product) => {
  inventory.set(product.id, product);
});

console.log("Selected Product:", inventory.get(101));

inventory.get(101).qty = 5;

inventory.delete(105);

console.log("Inventory:");

for (const [id, product] of inventory) {
  console.log(id, product);
}

const emails = [
  "rahul@gmail.com",
  "priya@gmail.com",
  "rahul@gmail.com",
  "arjun@gmail.com",
  "priya@gmail.com",
];

const uniqueEmails = new Set(emails);

console.log("Unique Emails:", uniqueEmails);

const productConfig = {
  name: "Laptop",
  price: 50000,
  stock: 20,
};

const frozenProduct = Object.freeze({ ...productConfig });

try {
  frozenProduct.price = 45000;
} catch (error) {
  console.log("Freeze price error:", error.message);
}

try {
  frozenProduct.category = "Electronics";
} catch (error) {
  console.log("Freeze add error:", error.message);
}

try {
  delete frozenProduct.stock;
} catch (error) {
  console.log("Freeze delete error:", error.message);
}

console.log("Frozen Product:", frozenProduct);

const sealedProduct = Object.seal({ ...productConfig });

try {
  sealedProduct.price = 45000;
  console.log("Sealed price updated:", sealedProduct.price);
} catch (error) {
  console.log("Seal price error:", error.message);
}

try {
  sealedProduct.category = "Electronics";
} catch (error) {
  console.log("Seal add error:", error.message);
}

try {
  delete sealedProduct.stock;
} catch (error) {
  console.log("Seal delete error:", error.message);
}

console.log("Sealed Product:", sealedProduct);
