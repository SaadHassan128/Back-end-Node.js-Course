console.log("=== Academy of Digital Arts Egypt - JavaScript Fundamentals ===");
console.log("Instructor: Saad Hassan Saad");
console.log("Position: Full Stack Web Development Instructor & Head of Software Department");
console.log("");

// ========== PART 1: BASIC SYNTAX AND CONSOLE OUTPUT ==========

// Single-line comment - explains what the code does
// Comments are essential for code documentation

/*
Multi-line comment
Useful for longer explanations
or temporarily disabling code blocks
*/

// Basic console output methods
console.log("Hello, World! - Your first JavaScript output");
console.log("Welcome", "to", "JavaScript", "programming");

// Different console methods for various message types
console.log("Normal message");
console.warn("This is a warning message");
console.error("This is an error message");
console.info("This is an information message");

// Using console.log for debugging
console.log("Debug: JavaScript script is running successfully");

console.log(""); // Empty line for better readability

// ========== PART 2: VARIABLE DECLARATIONS ==========

// OLD WAY - var (avoid in modern JavaScript)
var oldStyleVariable = "Avoid using var";
console.log("Old style variable:", oldStyleVariable);

// MODERN WAY - let (for changeable variables)
let instructorName = "Saad Hassan Saad";
let instructorAge = 28;
let currentCourse = "Back-End Development";

console.log("Instructor Name:", instructorName);
console.log("Instructor Age:", instructorAge);
console.log("Current Course:", currentCourse);

// Variables can be updated with let
instructorAge = 29; // Updating age
console.log("Updated Age:", instructorAge);

// MODERN WAY - const (for constants that don't change)
const ACADEMY_NAME = "Academy of Digital Arts Egypt";
const INSTRUCTOR_DEPARTMENT = "Software Department";
const FAVORITE_COLOR = "black";
const GRADUATION_FIELD = "Computer Science";

console.log("Academy:", ACADEMY_NAME);
console.log("Department:", INSTRUCTOR_DEPARTMENT);
console.log("Favorite Color:", FAVORITE_COLOR);
console.log("Education Background:", GRADUATION_FIELD);

console.log(""); // Empty line for better readability

// ========== PART 3: DATA TYPES EXPLORATION ==========

// STRING DATA TYPE
const firstName = "Saad";
const middleName = "Hassan";
const lastName = "Saad";
const fullName = `${firstName} ${middleName} ${lastName}`; // Template literal
const jobTitle = "Full Stack Web Development Instructor";

console.log("=== STRING DATA TYPE ===");
console.log("First Name:", firstName);
console.log("Full Name:", fullName);
console.log("Job Title:", jobTitle);

// String properties and methods
console.log("Name Length:", fullName.length);
console.log("Uppercase Name:", fullName.toUpperCase());
console.log("Lowercase Name:", fullName.toLowerCase());

// NUMBER DATA TYPE
const age = 28;
const yearsOfExperience = 5;
const currentYear = 2025;
const coursePrice = 299.99;
const temperature = -10.5;

console.log("=== NUMBER DATA TYPE ===");
console.log("Age:", age);
console.log("Years of Experience:", yearsOfExperience);
console.log("Current Year:", currentYear);
console.log("Course Price:", coursePrice);
console.log("Temperature:", temperature);

// Mathematical operations
const totalStudents = 25;
const passedStudents = 22;
const failedStudents = totalStudents - passedStudents;
const passRate = (passedStudents / totalStudents) * 100;

console.log("Total Students:", totalStudents);
console.log("Passed Students:", passedStudents);
console.log("Failed Students:", failedStudents);
console.log("Pass Rate:", passRate + "%");

// BOOLEAN DATA TYPE
const isInstructor = true;
const isDepartmentHead = true;
const isStudent = false;
const hasGraduated = true;

console.log("=== BOOLEAN DATA TYPE ===");
console.log("Is Instructor:", isInstructor);
console.log("Is Department Head:", isDepartmentHead);
console.log("Is Student:", isStudent);
console.log("Has Graduated:", hasGraduated);

// Boolean from comparisons
const isExperienced = yearsOfExperience >= 3;
const isAdult = age >= 18;
console.log("Is Experienced:", isExperienced);
console.log("Is Adult:", isAdult);

// NULL AND UNDEFINED
let nextCourse = null; // Intentionally empty
let undefinedVariable; // Declared but not assigned

console.log("=== NULL AND UNDEFINED ===");
console.log("Next Course:", nextCourse);
console.log("Undefined Variable:", undefinedVariable);

// OBJECT DATA TYPE
const instructor = {
    name: "Saad Hassan Saad",
    age: 28,
    position: "Full Stack Web Development Instructor",
    department: "Head of Software Department",
    education: "Computer Science",
    favoriteColor: "black",
    isActive: true,
    contact: {
        email: "saad@adaegypt.com",
        phone: "+201234567890"
    }
};

console.log("=== OBJECT DATA TYPE ===");
console.log("Instructor Object:", instructor);
console.log("Instructor Name:", instructor.name);
console.log("Position:", instructor.position);
console.log("Department:", instructor.department);
console.log("Contact Email:", instructor.contact.email);

// Adding new properties to object
instructor.yearsOfExperience = 5;
instructor.currentProject = "ADA Egypt Backend Course";
console.log("Updated Instructor:", instructor);

// ARRAY DATA TYPE
const teachingSubjects = ["JavaScript", "Node.js", "Express.js", "MongoDB", "React"];
const studentGrades = [85, 92, 78, 96, 88, 91];
const mixedArray = [1, "JavaScript", true, null, {course: "Backend"}];

console.log("=== ARRAY DATA TYPE ===");
console.log("Teaching Subjects:", teachingSubjects);
console.log("First Subject:", teachingSubjects[0]);
console.log("Last Subject:", teachingSubjects[teachingSubjects.length - 1]);
console.log("Number of Subjects:", teachingSubjects.length);

console.log("Student Grades:", studentGrades);
console.log("Mixed Array:", mixedArray);

// Adding elements to arrays
teachingSubjects.push("PostgreSQL");
teachingSubjects.push("Docker");
console.log("Updated Subjects:", teachingSubjects);

console.log(""); // Empty line for better readability

// ========== PART 4: TYPE CHECKING WITH typeof ==========

console.log("=== TYPE CHECKING WITH typeof OPERATOR ===");
console.log("typeof firstName:", typeof firstName);
console.log("typeof age:", typeof age);
console.log("typeof isInstructor:", typeof isInstructor);
console.log("typeof nextCourse:", typeof nextCourse); // Returns 'object' - JavaScript quirk
console.log("typeof undefinedVariable:", typeof undefinedVariable);
console.log("typeof instructor:", typeof instructor);
console.log("typeof teachingSubjects:", typeof teachingSubjects);

// ========== PART 5: TYPE CONVERSION ==========

console.log("=== TYPE CONVERSION EXAMPLES ===");

// String to Number conversion
const stringNumber = "123";
const stringDecimal = "45.67";
const invalidString = "not a number";

console.log("Original String:", stringNumber, "- Type:", typeof stringNumber);
console.log("Number() conversion:", Number(stringNumber), "- Type:", typeof Number(stringNumber));
console.log("parseInt() conversion:", parseInt(stringNumber), "- Type:", typeof parseInt(stringNumber));
console.log("parseFloat() conversion:", parseFloat(stringDecimal), "- Type:", typeof parseFloat(stringDecimal));
console.log("Invalid conversion:", Number(invalidString)); // Returns NaN

// Number to String conversion
const numberValue = 456;
console.log("Original Number:", numberValue, "- Type:", typeof numberValue);
console.log("String() conversion:", String(numberValue), "- Type:", typeof String(numberValue));

// Boolean conversion examples
console.log("=== BOOLEAN CONVERSION ===");
console.log("Boolean(1):", Boolean(1)); // true
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean('Saad'):", Boolean("Saad")); // true
console.log("Boolean(''):", Boolean("")); // false
console.log("Boolean(null):", Boolean(null)); // false
console.log("Boolean(undefined):", Boolean(undefined)); // false

// Automatic type conversion (coercion)
console.log("=== AUTOMATIC TYPE CONVERSION ===");
const result1 = "5" + 3; // String concatenation
const result2 = "10" - 5; // Number subtraction
const result3 = "ADA" * 2; // NaN (Not a Number)

console.log("'5' + 3 =", result1, "- Type:", typeof result1);
console.log("'10' - 5 =", result2, "- Type:", typeof result2);
console.log("'ADA' * 2 =", result3, "- Type:", typeof result3);

console.log(""); // Empty line for better readability

// ========== PART 6: PRACTICAL STUDENT INFORMATION SYSTEM ==========

console.log("=== STUDENT INFORMATION SYSTEM ===");
console.log("Created by:", fullName);
console.log("Department:", INSTRUCTOR_DEPARTMENT);

// Sample student data
const studentId = 12345;
let studentName = "Ahmed Hassan";
let currentGrade = 85.5;
let isEnrolled = true;
let graduationDate = null;

// Display student information
console.log("Student ID:", studentId);
console.log("Student Name:", studentName);
console.log("Current Grade:", currentGrade);
console.log("Is Enrolled:", isEnrolled);
console.log("Graduation Date:", graduationDate);

// Student courses
const enrolledCourses = ["JavaScript Fundamentals", "Database Design", "Web Development"];
console.log("Enrolled Courses:", enrolledCourses);
console.log("Number of Courses:", enrolledCourses.length);

// Data type verification for student system
console.log("=== STUDENT DATA TYPES ===");
console.log("Type of studentId:", typeof studentId);
console.log("Type of studentName:", typeof studentName);
console.log("Type of currentGrade:", typeof currentGrade);
console.log("Type of isEnrolled:", typeof isEnrolled);
console.log("Type of graduationDate:", typeof graduationDate);
console.log("Type of enrolledCourses:", typeof enrolledCourses);

// ========== PART 7: INSTRUCTOR PROFILE SHOWCASE ==========

console.log("=== INSTRUCTOR PROFILE SHOWCASE ===");

const instructorProfile = {
    personalInfo: {
        name: "Saad Hassan Saad",
        age: 28,
        favoriteColor: "black",
        education: "Computer Science Graduate"
    },
    professionalInfo: {
        title: "Full Stack Web Development Instructor",
        position: "Head of Software Department",
        company: "Academy of Digital Arts Egypt",
        experience: "5+ years in software development",
        specializations: ["JavaScript", "Node.js", "React", "Database Management"]
    },
    currentProjects: [
        "Backend Development Course",
        "Full Stack Web Development Bootcamp", 
        "Software Department Management",
        "Student Mentoring Program"
    ]
};

// Display complete instructor profile
console.log("Complete Instructor Profile:", instructorProfile);
console.log("Personal Name:", instructorProfile.personalInfo.name);
console.log("Professional Title:", instructorProfile.professionalInfo.title);
console.log("Company:", instructorProfile.professionalInfo.company);
console.log("Specializations:", instructorProfile.professionalInfo.specializations);
console.log("Current Projects:", instructorProfile.currentProjects);

// Add dynamic content to profile
instructorProfile.currentProjects.push("Advanced JavaScript Workshop");
instructorProfile.professionalInfo.currentStudents = 150;
console.log("Updated Profile:", instructorProfile);

// ========== PART 8: COURSE STATISTICS ==========

console.log("=== COURSE STATISTICS ===");

const courseStats = {
    courseName: "JavaScript Fundamentals",
    instructor: "Saad Hassan Saad",
    totalStudents: 45,
    activeStudents: 42,
    completedAssignments: 38,
    averageScore: 87.5
};

console.log("Course Name:", courseStats.courseName);
console.log("Instructor:", courseStats.instructor);
console.log("Total Enrolled:", courseStats.totalStudents);
console.log("Active Students:", courseStats.activeStudents);
console.log("Completed Assignments:", courseStats.completedAssignments);
console.log("Average Score:", courseStats.averageScore);

// Calculate completion rate
const completionRate = (courseStats.completedAssignments / courseStats.totalStudents) * 100;
const activeRate = (courseStats.activeStudents / courseStats.totalStudents) * 100;

console.log("Assignment Completion Rate:", completionRate.toFixed(2) + "%");
console.log("Student Activity Rate:", activeRate.toFixed(2) + "%");

// ========== FINAL SUMMARY ==========

console.log(""); // Empty line for better readability
console.log("=== SESSION SUMMARY ===");
console.log("JavaScript Fundamentals Session Completed Successfully");
console.log("Topics Covered:");
console.log("1. Basic Syntax and Console Output");
console.log("2. Variable Declarations (var, let, const)");
console.log("3. Data Types (string, number, boolean, null, undefined, object, array)");
console.log("4. Type Checking with typeof operator");
console.log("5. Type Conversion and Coercion");
console.log("6. Practical Applications and Examples");
console.log("");
console.log("Instructor: " + fullName);
console.log("Position: " + jobTitle);
console.log("Department: " + INSTRUCTOR_DEPARTMENT);
console.log("Institution: " + ACADEMY_NAME);
console.log("");
console.log("Remember: Practice makes perfect in programming!");

console.log("Next session: Functions, Conditionals, and Loops");
