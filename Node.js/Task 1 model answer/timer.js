// timer.js - Async Timer Module
// Created by: Saad Hassan Saad
// Academy of Digital Arts Egypt

function delay(milliseconds, callback) {
  if (typeof callback !== "function") {
    throw new Error("Callback must be a function");
  }

  setTimeout(() => {
    callback(null, `Delayed for ${milliseconds}ms`);
  }, milliseconds);
}

function asyncAdd(a, b, callback) {
  setTimeout(() => {
    if (typeof a !== "number" || typeof b !== "number") {
      callback(new Error("Both arguments must be numbers"), null);
      return;
    }
    const result = a + b;
    callback(null, result);
  }, 1000);
}

function asyncMultiply(a, b, callback) {
  setTimeout(() => {
    if (typeof a !== "number" || typeof b !== "number") {
      callback(new Error("Both arguments must be numbers"), null);
      return;
    }
    const result = a * b;
    callback(null, result);
  }, 1500);
}

function asyncDivide(a, b, callback) {
  setTimeout(() => {
    if (typeof a !== "number" || typeof b !== "number") {
      callback(new Error("Both arguments must be numbers"), null);
      return;
    }
    if (b === 0) {
      callback(new Error("Cannot divide by zero"), null);
      return;
    }
    const result = a / b;
    callback(null, result);
  }, 800);
}

function processCalculation(operation, a, b, callback) {
  const operations = {
    add: asyncAdd,
    multiply: asyncMultiply,
    divide: asyncDivide,
  };

  if (!operations[operation]) {
    callback(new Error("Invalid operation"), null);
    return;
  }

  operations[operation](a, b, callback);
}

module.exports = {
  delay,
  asyncAdd,
  asyncMultiply,
  asyncDivide,
  processCalculation,
};
