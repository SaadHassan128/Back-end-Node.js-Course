// app.js - Main Application
// Node.js Session 1 - Complete Calculator System
// Created by: Saad Hassan Saad
// Instructor: Full Stack Web Development
// Position: Head of Software Department
// Academy of Digital Arts Egypt

const math = require("./math");
const logger = require("./logger");
const timer = require("./timer");
const systemInfo = require("./systemInfo");

console.log("=".repeat(60));
console.log("NODE.JS SESSION 1 - CALCULATOR SYSTEM");
console.log("Academy of Digital Arts Egypt");
console.log("Instructor: Saad Hassan Saad");
console.log("Position: Head of Software Department");
console.log("Age: 28 years old");
console.log("Education: Computer Science Graduate");
console.log("Favorite Color: Black");
console.log("=".repeat(60));

// Display System Information
systemInfo.displaySystemInfo();

// Demonstrate Synchronous Operations
console.log("\n========== SYNCHRONOUS OPERATIONS ==========");

logger.info("Starting synchronous calculations...");

try {
  const addResult = math.add(15, 7);
  logger.success(`Addition: 15 + 7 = ${addResult}`);

  const subtractResult = math.subtract(20, 8);
  logger.success(`Subtraction: 20 - 8 = ${subtractResult}`);

  const multiplyResult = math.multiply(6, 9);
  logger.success(`Multiplication: 6 * 9 = ${multiplyResult}`);

  const divideResult = math.divide(100, 4);
  logger.success(`Division: 100 / 4 = ${divideResult}`);

  const powerResult = math.power(2, 8);
  logger.success(`Power: 2^8 = ${powerResult}`);

  const sqrtResult = math.squareRoot(144);
  logger.success(`Square Root: √144 = ${sqrtResult}`);
} catch (error) {
  logger.error(`Calculation error: ${error.message}`);
}

console.log("\n========== ERROR HANDLING DEMO ==========");

try {
  math.divide(10, 0);
} catch (error) {
  logger.error(`Caught error: ${error.message}`);
}

try {
  math.squareRoot(-25);
} catch (error) {
  logger.error(`Caught error: ${error.message}`);
}

// Demonstrate Asynchronous Operations with Callbacks
console.log("\n========== ASYNCHRONOUS OPERATIONS ==========");

logger.info("Starting asynchronous calculations...");

// Example 1: Async Addition
timer.asyncAdd(25, 15, (error, result) => {
  if (error) {
    logger.error(`Async Addition Error: ${error.message}`);
  } else {
    logger.success(`Async Addition: 25 + 15 = ${result}`);
  }
});

// Example 2: Async Multiplication
timer.asyncMultiply(7, 8, (error, result) => {
  if (error) {
    logger.error(`Async Multiplication Error: ${error.message}`);
  } else {
    logger.success(`Async Multiplication: 7 * 8 = ${result}`);
  }
});

// Example 3: Async Division
timer.asyncDivide(144, 12, (error, result) => {
  if (error) {
    logger.error(`Async Division Error: ${error.message}`);
  } else {
    logger.success(`Async Division: 144 / 12 = ${result}`);
  }
});

// Example 4: Error Handling in Async Operation
timer.asyncDivide(50, 0, (error, result) => {
  if (error) {
    logger.error(`Async Division Error: ${error.message}`);
  } else {
    logger.success(`Async Division Result: ${result}`);
  }
});

// Example 5: Delay Function
logger.info("Waiting for 2 seconds...");
timer.delay(2000, (error, message) => {
  if (error) {
    logger.error(`Delay Error: ${error.message}`);
  } else {
    logger.success(message);
  }
});

// Example 6: Process Calculation Function
timer.processCalculation("add", 100, 50, (error, result) => {
  if (error) {
    logger.error(`Process Calculation Error: ${error.message}`);
  } else {
    logger.success(`Process Calculation (add): 100 + 50 = ${result}`);
  }
});

// Path Module Demonstrations
console.log("\n========== PATH MODULE OPERATIONS ==========");

const samplePath = "/home/saad/projects/nodejs/app.js";
logger.info(`Sample Path: ${samplePath}`);
logger.info(`File Name: ${systemInfo.getFileName(samplePath)}`);
logger.info(`File Extension: ${systemInfo.getFileExtension(samplePath)}`);

const joinedPath = systemInfo.joinPaths(
  "projects",
  "nodejs",
  "modules",
  "math.js"
);
logger.info(`Joined Path: ${joinedPath}`);

const absolutePath = systemInfo.getAbsolutePath("./app.js");
logger.info(`Absolute Path: ${absolutePath}`);

// Callback Chaining Example
console.log("\n========== CALLBACK CHAINING ==========");

logger.info("Starting chained async operations...");

timer.asyncAdd(10, 5, (error, firstResult) => {
  if (error) {
    logger.error(`First operation failed: ${error.message}`);
    return;
  }
  logger.success(`First Result: 10 + 5 = ${firstResult}`);

  timer.asyncMultiply(firstResult, 2, (error, secondResult) => {
    if (error) {
      logger.error(`Second operation failed: ${error.message}`);
      return;
    }
    logger.success(`Second Result: ${firstResult} * 2 = ${secondResult}`);

    timer.asyncDivide(secondResult, 3, (error, finalResult) => {
      if (error) {
        logger.error(`Final operation failed: ${error.message}`);
        return;
      }
      logger.success(`Final Result: ${secondResult} / 3 = ${finalResult}`);
      logger.info("Callback chain completed successfully!");
    });
  });
});

// Final Summary
setTimeout(() => {
  console.log("\n" + "=".repeat(60));
  console.log("TASK COMPLETED SUCCESSFULLY");
  console.log("All Node.js fundamentals demonstrated:");
  console.log("1. CommonJS Modules (require/module.exports)");
  console.log("2. Synchronous Operations");
  console.log("3. Asynchronous Operations with Callbacks");
  console.log("4. Error-First Callback Pattern");
  console.log("5. Built-in Modules (os, path)");
  console.log("6. System Information Retrieval");
  console.log("\nInstructor: Saad Hassan Saad");
  console.log("Academy of Digital Arts Egypt");
  console.log("=".repeat(60));
}, 3000);
