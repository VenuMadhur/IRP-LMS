"use strict";

{
  function Product(productName, price, category) {
    this.productName = productName;
    this.price = price;
    this.category = category;
  }

  Product.prototype.displayProduct = function () {
    return `Product: ${this.productName}, Price: ₹${this.price}, Category: ${this.category}`;
  };

  const product1 = new Product("Laptop", 50000, "Electronics");
  const product2 = new Product("Mobile", 25000, "Electronics");
  const product3 = new Product("T-Shirt", 800, "Clothing");

  console.log(product1.displayProduct());
  console.log(product2.displayProduct());
  console.log(product3.displayProduct());
}

class Product {
  constructor(productName, price, category) {
    this.productName = productName;
    this.price = price;
    this.category = category;
  }

  getProductDetails() {
    return `Product: ${this.productName}, Price: ₹${this.price}, Category: ${this.category}`;
  }
}

class ElectronicProduct extends Product {
  constructor(productName, price, category, warranty) {
    super(productName, price, category);
    this.warranty = warranty;
  }

  getWarranty() {
    return `Warranty: ${this.warranty}`;
  }
}

class ClothingProduct extends Product {
  constructor(productName, price, category, size) {
    super(productName, price, category);
    this.size = size;
  }

  getSize() {
    return `Size: ${this.size}`;
  }
}

const laptop = new ElectronicProduct("Laptop", 50000, "Electronics", "2 Years");
const tshirt = new ClothingProduct("T-Shirt", 800, "Clothing", "L");

console.log(laptop.getProductDetails());
console.log(laptop.getWarranty());

console.log(tshirt.getProductDetails());
console.log(tshirt.getSize());

const calculateDiscount = (price, discount) => {
  return price - (price * discount) / 100;
};

const finalPrice = calculateDiscount(50000, 10);

console.log("Final Price:", finalPrice);

const customerName = "Rahul";
const productName = "Laptop";
const total = 50000;

console.log(
  `Hello ${customerName}, your order of ${productName} is confirmed. Total: ₹${total}`,
);

const customer = {
  name: "Rahul",
  email: "rahul@gmail.com",
  city: "Mumbai",
};

const { name, email } = customer;

console.log("Customer Name:", name);
console.log("Customer Email:", email);

function calculateTotal(...prices) {
  return prices.reduce((total, price) => total + price, 0);
}

console.log("Total:", calculateTotal(50000, 800, 1500));

const originalProduct = {
  name: "Laptop",
  price: 50000,
  category: "Electronics",
};

const updatedProduct = {
  ...originalProduct,
  price: 45000,
};

console.log("Original Product:", originalProduct);
console.log("Updated Product:", updatedProduct);
