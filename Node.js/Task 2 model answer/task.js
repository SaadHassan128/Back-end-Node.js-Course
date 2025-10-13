// task.js - Task Class Module
// Created by: Saad Hassan Saad
// Position: Full Stack Web Development Instructor & Head of Software Department
// Academy of Digital Arts Egypt

class Task {
  constructor(title, description, priority = "medium") {
    this.id = Date.now() + Math.random();
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.completed = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.createdBy = "Saad Hassan Saad";
  }

  complete() {
    this.completed = true;
    this.updatedAt = new Date();
  }

  updateTask(updates) {
    const { title, description, priority } = updates;
    if (title) this.title = title;
    if (description) this.description = description;
    if (priority) this.priority = priority;
    this.updatedAt = new Date();
  }

  getTaskInfo() {
    return `Task: ${this.title} | Priority: ${this.priority} | Status: ${
      this.completed ? "Completed" : "Pending"
    }`;
  }

  getTaskDetails() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      priority: this.priority,
      completed: this.completed,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      createdBy: this.createdBy,
    };
  }
}

export default Task;
