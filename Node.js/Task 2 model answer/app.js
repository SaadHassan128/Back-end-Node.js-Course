// app.js - Main Application
// Node.js Session 2 - Task Management System
// Created by: Saad Hassan Saad
// Instructor: Full Stack Web Development
// Position: Head of Software Department
// Academy of Digital Arts Egypt

import Task from "./task.js";
import * as taskService from "./taskService.js";
import { log, info, success, error } from "./logger.js";

console.log("=".repeat(70));
console.log("NODE.JS SESSION 2 - TASK MANAGEMENT SYSTEM");
console.log("Academy of Digital Arts Egypt");
console.log("=".repeat(70));

const instructorInfo = {
  name: "Saad Hassan Saad",
  age: 28,
  position: "Full Stack Web Development Instructor",
  role: "Head of Software Department",
  education: "Computer Science Graduate",
  favoriteColor: "black",
};

const { name, age, position, role, education, favoriteColor } = instructorInfo;

console.log("\nInstructor Information:");
console.log(`Name: ${name}`);
console.log(`Age: ${age} years old`);
console.log(`Position: ${position}`);
console.log(`Role: ${role}`);
console.log(`Education: ${education}`);
console.log(`Favorite Color: ${favoriteColor}`);
console.log("=".repeat(70));

// DEMONSTRATION 1: ES6+ Features
console.log("\n========== ES6+ FEATURES DEMONSTRATION ==========");

const taskData = {
  title: "Learn Node.js",
  description: "Master ES6+ and async patterns",
  priority: "high",
};

info(`Creating task with template literal: ${taskData.title}`);

const enhancedTaskData = {
  ...taskData,
  createdBy: name,
  department: "Software",
  color: favoriteColor,
};

console.log("Enhanced Task Data (using spread operator):");
console.log(enhancedTaskData);

const priorities = ["low", "medium", "high"];
const [lowPriority, mediumPriority, highPriority] = priorities;
info(`Priority levels: ${lowPriority}, ${mediumPriority}, ${highPriority}`);

// DEMONSTRATION 2: Promises with .then() and .catch()
console.log("\n========== PROMISES DEMONSTRATION ==========");

info("Creating tasks using Promises...");

taskService
  .createTask(
    "Complete Node.js Session 2",
    "Finish all exercises and examples",
    "high"
  )
  .then((task) => {
    success(`Task created: ${task.title}`);
    return task;
  })
  .then((task) => {
    info(`Task ID: ${task.id}`);
    return taskService.getAllTasks();
  })
  .then((allTasks) => {
    info(`Total tasks: ${allTasks.length}`);
  })
  .catch((err) => {
    error(`Promise chain error: ${err.message}`);
  });

taskService
  .createTask("Study ES Modules", "Learn import/export syntax", "medium")
  .then((task) => success(`Created: ${task.getTaskInfo()}`))
  .catch((err) => error(err.message));

taskService
  .createTask("Practice Async/Await", "Write clean async code", "high")
  .then((task) => success(`Created: ${task.getTaskInfo()}`))
  .catch((err) => error(err.message));

// Error handling demonstration
taskService
  .createTask("", "Invalid task", "low")
  .then((task) => success(`Created: ${task.title}`))
  .catch((err) => error(`Validation Error: ${err.message}`));

// DEMONSTRATION 3: Promise Chaining
console.log("\n========== PROMISE CHAINING ==========");

let createdTaskId;

taskService
  .createTask("Build REST API", "Create Express.js API with MongoDB", "high")
  .then((task) => {
    success(`Step 1: Task created - ${task.title}`);
    createdTaskId = task.id;
    return taskService.updateTask(task.id, { priority: "medium" });
  })
  .then((updatedTask) => {
    success(`Step 2: Priority updated to ${updatedTask.priority}`);
    return taskService.completeTask(updatedTask.id);
  })
  .then((completedTask) => {
    success(`Step 3: Task marked as completed`);
    info(`Final status: ${completedTask.getTaskInfo()}`);
  })
  .catch((err) => {
    error(`Chain failed: ${err.message}`);
  });

// DEMONSTRATION 4: Async/Await Pattern
console.log("\n========== ASYNC/AWAIT DEMONSTRATION ==========");

async function demonstrateAsyncAwait() {
  try {
    info("Starting async operations...");

    const task1 = await taskService.createTask(
      "Learn Async/Await",
      "Master modern async patterns",
      "high"
    );
    success(`Async created: ${task1.title}`);

    const task2 = await taskService.createTask(
      "Build Task Manager",
      "Create complete task management system",
      "medium"
    );
    success(`Async created: ${task2.title}`);

    const allTasks = await taskService.getAllTasks();
    info(`Total tasks in system: ${allTasks.length}`);

    const highPriorityTasks = await taskService.getTasksByPriority("high");
    info(`High priority tasks: ${highPriorityTasks.length}`);
  } catch (err) {
    error(`Async/Await error: ${err.message}`);
  }
}

// DEMONSTRATION 5: Sequential vs Parallel Operations
console.log("\n========== SEQUENTIAL VS PARALLEL OPERATIONS ==========");

async function sequentialOperations() {
  info("Starting SEQUENTIAL operations...");
  const startTime = Date.now();

  try {
    const task1 = await taskService.createTask(
      "Sequential Task 1",
      "First task",
      "low"
    );
    const task2 = await taskService.createTask(
      "Sequential Task 2",
      "Second task",
      "low"
    );
    const task3 = await taskService.createTask(
      "Sequential Task 3",
      "Third task",
      "low"
    );

    const duration = Date.now() - startTime;
    success(`Sequential operations completed in ${duration}ms`);
  } catch (err) {
    error(`Sequential error: ${err.message}`);
  }
}

async function parallelOperations() {
  info("Starting PARALLEL operations...");
  const startTime = Date.now();

  try {
    const [task1, task2, task3] = await Promise.all([
      taskService.createTask("Parallel Task 1", "First task", "low"),
      taskService.createTask("Parallel Task 2", "Second task", "low"),
      taskService.createTask("Parallel Task 3", "Third task", "low"),
    ]);

    const duration = Date.now() - startTime;
    success(`Parallel operations completed in ${duration}ms`);
    info("Notice: Parallel operations are much faster!");
  } catch (err) {
    error(`Parallel error: ${err.message}`);
  }
}

// DEMONSTRATION 6: Complex Async Workflow
async function complexWorkflow() {
  console.log("\n========== COMPLEX ASYNC WORKFLOW ==========");

  try {
    info("Starting complex workflow...");

    const task = await taskService.createTask(
      "Deploy Application",
      "Deploy to production server",
      "high"
    );
    success(`Created: ${task.title}`);

    await new Promise((resolve) => setTimeout(resolve, 500));
    info("Simulating deployment process...");

    const updated = await taskService.updateTask(task.id, {
      description: "Deploy to production server - In Progress",
    });
    info(`Updated: ${updated.description}`);

    await new Promise((resolve) => setTimeout(resolve, 500));
    info("Deployment in progress...");

    const completed = await taskService.completeTask(task.id);
    success(`Completed: ${completed.title}`);

    const taskDetails = completed.getTaskDetails();
    console.log("\nFinal Task Details:");
    console.log(taskDetails);
  } catch (err) {
    error(`Workflow error: ${err.message}`);
  }
}

// DEMONSTRATION 7: Error Handling with Try/Catch
async function demonstrateErrorHandling() {
  console.log("\n========== ERROR HANDLING DEMONSTRATION ==========");

  try {
    await taskService.createTask("", "Empty title task", "low");
  } catch (err) {
    error(`Caught validation error: ${err.message}`);
  }

  try {
    await taskService.createTask("Invalid Priority Task", "Test", "urgent");
  } catch (err) {
    error(`Caught priority error: ${err.message}`);
  }

  try {
    await taskService.getTaskById(999999);
  } catch (err) {
    error(`Caught not found error: ${err.message}`);
  }

  success("All errors handled gracefully");
}

// DEMONSTRATION 8: Task Statistics
async function displayTaskStatistics() {
  console.log("\n========== TASK STATISTICS ==========");

  try {
    const stats = await taskService.getTaskCount();

    console.log(`Total Tasks: ${stats.total}`);
    console.log(`Completed: ${stats.completed}`);
    console.log(`Pending: ${stats.pending}`);
    console.log(`High Priority: ${stats.high}`);
    console.log(`Medium Priority: ${stats.medium}`);
    console.log(`Low Priority: ${stats.low}`);

    const pendingTasks = await taskService.getPendingTasks();
    console.log("\nPending Tasks:");
    pendingTasks.forEach((task) => {
      console.log(`- ${task.getTaskInfo()}`);
    });

    const completedTasks = await taskService.getCompletedTasks();
    console.log("\nCompleted Tasks:");
    completedTasks.forEach((task) => {
      console.log(`- ${task.getTaskInfo()}`);
    });
  } catch (err) {
    error(`Statistics error: ${err.message}`);
  }
}

// EXECUTE ALL DEMONSTRATIONS
setTimeout(async () => {
  await demonstrateAsyncAwait();
  await sequentialOperations();
  await parallelOperations();
  await complexWorkflow();
  await demonstrateErrorHandling();
  await displayTaskStatistics();

  console.log("\n" + "=".repeat(70));
  console.log("TASK COMPLETED SUCCESSFULLY");
  console.log("\nAll Modern Node.js Patterns Demonstrated:");
  console.log("1. ES Modules (import/export)");
  console.log("2. Default and Named Exports");
  console.log("3. Template Literals");
  console.log("4. Destructuring");
  console.log("5. Spread Operator");
  console.log("6. Arrow Functions");
  console.log("7. Promises with .then() and .catch()");
  console.log("8. Promise Chaining");
  console.log("9. Async/Await");
  console.log("10. Try/Catch Error Handling");
  console.log("11. Promise.all() for Parallel Operations");
  console.log("12. Sequential vs Parallel Execution");
  console.log("\nInstructor: Saad Hassan Saad");
  console.log("Position: Head of Software Department");
  console.log("Academy of Digital Arts Egypt");
  console.log("=".repeat(70));
}, 3000);
