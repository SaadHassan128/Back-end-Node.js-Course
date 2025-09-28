// ======================================================================
// JavaScript Session 2 - Conditionals, Operators & Loops - Complete Code
// Academy of Digital Arts Egypt - Back-End Development Course
// Instructor: Saad Hassan Saad
// Position: Full Stack Web Development Instructor & Head of Software Department
// ======================================================================

console.log("=== Academy of Digital Arts Egypt - JavaScript Session 2 ===");
console.log("Instructor: Saad Hassan Saad");
console.log("Position: Full Stack Web Development Instructor & Head of Software Department");
console.log("Topic: Conditional Statements, Operators & Loops");
console.log("");

// ========== INSTRUCTOR PROFILE ==========
const instructor = {
    name: "Saad Hassan Saad",
    age: 28,
    position: "Full Stack Web Development Instructor",
    department: "Head of Software Department",
    education: "Computer Science Graduate",
    favoriteColor: "black",
    institution: "Academy of Digital Arts Egypt"
};

console.log("=== INSTRUCTOR PROFILE ===");
console.log("Name:", instructor.name);
console.log("Age:", instructor.age);
console.log("Position:", instructor.position);
console.log("Department:", instructor.department);
console.log("");

// ========== PART 1: CONDITIONAL STATEMENTS ==========

console.log("=== PART 1: CONDITIONAL STATEMENTS ===");

// Basic IF statement
const instructorAge = 28;
if (instructorAge >= 25) {
    console.log("Instructor is experienced enough to teach advanced courses");
}

// IF/ELSE statement
const currentHour = 14;
if (currentHour < 12) {
    console.log("Good morning class!");
} else if (currentHour < 18) {
    console.log("Good afternoon class!");
} else {
    console.log("Good evening class!");
}

// Multiple conditions with ELSE IF
const studentScore = 85;
let grade;
if (studentScore >= 90) {
    grade = "A";
} else if (studentScore >= 80) {
    grade = "B";
} else if (studentScore >= 70) {
    grade = "C";
} else if (studentScore >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log("Student score:", studentScore, "- Grade:", grade);

// Nested conditions
const isInstructor = true;
const hasPermission = true;
const departmentHead = true;

if (isInstructor) {
    if (hasPermission && departmentHead) {
        console.log("Full access granted to course management system");
    } else if (hasPermission) {
        console.log("Limited access granted");
    } else {
        console.log("Permission denied");
    }
} else {
    console.log("Please log in as instructor");
}

// Practical example: Role-based access
const userRole = "department_head";
if (userRole === "department_head") {
    console.log("Access granted: Full administrative privileges");
} else if (userRole === "instructor") {
    console.log("Access granted: Course management privileges");
} else if (userRole === "student") {
    console.log("Access granted: Learning platform only");
} else {
    console.log("Access denied: Unknown role");
}

console.log("");

// ========== SWITCH STATEMENTS ==========

console.log("=== SWITCH STATEMENTS ===");

// Basic switch with days of week
const dayOfWeek = 3;
switch (dayOfWeek) {
    case 1:
        console.log("Monday - Start of teaching week");
        break;
    case 2:
        console.log("Tuesday - JavaScript fundamentals");
        break;
    case 3:
        console.log("Wednesday - Advanced concepts");
        break;
    case 4:
        console.log("Thursday - Project work");
        break;
    case 5:
        console.log("Friday - Review and assessment");
        break;
    default:
        console.log("Weekend - Time for course preparation");
}

// Switch with strings - Course management
const courseAction = "create";
switch (courseAction) {
    case "create":
        console.log("Creating new course: JavaScript Fundamentals");
        break;
    case "update":
        console.log("Updating existing course content");
        break;
    case "delete":
        console.log("Removing course from system");
        break;
    case "publish":
        console.log("Publishing course to students");
        break;
    default:
        console.log("Unknown course action");
}

// Switch without break (fall-through) - Seasons
const currentMonth = 12;
switch (currentMonth) {
    case 12:
    case 1:
    case 2:
        console.log("Winter semester - Intensive learning period");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring semester - Project development");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer break - Advanced workshops");
        break;
    default:
        console.log("Fall semester - New student orientation");
}

console.log("");

// ========== PART 2: COMPARISON OPERATORS ==========

console.log("=== PART 2: COMPARISON OPERATORS ===");

const num1 = 28; // Instructor age
const num2 = 25; // Minimum teaching age
const stringAge = "28";

// Basic comparisons
console.log("28 > 25:", num1 > num2); // true
console.log("28 < 25:", num1 < num2); // false
console.log("28 >= 28:", num1 >= 28); // true
console.log("28 <= 25:", num1 <= num2); // false

// Equality comparisons (strict vs loose)
console.log("28 == '28':", num1 == stringAge); // true (type conversion)
console.log("28 === '28':", num1 === stringAge); // false (strict, no conversion)
console.log("28 != '28':", num1 != stringAge); // false
console.log("28 !== '28':", num1 !== stringAge); // true (different types)

// String comparisons
const instructorName = "Saad";
const studentName = "Ahmed";
console.log("'Saad' > 'Ahmed':", instructorName > studentName); // true (alphabetical)

// Boolean comparisons
const isActive = true;
const isCompleted = false;
console.log("true === true:", isActive === true); // true
console.log("false !== true:", isCompleted !== true); // true

console.log("");

// ========== LOGICAL OPERATORS ==========

console.log("=== LOGICAL OPERATORS ===");

const age = 28;
const hasExperience = true;
const hasEducation = true;

// AND operator (&&)
console.log("Can teach advanced courses:", age >= 25 && hasExperience); // true
console.log("Fully qualified instructor:", age >= 25 && hasExperience && hasEducation); // true

// OR operator (||)
const isWeekend = false;
const isHoliday = true;
console.log("No classes today:", isWeekend || isHoliday); // true

// NOT operator (!)
const isLoggedIn = false;
console.log("Need to login:", !isLoggedIn); // true
console.log("Is logged out:", !isLoggedIn); // true

// Combining operators
const accessLevel = "admin";
const isOwner = false;
console.log("Has full access:", accessLevel === "admin" || isOwner); // true
console.log("Access restricted:", !(accessLevel === "admin" || isOwner)); // false

console.log("");

// ========== PART 3: LOOPS ==========

console.log("=== PART 3: LOOPS ===");

// ========== FOR LOOPS ==========

console.log("=== FOR LOOPS ===");

// Basic for loop - Counting students
console.log("Taking attendance:");
for (let studentNumber = 1; studentNumber <= 5; studentNumber++) {
    console.log("Student", studentNumber, "present");
}

// For loop with arrays - Course subjects
const courseSubjects = ["JavaScript", "Node.js", "Express.js", "MongoDB", "React"];
console.log("Course curriculum:");
for (let i = 0; i < courseSubjects.length; i++) {
    console.log(`Week ${i + 1}: ${courseSubjects[i]}`);
}

// For loop backwards - Countdown to exam
console.log("Days until final exam:");
for (let days = 5; days >= 1; days--) {
    console.log(days, "days remaining");
}
console.log("Exam day!");

// For loop with step - Even numbered weeks
console.log("Assessment weeks:");
for (let week = 2; week <= 10; week += 2) {
    console.log("Week", week, "- Assessment");
}

// Nested for loops - Seating arrangement
console.log("Classroom seating arrangement:");
for (let row = 1; row <= 3; row++) {
    for (let seat = 1; seat <= 4; seat++) {
        console.log(`Row ${row}, Seat ${seat}`);
    }
}

console.log("");

// ========== WHILE LOOPS ==========

console.log("=== WHILE LOOPS ===");

// Basic while loop
let attendanceCount = 1;
console.log("Marking attendance:");
while (attendanceCount <= 5) {
    console.log("Student", attendanceCount, "marked present");
    attendanceCount++; // Important: increment to avoid infinite loop
}

// While loop with condition - Student submissions
let submissionAttempts = 0;
let assignmentSubmitted = false;
while (!assignmentSubmitted && submissionAttempts < 3) {
    submissionAttempts++;
    console.log(`Submission attempt ${submissionAttempts}`);
    // Simulate successful submission on 2nd attempt
    if (submissionAttempts === 2) {
        assignmentSubmitted = true;
        console.log("Assignment successfully submitted!");
    }
}

// Do-while loop - Course feedback collection
let feedbackNumber = 1;
console.log("Collecting course feedback:");
do {
    console.log("Feedback from student", feedbackNumber);
    feedbackNumber++;
} while (feedbackNumber <= 3);

// Do-while with false condition - Still executes once
let courseComplete = true;
console.log("Final course check:");
do {
    console.log("Checking course completion status");
    courseComplete = false;
} while (courseComplete); // Condition is false, but executes once

console.log("");

// ========== FOR...OF AND FOR...IN LOOPS ==========

console.log("=== FOR...OF AND FOR...IN LOOPS ===");

// For...of with arrays - Student names
const studentNames = ["Ahmed", "Fatima", "Omar", "Layla"];
console.log("Class roster:");
for (const name of studentNames) {
    console.log("Student:", name);
}

// For...of with strings - Instructor name breakdown
const instructorFullName = "Saad";
console.log("Instructor name letters:");
for (const letter of instructorFullName) {
    console.log("Letter:", letter);
}

// For...in with objects - Instructor details
console.log("Instructor information:");
for (const property in instructor) {
    console.log(`${property}: ${instructor[property]}`);
}

// For...in with arrays (not recommended - shows indices)
const gradeValues = [85, 92, 78, 96];
console.log("Grade indices:");
for (const index in gradeValues) {
    console.log(`Index ${index}: Grade ${gradeValues[index]}`);
}

console.log("");

// ========== PRACTICAL EXAMPLE: DATA PROCESSING ==========

console.log("=== PRACTICAL EXAMPLE: COURSE MANAGEMENT SYSTEM ===");

const courseData = [
    { name: "JavaScript Fundamentals", duration: 40, enrolled: 25, active: true },
    { name: "Node.js Backend", duration: 35, enrolled: 20, active: true },
    { name: "React Frontend", duration: 30, enrolled: 18, active: false },
    { name: "MongoDB Database", duration: 25, enrolled: 15, active: true }
];

console.log("Active courses taught by", instructor.name + ":");
for (const course of courseData) {
    if (course.active) {
        console.log(`${course.name} - Duration: ${course.duration}h, Students: ${course.enrolled}`);
    }
}

// Calculate total teaching hours and students
let totalHours = 0;
let totalStudents = 0;
for (const course of courseData) {
    if (course.active) {
        totalHours += course.duration;
        totalStudents += course.enrolled;
    }
}
console.log("Total teaching hours:", totalHours);
console.log("Total students taught:", totalStudents);

console.log("");

// ========== COMPREHENSIVE EXAMPLE: STUDENT GRADE MANAGEMENT ==========

console.log("=== STUDENT GRADE MANAGEMENT SYSTEM ===");
console.log("Managed by:", instructor.name);
console.log("Department:", instructor.department);

// Student data with scores
const students = [
    { name: "Sarah Ahmed", scores: [85, 92, 78, 96], active: true },
    { name: "Ahmed Hassan", scores: [74, 88, 82, 90], active: true },
    { name: "Layla Omar", scores: [95, 87, 91, 89], active: false },
    { name: "Omar Saad", scores: [68, 75, 72, 80], active: true }
];

// Process each student
for (const student of students) {
    // Skip inactive students
    if (!student.active) {
        console.log(`${student.name} is inactive - skipping evaluation`);
        continue;
    }

    // Calculate average score
    let totalScore = 0;
    for (const score of student.scores) {
        totalScore += score;
    }
    const average = totalScore / student.scores.length;

    // Determine grade using conditionals
    let letterGrade;
    if (average >= 90) {
        letterGrade = "A";
    } else if (average >= 80) {
        letterGrade = "B";
    } else if (average >= 70) {
        letterGrade = "C";
    } else if (average >= 60) {
        letterGrade = "D";
    } else {
        letterGrade = "F";
    }

    // Display results
    console.log(`${student.name}: Average = ${average.toFixed(2)}, Grade = ${letterGrade}`);

    // Check if student needs support
    if (average < 75) {
        console.log(`  Warning: ${student.name} may need additional support`);
    } else if (average >= 90) {
        console.log(`  Excellent: ${student.name} is performing exceptionally well`);
    }
}

console.log("");

// ========== ADVANCED EXAMPLE: COURSE SCHEDULING SYSTEM ==========

console.log("=== COURSE SCHEDULING SYSTEM ===");
console.log("Schedule managed by:", instructor.name);

// Weekly schedule
const weeklySchedule = {
    monday: ["JavaScript Basics", "Node.js Introduction"],
    tuesday: ["Database Design", "Express.js Framework"],
    wednesday: ["React Components", "State Management"],
    thursday: ["Project Work", "Code Review"],
    friday: ["Assessment", "Q&A Session"]
};

console.log("Weekly teaching schedule:");
for (const day in weeklySchedule) {
    console.log(`${day.charAt(0).toUpperCase() + day.slice(1)}:`);
    for (let i = 0; i < weeklySchedule[day].length; i++) {
        const timeSlot = i === 0 ? "Morning" : "Afternoon";
        console.log(`  ${timeSlot}: ${weeklySchedule[day][i]}`);
    }
}

// Calculate total classes per week
let totalClasses = 0;
for (const day in weeklySchedule) {
    totalClasses += weeklySchedule[day].length;
}
console.log("Total classes per week:", totalClasses);

console.log("");

// ========== INSTRUCTOR PRODUCTIVITY METRICS ==========

console.log("=== INSTRUCTOR PRODUCTIVITY METRICS ===");

const monthlyMetrics = {
    coursesCreated: 3,
    studentsGraduated: 45,
    hoursTeaching: 120,
    projectsCompleted: 8,
    departmentMeetings: 6
};

console.log("Monthly performance for", instructor.name + ":");
for (const metric in monthlyMetrics) {
    const formattedMetric = metric.replace(/([A-Z])/g, ' $1').toLowerCase();
    console.log(`${formattedMetric}: ${monthlyMetrics[metric]}`);
}

// Performance evaluation using conditionals
const teachingHours = monthlyMetrics.hoursTeaching;
let performanceRating;

switch (true) {
    case (teachingHours >= 100):
        performanceRating = "Excellent";
        break;
    case (teachingHours >= 80):
        performanceRating = "Good";
        break;
    case (teachingHours >= 60):
        performanceRating = "Satisfactory";
        break;
    default:
        performanceRating = "Needs Improvement";
}

console.log("Teaching performance rating:", performanceRating);

// Department goals tracking
const departmentGoals = {
    targetStudents: 50,
    actualStudents: monthlyMetrics.studentsGraduated,
    targetCourses: 4,
    actualCourses: monthlyMetrics.coursesCreated
};

console.log("Department goals progress:");
if (departmentGoals.actualStudents >= departmentGoals.targetStudents) {
    console.log("Student target: ACHIEVED");
} else {
    const remaining = departmentGoals.targetStudents - departmentGoals.actualStudents;
    console.log(`Student target: ${remaining} students remaining`);
}

if (departmentGoals.actualCourses >= departmentGoals.targetCourses) {
    console.log("Course creation target: ACHIEVED");
} else {
    const remaining = departmentGoals.targetCourses - departmentGoals.actualCourses;
    console.log(`Course creation target: ${remaining} courses remaining`);
}

console.log("");

// ========== FINAL SUMMARY ==========

console.log("=== SESSION SUMMARY ===");
console.log("JavaScript Conditionals, Operators & Loops Session Completed");
console.log("");
console.log("Topics Covered:");
console.log("1. Conditional Statements (if/else, switch)");
console.log("2. Comparison Operators (===, !==, >, <, >=, <=)");
console.log("3. Logical Operators (&&, ||, !)");
console.log("4. Loop Types (for, while, do-while, for...of, for...in)");
console.log("5. Practical Applications and Real-world Examples");
console.log("");
console.log("Instructor: " + instructor.name);
console.log("Position: " + instructor.position);
console.log("Department: " + instructor.department);
console.log("Institution: Academy of Digital Arts Egypt");
console.log("");
console.log("Key Learning Outcomes:");
console.log("- Decision making with conditional statements");
console.log("- Data comparison using appropriate operators");
console.log("- Efficient code repetition with loops");
console.log("- Real-world problem solving techniques");
console.log("");
console.log("Next Session: Functions and Advanced JavaScript Concepts");
console.log("Remember: Practice makes perfect in programming!");