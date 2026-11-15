# Advanced JavaScript Practical Assignment

## Overview

This project is based on QuickCart, an online shopping platform. It demonstrates JavaScript concepts used in object-oriented programming, shopping cart management, JSON handling, asynchronous programming, performance optimization, and DOM events.

The assignment is divided into six parts, covering modern JavaScript (ES6+) concepts through practical coding tasks.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Node.js
- Visual Studio Code

## Project Structure

```text
Assignment-3/
│
├── part-a-objects-classes/
│   └── products.js
│
├── part-b-array-methods/
│   └── shopping-cart.js
│
├── part-c-json-debugging/
│   └── json-handling.js
│
├── part-d-asynchronous/
│   └── order-processing.js
│
├── part-e-optimization-events/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── part-f-integration/
│   └── quickcart.js
│
└── README.md
```

## Assignment Parts

### Part A – Objects, Prototypes & ES6 Classes

- Created products using constructor functions.
- Used prototypes to add reusable methods.
- Implemented ES6 classes and inheritance.
- Practiced `extends`, `super()`, arrow functions, template literals, destructuring, rest and spread operators.

### Part B – Higher-Order Functions, Map, Set & Object Methods

- Used `map()`, `filter()`, `reduce()` and `forEach()`.
- Calculated shopping cart and category totals.
- Used Map for inventory management.
- Used Set to remove duplicate email addresses.
- Practiced `Object.freeze()` and `Object.seal()`.

### Part C – JSON Handling & Debugging

- Practiced `JSON.stringify()` and `JSON.parse()`.
- Observed how undefined values and functions are handled.
- Tested invalid JSON, circular references, NaN, Infinity and Date objects.

### Part D – Asynchronous JavaScript

- Practiced the JavaScript event loop.
- Implemented callbacks and callback sequences.
- Converted callbacks into Promises.
- Used `.then()`, `.catch()`, `async` and `await`.
- Practiced `Promise.all()`, `Promise.allSettled()`, `Promise.race()` and `Promise.any()`.

### Part E – Performance Optimization & DOM Events

- Implemented debouncing for product search.
- Implemented throttling for scroll events.
- Practiced memoization using closures and Map.
- Demonstrated event bubbling and `stopPropagation()`.
- Used event delegation to remove products from the page.

### Part F – Final Integration Challenge

Combined the concepts learned in the previous parts to create a QuickCart order summary.

- Created a Product class.
- Used destructuring and array methods.
- Calculated product totals and order value.
- Used Set and Map for data management.
- Applied Object.freeze().
- Converted order details into JSON.
- Implemented asynchronous order confirmation.

## How to Run

### Requirements

Make sure Node.js is installed on your system.

### Run JavaScript Files

Open the project folder in Visual Studio Code and open the terminal.

Run each file using the following commands:

**Part A**

```bash
node Assignment-3/part-a-objects-classes/products.js
```

**Part B**

```bash
node Assignment-3/part-b-array-methods/shopping-cart.js
```

**Part C**

```bash
node Assignment-3/part-c-json-debugging/json-handling.js
```

**Part D**

```bash
node Assignment-3/part-d-asynchronous/order-processing.js
```

**Part F**

```bash
node Assignment-3/part-f-integration/quickcart.js
```

### Run Part E – DOM Features

Open the `index.html` file inside the `part-e-optimization-events` folder in a web browser.

Test the search input, scroll event, discount calculation, event bubbling and product removal features.

## Screenshots

Screenshots of the Part E browser interface and its working DOM features can be added here.

Example:

```text
screenshots/
├── quickcart-home.png
├── debounce-search.png
├── event-bubbling.png
└── product-removal.png
```

Add screenshots to the repository and link them here when available.

## Learning Outcomes

Through this assignment, I practiced modern JavaScript concepts and learned how to apply them to a real-world e-commerce scenario.

I gained practical experience with object-oriented programming, array methods, data structures, JSON, asynchronous programming, performance optimization and DOM manipulation.

## Submission

- **GitHub Repository:** Add your public repository URL here.
- **Loom Link:** N.A.

---

**Project:** Advanced JavaScript Practical Assignment  
**Scenario:** QuickCart – E-commerce Order Management System  
**Language:** JavaScript (ES6+)

## Live Demo

**Deployed Website:** [View QuickCart Demo](https://irp-lms-assignment-3.netlify.app/)

## GitHub Repository

**Source Code:** [View GitHub Repository](https://github.com/VenuMadhur/IRP-LMS/tree/main/Assignment-3)

**Note:** The deployed website demonstrates Part E – Performance Optimization and DOM Events. The remaining JavaScript tasks are included in the repository and can be executed using Node.js.
