console.log("=== JavaScript Functions Complete Guide ===");
console.log("Instructor: Saad Hassan Saad - ADA Egypt");
console.log("Session 3: Functions, Arrow Functions, Parameters & Scope");

// ========== PART 1: FUNCTION DECLARATIONS ==========

// Basic function declaration
function greetInstructor() {
    console.log("Hello from Saad Hassan Saad, your instructor at ADA Egypt!");
}

// Function with parameters
function createInstructorProfile(name, age, department, favoriteColor) {
    return `Instructor: ${name}, Age: ${age}, Department: ${department}, Favorite Color: ${favoriteColor}`;
}

// Function with return value
function calculateStudentProgress(completedLessons, totalLessons) {
    const percentage = (completedLessons / totalLessons) * 100;
    return Math.round(percentage);
}

// Function with default parameters
function createCourseWelcome(studentName = "Student", course = "Full Stack Development") {
    return `Welcome ${studentName} to ${course} course at ADA Egypt!`;
}

// ========== PART 2: FUNCTION EXPRESSIONS ==========

// Basic function expression
const instructorIntroduction = function() {
    console.log("I'm Saad Hassan Saad, Computer Science graduate and your instructor");
};

// Function expression with parameters
const calculateGrade = function(score, maxScore) {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 90) return "A";
    if (percentage >= 80) return "B";
    if (percentage >= 70) return "C";
    if (percentage >= 60) return "D";
    return "F";
};

// Named function expression
const validateStudentData = function validateData(student) {
    if (!student.name) return "Student name is required";
    if (!student.email) return "Student email is required";
    if (student.age < 16) return "Student must be at least 16 years old";
    return "Valid student data";
};

// ========== PART 3: ARROW FUNCTIONS ==========

// Arrow function with no parameters
const showDepartmentInfo = () => {
    console.log("Software Department - Head: Saad Hassan Saad");
};

// Arrow function with one parameter
const squareNumber = num => num * num;

// Arrow function with multiple parameters
const createStudentRecord = (name, age, course) => ({
    name: name,
    age: age,
    course: course,
    instructor: "Saad Hassan Saad",
    department: "Software Department",
    enrollmentDate: new Date().toISOString().split('T')[0]
});

// Arrow function with implicit return
const isAdultStudent = age => age >= 18;
const formatCourseName = course => `ADA Egypt - ${course}`;

// Arrow function with explicit return
const calculateCourseDiscount = (originalPrice, discountPercent) => {
    const discount = originalPrice * (discountPercent / 100);
    return originalPrice - discount;
};

// ========== PART 4: ADVANCED FUNCTION CONCEPTS ==========

// Rest parameters
function logStudentGrades(...grades) {
    console.log(`Instructor Saad Hassan Saad recorded grades:`, grades);
    const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
    return `Average grade: ${average.toFixed(2)}`;
}

// Destructuring parameters
function displayStudentInfo({name, age, course, level}) {
    return `Student: ${name}, Age: ${age}, Course: ${course}, Level: ${level}`;
}

// Function returning function (Higher-order function)
function createCourseValidator(courseName) {
    return function(studentLevel) {
        if (courseName === "Advanced JavaScript" && studentLevel < 3) {
            return "Prerequisites not met. Contact Saad Hassan Saad for guidance.";
        }
        return `Student approved for ${courseName}`;
    };
}

// ========== PART 5: SCOPE DEMONSTRATIONS ==========

// Global scope variables
const instructorName = "Saad Hassan Saad";
const department = "Software Department";
let studentCount = 0;

function demonstrateScope() {
    // Function scope
    const localCourse = "Full Stack Development";
    let currentModule = "JavaScript Functions";
    
    console.log("Function scope - accessing global:", instructorName);
    console.log("Function scope - local variable:", localCourse);
    
    // Block scope demonstration
    if (true) {
        let blockVariable = "I'm in block scope";
        const blockConstant = "Block constant value";
        console.log("Block scope:", blockVariable);
    }
    
    // Nested function scope
    function innerFunction() {
        console.log("Inner function accessing outer:", currentModule);
        console.log("Inner function accessing global:", department);
    }
    
    innerFunction();
}

// ========== PART 6: HOISTING DEMONSTRATIONS ==========

// This works due to function declaration hoisting
console.log("Testing hoisting:", hoistedFunction(5));

function hoistedFunction(x) {
    return x * 2;
}

// Variable hoisting demonstration
function demonstrateHoisting() {
    console.log("Variable before declaration:", typeof hoistedVar); // undefined
    
    var hoistedVar = "Now I have a value";
    console.log("Variable after declaration:", hoistedVar);
    
    // let and const are hoisted but not accessible (temporal dead zone)
    let letVariable = "I'm let";
    const constVariable = "I'm const";
    
    console.log("let after declaration:", letVariable);
    console.log("const after declaration:", constVariable);
}

// ========== PART 7: PRACTICAL APPLICATIONS ==========

// Student management system
const students = [
    { id: 1, name: "Ahmed Ali", age: 22, course: "JavaScript", instructor: "Saad Hassan Saad" },
    { id: 2, name: "Sara Ahmed", age: 20, course: "React", instructor: "Saad Hassan Saad" }
];

// Find student function
const findStudentById = (id) => {
    return students.find(student => student.id === id);
};

// Course management functions
function createCourse(title, duration, level) {
    return {
        title: title,
        duration: duration,
        level: level,
        instructor: "Saad Hassan Saad",
        department: "Software Department",
        maxStudents: 25,
        isActive: true
    };
}

const enrollStudent = (courseId, studentData) => {
    const enrollment = {
        courseId: courseId,
        studentId: studentData.id,
        enrollmentDate: new Date().toISOString(),
        instructor: "Saad Hassan Saad",
        status: "active"
    };
    return enrollment;
};

// Grade calculation system
function calculateFinalGrade(assignments, projects, exams) {
    const assignmentAvg = assignments.reduce((sum, grade) => sum + grade, 0) / assignments.length;
    const projectAvg = projects.reduce((sum, grade) => sum + grade, 0) / projects.length;
    const examAvg = exams.reduce((sum, grade) => sum + grade, 0) / exams.length;
    
    // Weighted average: 30% assignments, 40% projects, 30% exams
    const finalGrade = (assignmentAvg * 0.3) + (projectAvg * 0.4) + (examAvg * 0.3);
    return Math.round(finalGrade);
}

// Course statistics
const generateCourseStats = (studentGrades) => {
    const total = studentGrades.length;
    const sum = studentGrades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / total;
    const highest = Math.max(...studentGrades);
    const lowest = Math.min(...studentGrades);
    
    return {
        totalStudents: total,
        averageGrade: average.toFixed(2),
        highestGrade: highest,
        lowestGrade: lowest,
        instructor: "Saad Hassan Saad"
    };
};

// ========== PART 8: ERROR HANDLING IN FUNCTIONS ==========

function validateCourseEnrollment(student, course) {
    try {
        if (!student || !student.name) {
            throw new Error("Student information is required");
        }
        
        if (!course || !course.title) {
            throw new Error("Course information is required");
        }
        
        if (student.age < 16) {
            throw new Error("Student must be at least 16 years old");
        }
        
        return {
            success: true,
            message: `${student.name} successfully enrolled in ${course.title}`,
            instructor: "Saad Hassan Saad"
        };
        
    } catch (error) {
        return {
            success: false,
            message: error.message,
            instructor: "Saad Hassan Saad"
        };
    }
}

// ========== EXECUTION AND TESTING ==========

console.log("\n=== Function Execution Examples ===");

// Test function declarations
greetInstructor();
console.log(createInstructorProfile("Saad Hassan Saad", 28, "Software Department", "Black"));
console.log("Student progress:", calculateStudentProgress(8, 10) + "%");
console.log(createCourseWelcome("Ahmed", "JavaScript Fundamentals"));

// Test function expressions
instructorIntroduction();
console.log("Grade for 85/100:", calculateGrade(85, 100));

// Test arrow functions
showDepartmentInfo();
console.log("Square of 7:", squareNumber(7));
console.log("Is 17 adult student:", isAdultStudent(17));
console.log(formatCourseName("Full Stack Development"));

// Test advanced concepts
console.log(logStudentGrades(85, 92, 78, 88, 95));

const sampleStudent = {
    name: "Omar Hassan",
    age: 23,
    course: "React Development",
    level: 2
};
console.log(displayStudentInfo(sampleStudent));

// Test scope
demonstrateScope();

// Test hoisting
demonstrateHoisting();

// Test practical applications
const newCourse = createCourse("Advanced JavaScript", "3 months", "Intermediate");
console.log("New course created:", newCourse);

const studentGrades = [85, 90, 78, 92, 88, 76, 94];
const courseStats = generateCourseStats(studentGrades);
console.log("Course statistics:", courseStats);

const finalGrade = calculateFinalGrade([85, 90, 88], [92, 89], [87, 91]);
console.log("Student final grade:", finalGrade);

// Test error handling
const enrollmentResult = validateCourseEnrollment(
    { name: "Fatima Ahmed", age: 22 },
    { title: "JavaScript Fundamentals" }
);
console.log("Enrollment result:", enrollmentResult);

console.log("\n=== Session Complete ===");
console.log("All function concepts demonstrated successfully!");
console.log("Next session: Objects and Arrays");
console.log("Instructor: Saad Hassan Saad - ADA Egypt");