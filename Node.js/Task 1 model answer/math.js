// math.js - Calculator Module
// Created by: Saad Hassan Saad
// Academy of Digital Arts Egypt

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(number) {
  if (number < 0) {
    throw new Error("Cannot calculate square root of negative number");
  }
  return Math.sqrt(number);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  squareRoot,
};
