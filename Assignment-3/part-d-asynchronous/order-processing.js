"use strict";

console.log("Order Started");

setTimeout(() => {
  console.log("Payment Processing");
}, 0);

Promise.resolve().then(() => {
  console.log("Payment Successful");
});

console.log("Order Completed");

function validateOrder(callback) {
  setTimeout(() => {
    console.log("Order Validated");
    callback();
  }, 1000);
}

function processPayment(callback) {
  setTimeout(() => {
    console.log("Payment Completed");
    callback();
  }, 1000);
}

function sendConfirmation(callback) {
  setTimeout(() => {
    console.log("Confirmation Sent");
    callback();
  }, 1000);
}

validateOrder(() => {
  processPayment(() => {
    sendConfirmation(() => {
      console.log("Callback Order Completed");
    });
  });
});

// Promises

function validateOrderPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order Validated");
      resolve();
    }, 1000);
  });
}

function processPaymentPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Payment Completed");
      resolve();
    }, 1000);
  });
}

function sendConfirmationPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Confirmation Sent");
      resolve();
    }, 1000);
  });
}

validateOrderPromise()
  .then(() => processPaymentPromise())
  .then(() => sendConfirmationPromise())
  .then(() => console.log("Promise Order Completed"))
  .catch((error) => console.log("Promise Error:", error));

async function placeOrder() {
  try {
    await validateOrderPromise();
    await processPaymentPromise();
    await sendConfirmationPromise();

    console.log("Order Confirmed Successfully!");
  } catch (error) {
    console.log("Order Failed:", error);
  }
}

placeOrder();

function productsAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Products Loaded");
    }, 1000);
  });
}

function paymentAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Payment Service Failed");
    }, 1500);
  });
}

function deliveryAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delivery Loaded");
    }, 2000);
  });
}

Promise.all([productsAPI(), paymentAPI(), deliveryAPI()])
  .then((result) => console.log("Promise.all:", result))
  .catch((error) => console.log("Promise.all Error:", error));

Promise.allSettled([productsAPI(), paymentAPI(), deliveryAPI()]).then(
  (result) => console.log("Promise.allSettled:", result),
);

Promise.race([productsAPI(), paymentAPI(), deliveryAPI()])
  .then((result) => console.log("Promise.race:", result))
  .catch((error) => console.log("Promise.race Error:", error));

Promise.any([productsAPI(), paymentAPI(), deliveryAPI()])
  .then((result) => console.log("Promise.any:", result))
  .catch((error) => console.log("Promise.any Error:", error));
