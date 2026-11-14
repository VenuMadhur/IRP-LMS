"use strict";

class Product {
  constructor(id, name, price, qty) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.qty = qty;
  }
}

const products = [
  new Product(1, "Laptop", 50000, 1),
  new Product(2, "Mouse", 1000, 2),
  new Product(3, "Monitor", 15000, 1),
  new Product(4, "Keyboard", 2000, 1),
];

const customer = {
  name: "Rahul",
  email: "rahul@gmail.com",
};

const { name, email } = customer;

console.log("Customer Name:", name);
console.log("Customer Email:", email);

const productTotals = products.map((product) => {
  const { name, price, qty } = product;

  return {
    name: name,
    total: price * qty,
  };
});

console.log("\nProduct Totals:");
productTotals.forEach((product) => {
  console.log(`${product.name}: ₹${product.total}`);
});

const expensiveProducts = productTotals.filter(
  (product) => product.total > 5000,
);

console.log("\nProducts Above ₹5,000:", expensiveProducts);

const orderTotal = products.reduce(
  (total, product) => total + product.price * product.qty,
  0,
);

console.log("\nTotal Order Value: ₹" + orderTotal);

const productIds = products.map((product) => product.id);
const uniqueProductIds = new Set(productIds);

console.log("Unique Products:", uniqueProductIds.size);

const inventory = new Map();

products.forEach((product) => {
  inventory.set(product.id, product);
});

console.log("\nInventory:");

for (const [id, product] of inventory) {
  console.log(id, product.name, product.qty);
}

const orderConfig = Object.freeze({
  orderId: 501,
  customer: name,
  status: "Processing",
});

console.log("\nOrder Configuration:", orderConfig);

const order = {
  orderId: orderConfig.orderId,
  customer: name,
  email: email,
  products: productTotals,
  total: orderTotal,
  status: orderConfig.status,
};

const jsonOrder = JSON.stringify(order);

console.log("\nOrder JSON:");
console.log(jsonOrder);

function waitForConfirmation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Confirmed Successfully!");
    }, 2000);
  });
}

async function confirmOrder() {
  try {
    console.log("\nOrder Status: Processing...");

    const result = await waitForConfirmation();

    console.log("Order Status:", result);

    console.log(
      `Hello ${name}, your order #${orderConfig.orderId} is confirmed. Total: ₹${orderTotal}.`,
    );
  } catch (error) {
    console.log("Order Failed:", error);
  }
}

confirmOrder();
