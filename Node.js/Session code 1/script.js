/**
 * Node.js Session 1: Architecture, CommonJS Modules & Async JavaScript
 * Academy of Digital Arts Egypt - Back-End Development Course
 *
 * Instructor: Saad Hassan Saad
 * Position: Full Stack Web Development Instructor & Head of Software Department
 *
 * Session Agenda:
 * 1. Node.js Runtime & Event Loop
 * 2. Node.js Setup & Verification
 * 3. CommonJS Modules - require() and module.exports
 * 4. Built-in Modules - path, os, fs
 * 5. Async JavaScript - Callbacks and Execution Models
 */

console.log("=".repeat(70));
console.log("Node.js Session 1: Architecture, Modules & Async JavaScript");
console.log("Instructor: Saad Hassan Saad - ADA Egypt");
console.log("=".repeat(70));

// ========== PART 1: NODE.JS EVENT LOOP DEMONSTRATION ==========
console.log("\n1. NODE.JS EVENT LOOP & NON-BLOCKING I/O");
console.log("-".repeat(50));

console.log("Start of execution");

// Event loop demonstration
setTimeout(() => {
  console.log("Timeout callback executed");
}, 0);

console.log("End of synchronous execution");

// Output: Start -> End -> Timeout
// Demonstrates non-blocking, asynchronous nature

// ========== PART 2: PROCESS OBJECT & NODE.JS ENVIRONMENT ==========
console.log("\n2. NODE.JS ENVIRONMENT INFORMATION");
console.log("-".repeat(50));

console.log("Node.js Version:", process.version);
console.log("Platform:", process.platform);
console.log("Current Directory:", process.cwd());
console.log("Environment:", process.env.NODE_ENV || "development");

// Instructor information using process
const instructorInfo = {
  name: "Saad Hassan Saad",
  age: 28,
  position: "Head of Software Department",
  organization: "Academy of Digital Arts Egypt",
  role: "Full Stack Web Development Instructor",
  education: "Computer Science Graduate",
  nodeVersion: process.version,
};

console.log("\nInstructor Profile:");
console.log(`Name: ${instructorInfo.name}`);
console.log(`Position: ${instructorInfo.position}`);
console.log(`Teaching: ${instructorInfo.role}`);

// ========== PART 3: COMMONJS MODULES DEMONSTRATION ==========
console.log("\n3. COMMONJS MODULES SYSTEM");
console.log("-".repeat(50));

// Module Example 1: Math utilities
const mathModule = {
  add: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  },

  multiply: function (a, b) {
    return a * b;
  },
};

console.log("Math Module Operations:");
console.log("5 + 3 =", mathModule.add(5, 3));
console.log("10 - 4 =", mathModule.subtract(10, 4));
console.log("6 x 7 =", mathModule.multiply(6, 7));

// Module Example 2: Logger utility
const logger = {
  info: function (message) {
    const timestamp = new Date().toISOString();
    console.log(`[INFO ${timestamp}] ${message}`);
  },

  error: function (message) {
    const timestamp = new Date().toISOString();
    console.log(`[ERROR ${timestamp}] ${message}`);
  },

  instructor: function () {
    this.info(`Session led by Saad Hassan Saad`);
  },
};

logger.info("CommonJS modules demonstration started");
logger.instructor();

// Module Example 3: Course manager
class CourseManager {
  constructor(instructorName, academy) {
    this.instructorName = instructorName;
    this.academy = academy;
    this.courses = [];
  }

  addCourse(courseName) {
    this.courses.push({
      name: courseName,
      instructor: this.instructorName,
      addedAt: new Date(),
    });
    logger.info(`Course added: ${courseName}`);
  }

  getCourses() {
    return this.courses;
  }

  getSummary() {
    return {
      academy: this.academy,
      instructor: this.instructorName,
      totalCourses: this.courses.length,
      courses: this.courses.map((c) => c.name),
    };
  }
}

const courseSystem = new CourseManager(
  "Saad Hassan Saad",
  "Academy of Digital Arts Egypt"
);

courseSystem.addCourse("Node.js Fundamentals");
courseSystem.addCourse("Express.js Backend");
courseSystem.addCourse("MongoDB Database");

console.log("\nCourse System Summary:");
console.log(courseSystem.getSummary());

// ========== PART 4: BUILT-IN MODULES ==========
console.log("\n4. BUILT-IN MODULES OVERVIEW");
console.log("-".repeat(50));

// Path module demonstration
const path = require("path");

console.log("Path Module:");
console.log("Current file:", __filename);
console.log("Current directory:", __dirname);
console.log("File extension:", path.extname(__filename));
console.log("Directory name:", path.basename(__dirname));

const coursePath = path.join(__dirname, "courses", "nodejs", "session1.js");
console.log("Joined path:", coursePath);

// OS module demonstration
const os = require("os");

console.log("\nOS Module:");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log(
  "Total Memory:",
  Math.round(os.totalmem() / 1024 / 1024 / 1024),
  "GB"
);
console.log(
  "Free Memory:",
  Math.round(os.freemem() / 1024 / 1024 / 1024),
  "GB"
);
console.log("Home Directory:", os.homedir());

// System information for course
const systemInfo = {
  instructor: "Saad Hassan Saad",
  platform: os.platform(),
  architecture: os.arch(),
  nodeVersion: process.version,
  cpuCores: os.cpus().length,
};

console.log("\nCourse System Environment:");
console.log(systemInfo);

// ========== PART 5: ASYNCHRONOUS JAVASCRIPT ==========
console.log("\n5. ASYNCHRONOUS JAVASCRIPT PATTERNS");
console.log("-".repeat(50));

// Callback pattern demonstration
function simulateAsyncOperation(data, callback) {
  console.log(`Processing: ${data}`);

  setTimeout(() => {
    const result = data.toUpperCase();
    callback(null, result);
  }, 1000);
}

console.log("Starting async operation...");
simulateAsyncOperation("hello from node.js", (error, result) => {
  if (error) {
    logger.error(error.message);
  } else {
    logger.info(`Async result: ${result}`);
  }
});

// Error-first callback pattern
function fetchCourseData(courseId, callback) {
  logger.info(`Fetching course ${courseId}...`);

  setTimeout(() => {
    if (courseId > 0) {
      callback(null, {
        id: courseId,
        name: "Node.js Backend Development",
        instructor: "Saad Hassan Saad",
        department: "Software Department",
        academy: "Academy of Digital Arts Egypt",
      });
    } else {
      callback(new Error("Invalid course ID"), null);
    }
  }, 800);
}

// Success case
fetchCourseData(1, (error, course) => {
  if (error) {
    logger.error(error.message);
  } else {
    console.log("\nCourse Information:");
    console.log(`Name: ${course.name}`);
    console.log(`Instructor: ${course.instructor}`);
    console.log(`Department: ${course.department}`);
  }
});

// Error case
fetchCourseData(-1, (error, course) => {
  if (error) {
    logger.error(`Course fetch failed: ${error.message}`);
  } else {
    console.log("Course:", course);
  }
});

// ========== PART 6: PRACTICAL APPLICATION ==========
console.log("\n6. PRACTICAL MODULE SYSTEM");
console.log("-".repeat(50));

// Student management module
const studentModule = {
  students: [],

  addStudent: function (name, course) {
    const student = {
      id: this.students.length + 1,
      name: name,
      course: course,
      instructor: "Saad Hassan Saad",
      enrolledAt: new Date(),
    };

    this.students.push(student);
    logger.info(`Student enrolled: ${name} in ${course}`);
    return student;
  },

  getStudents: function () {
    return this.students;
  },

  getStudentCount: function () {
    return this.students.length;
  },
};

// Add students
studentModule.addStudent("Ahmed Hassan", "Node.js Development");
studentModule.addStudent("Sara Mohamed", "Full Stack Course");
studentModule.addStudent("Omar Ali", "Backend Development");

console.log("\nStudent Management:");
console.log(`Total Students: ${studentModule.getStudentCount()}`);

// Timer utility with callbacks
const timerUtil = {
  delay: function (ms, callback) {
    setTimeout(() => {
      callback(null, `Operation completed after ${ms}ms`);
    }, ms);
  },

  executeSequence: function (tasks, callback) {
    let results = [];
    let index = 0;

    const executeNext = () => {
      if (index >= tasks.length) {
        callback(null, results);
        return;
      }

      const task = tasks[index];
      task((error, result) => {
        if (error) {
          callback(error, null);
          return;
        }

        results.push(result);
        index++;
        executeNext();
      });
    };

    executeNext();
  },
};

// Using timer utility
timerUtil.delay(500, (error, message) => {
  if (error) {
    logger.error(error.message);
  } else {
    logger.info(message);
  }
});

// ========== PART 7: ASYNC EXECUTION COMPARISON ==========
console.log("\n7. SYNCHRONOUS VS ASYNCHRONOUS EXECUTION");
console.log("-".repeat(50));

// Synchronous execution
console.log("Synchronous operations:");
console.log("Step 1 - Initialize");
console.log("Step 2 - Process");
console.log("Step 3 - Complete");

// Asynchronous execution
console.log("\nAsynchronous operations:");
console.log("Step 1 - Start");

setTimeout(() => {
  console.log("Step 2 - Async task 1 complete");
}, 300);

setTimeout(() => {
  console.log("Step 3 - Async task 2 complete");
}, 100);

console.log("Step 4 - Continue execution");

// ========== PART 8: MODULE ORGANIZATION EXAMPLE ==========
console.log("\n8. MODULE ORGANIZATION BEST PRACTICES");
console.log("-".repeat(50));

// Configuration module
const config = {
  academy: "Academy of Digital Arts Egypt",
  instructor: {
    name: "Saad Hassan Saad",
    age: 28,
    position: "Head of Software Department",
    education: "Computer Science Graduate",
  },
  course: {
    name: "Node.js Backend Development",
    level: "Intermediate",
    duration: "8 weeks",
  },
  settings: {
    environment: "development",
    favoriteColor: "black",
    logLevel: "info",
  },
};

console.log("Course Configuration:");
console.log(`Academy: ${config.academy}`);
console.log(`Instructor: ${config.instructor.name}`);
console.log(`Course: ${config.course.name}`);
console.log(`Level: ${config.course.level}`);

// Utility functions module
const utilities = {
  formatDate: function (date) {
    return date.toISOString().split("T")[0];
  },

  generateId: function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  },

  getCurrentInstructor: function () {
    return config.instructor.name;
  },
};

console.log("\nUtility Functions:");
console.log("Current Date:", utilities.formatDate(new Date()));
console.log("Generated ID:", utilities.generateId());
console.log("Current Instructor:", utilities.getCurrentInstructor());

// ========== SESSION SUMMARY ==========
console.log("\n" + "=".repeat(70));
console.log("SESSION COMPLETED SUCCESSFULLY");
console.log("Instructor: Saad Hassan Saad");
console.log("Position: Head of Software Department - ADA Egypt");
console.log("\nTopics Covered:");
console.log("- Node.js runtime and event loop architecture");
console.log("- Non-blocking I/O and asynchronous execution");
console.log("- CommonJS modules with require() and module.exports");
console.log("- Built-in modules: path, os, process");
console.log("- Callback patterns and error-first callbacks");
console.log("- Synchronous vs asynchronous execution comparison");
console.log("- Module organization and best practices");
console.log("\nAcademy of Digital Arts Egypt - Back-End Development Course");
console.log("=".repeat(70));
