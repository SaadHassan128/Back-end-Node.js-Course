// taskService.js - Task Service Module
// Created by: Saad Hassan Saad
// Position: Full Stack Web Development Instructor & Head of Software Department
// Academy of Digital Arts Egypt

import Task from "./task.js";

const tasks = [];

export function createTask(title, description, priority) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!title || title.trim() === "") {
        reject(new Error("Task title is required"));
        return;
      }

      if (!description || description.trim() === "") {
        reject(new Error("Task description is required"));
        return;
      }

      const validPriorities = ["low", "medium", "high"];
      if (priority && !validPriorities.includes(priority)) {
        reject(new Error("Invalid priority. Must be: low, medium, or high"));
        return;
      }

      const task = new Task(title, description, priority);
      tasks.push(task);
      resolve(task);
    }, 500);
  });
}

export function getAllTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...tasks]);
    }, 300);
  });
}

export function getTaskById(taskId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const task = tasks.find((t) => t.id === taskId);
      if (task) {
        resolve(task);
      } else {
        reject(new Error(`Task with ID ${taskId} not found`));
      }
    }, 300);
  });
}

export function updateTask(taskId, updates) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const task = tasks.find((t) => t.id === taskId);
      if (!task) {
        reject(new Error(`Task with ID ${taskId} not found`));
        return;
      }

      task.updateTask(updates);
      resolve(task);
    }, 400);
  });
}

export function deleteTask(taskId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = tasks.findIndex((t) => t.id === taskId);
      if (index === -1) {
        reject(new Error(`Task with ID ${taskId} not found`));
        return;
      }

      const deletedTask = tasks.splice(index, 1)[0];
      resolve(deletedTask);
    }, 400);
  });
}

export function completeTask(taskId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const task = tasks.find((t) => t.id === taskId);
      if (!task) {
        reject(new Error(`Task with ID ${taskId} not found`));
        return;
      }

      task.complete();
      resolve(task);
    }, 300);
  });
}

export function getTasksByPriority(priority) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const validPriorities = ["low", "medium", "high"];
      if (!validPriorities.includes(priority)) {
        reject(new Error("Invalid priority"));
        return;
      }

      const filteredTasks = tasks.filter((t) => t.priority === priority);
      resolve(filteredTasks);
    }, 300);
  });
}

export function getCompletedTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const completedTasks = tasks.filter((t) => t.completed);
      resolve(completedTasks);
    }, 300);
  });
}

export function getPendingTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pendingTasks = tasks.filter((t) => !t.completed);
      resolve(pendingTasks);
    }, 300);
  });
}

export function getTaskCount() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        total: tasks.length,
        completed: tasks.filter((t) => t.completed).length,
        pending: tasks.filter((t) => !t.completed).length,
        high: tasks.filter((t) => t.priority === "high").length,
        medium: tasks.filter((t) => t.priority === "medium").length,
        low: tasks.filter((t) => t.priority === "low").length,
      });
    }, 200);
  });
}
