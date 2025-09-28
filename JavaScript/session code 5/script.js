/**
 * JavaScript Session 5: Objects, JSON, Error Handling & Modules
 * Academy of Digital Arts Egypt - Back-End Development Course
 * 
 * Instructor: Saad Hassan Saad
 * Position: Full Stack Web Development Instructor & Head of Software Department
 * Age: 28 | Education: Computer Science Graduate
 * Organization: Academy of Digital Arts Egypt
 * Favorite Color: Black
 */

console.log("=".repeat(60));
console.log("JavaScript Complete Session - Professional Demo");
console.log("Instructor: Saad Hassan Saad - ADA Egypt");
console.log("=".repeat(60));

// ========== PART 1: OBJECT FUNDAMENTALS ==========
console.log("\n1. OBJECT FUNDAMENTALS");
console.log("-".repeat(30));

// Basic object creation and manipulation
const instructor = {
    name: "Saad Hassan Saad",
    age: 28,
    education: "Computer Science Graduate",
    position: "Full Stack Web Development Instructor",
    department: "Head of Software Department",
    organization: "Academy of Digital Arts Egypt",
    favoriteColor: "black",
    skills: ["JavaScript", "Node.js", "React", "MongoDB", "Express"]
};

console.log("Instructor Info:", instructor.name);
console.log("Position:", instructor.position);
console.log("Skills:", instructor.skills.join(", "));

// Object with methods demonstrating 'this' keyword
const courseManager = {
    instructorName: "Saad Hassan Saad",
    courses: [],
    studentsCount: 0,
    
    addCourse: function(courseName, duration) {
        const course = {
            id: Date.now(),
            name: courseName,
            duration: duration,
            instructor: this.instructorName,
            createdAt: new Date().toISOString()
        };
        this.courses.push(course);
        console.log(`Course added: ${courseName} by ${this.instructorName}`);
        return this;
    },
    
    enrollStudent: function(count) {
        this.studentsCount += count;
        console.log(`${count} students enrolled. Total: ${this.studentsCount}`);
        return this;
    },
    
    getCoursesSummary: function() {
        return {
            totalCourses: this.courses.length,
            totalStudents: this.studentsCount,
            instructor: this.instructorName,
            courses: this.courses.map(course => course.name)
        };
    }
};

// Method chaining demonstration
courseManager
    .addCourse("JavaScript Fundamentals", "40 hours")
    .addCourse("Node.js Backend", "60 hours")
    .enrollStudent(25)
    .enrollStudent(15);

console.log("Course Summary:", courseManager.getCoursesSummary());

// ========== PART 2: JSON OPERATIONS ==========
console.log("\n2. JSON OPERATIONS");
console.log("-".repeat(30));

// Converting objects to JSON
const adaEgyptData = {
    instructor: {
        name: "Saad Hassan Saad",
        age: 28,
        role: "Head of Software Department",
        specialization: "Full Stack Development"
    },
    academy: "Academy of Digital Arts Egypt",
    courses: ["JavaScript", "Node.js", "React", "MongoDB"],
    activeStudents: 40,
    isActive: true
};

const jsonString = JSON.stringify(adaEgyptData, null, 2);
console.log("Academy Data as JSON:");
console.log(jsonString);

// Safe JSON parsing function
function safeParseJSON(jsonStr) {
    try {
        const result = JSON.parse(jsonStr);
        return { success: true, data: result };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

const validJSON = '{"name": "Saad Hassan Saad", "department": "Software"}';
const invalidJSON = '{"name": "Saad Hassan Saad", "department":}';

console.log("Valid JSON Parse:", safeParseJSON(validJSON));
console.log("Invalid JSON Parse:", safeParseJSON(invalidJSON));

// ========== PART 3: ERROR HANDLING ==========
console.log("\n3. ERROR HANDLING");
console.log("-".repeat(30));

// Custom error class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

// Student validation function
function validateStudent(student) {
    try {
        if (!student.name || student.name.length < 2) {
            throw new ValidationError("Student name must be at least 2 characters");
        }
        if (!student.age || student.age < 16) {
            throw new ValidationError("Student must be at least 16 years old");
        }
        if (!student.course) {
            throw new ValidationError("Course selection is required");
        }
        
        console.log(`Student validated: ${student.name} enrolled in ${student.course}`);
        return true;
        
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log("Validation Error:", error.message);
        } else {
            console.log("Unexpected Error:", error.message);
        }
        return false;
    } finally {
        console.log("Validation process completed for:", student.name || "Unknown");
    }
}

// Test validation
validateStudent({
    name: "Ahmed Hassan",
    age: 22,
    course: "Full Stack Development"
});

validateStudent({
    name: "A",
    age: 15,
    course: ""
});

// Safe calculation function
function performCalculation(operation, a, b) {
    try {
        switch (operation) {
            case 'add':
                return a + b;
            case 'subtract':
                return a - b;
            case 'multiply':
                return a * b;
            case 'divide':
                if (b === 0) {
                    throw new Error("Division by zero is not allowed");
                }
                return a / b;
            default:
                throw new Error("Unknown operation: " + operation);
        }
    } catch (error) {
        console.log("Calculation Error:", error.message);
        return null;
    }
}

console.log("Addition Result:", performCalculation('add', 10, 5));
console.log("Division by Zero:", performCalculation('divide', 10, 0));

// ========== PART 4: PRACTICAL APPLICATION ==========
console.log("\n4. PRACTICAL APPLICATION - COURSE MANAGEMENT SYSTEM");
console.log("-".repeat(50));

class Course {
    constructor(title, instructor, duration, maxStudents) {
        this.id = Date.now() + Math.random();
        this.title = title;
        this.instructor = instructor;
        this.duration = duration;
        this.maxStudents = maxStudents;
        this.enrolledStudents = [];
        this.isActive = true;
        this.createdAt = new Date();
    }
    
    enrollStudent(studentName, studentEmail) {
        try {
            if (this.enrolledStudents.length >= this.maxStudents) {
                throw new Error("Course is full");
            }
            
            const student = {
                id: Date.now(),
                name: studentName,
                email: studentEmail,
                enrolledAt: new Date(),
                progress: 0
            };
            
            this.enrolledStudents.push(student);
            console.log(`${studentName} enrolled in ${this.title}`);
            return student;
            
        } catch (error) {
            console.log("Enrollment Error:", error.message);
            return null;
        }
    }
    
    updateProgress(studentId, progressPercent) {
        const student = this.enrolledStudents.find(s => s.id === studentId);
        if (student) {
            student.progress = Math.min(100, Math.max(0, progressPercent));
            console.log(`Progress updated for ${student.name}: ${student.progress}%`);
        }
    }
    
    getStatistics() {
        const totalStudents = this.enrolledStudents.length;
        const averageProgress = totalStudents > 0 
            ? this.enrolledStudents.reduce((sum, student) => sum + student.progress, 0) / totalStudents
            : 0;
            
        return {
            courseTitle: this.title,
            instructor: this.instructor,
            totalStudents: totalStudents,
            availableSpots: this.maxStudents - totalStudents,
            averageProgress: Math.round(averageProgress),
            isActive: this.isActive
        };
    }
    
    exportData() {
        return JSON.stringify({
            courseInfo: {
                id: this.id,
                title: this.title,
                instructor: this.instructor,
                duration: this.duration
            },
            students: this.enrolledStudents.map(student => ({
                name: student.name,
                email: student.email,
                progress: student.progress
            })),
            statistics: this.getStatistics()
        }, null, 2);
    }
}

class AcademyManager {
    constructor(name, headOfDepartment) {
        this.academyName = name;
        this.headOfDepartment = headOfDepartment;
        this.courses = [];
        this.totalRevenue = 0;
    }
    
    createCourse(title, duration, maxStudents, fee) {
        try {
            const course = new Course(title, this.headOfDepartment, duration, maxStudents);
            course.fee = fee;
            this.courses.push(course);
            console.log(`New course created: ${title}`);
            return course;
        } catch (error) {
            console.log("Course Creation Error:", error.message);
            return null;
        }
    }
    
    findCourse(title) {
        return this.courses.find(course => 
            course.title.toLowerCase().includes(title.toLowerCase())
        );
    }
    
    generateReport() {
        const totalCourses = this.courses.length;
        const totalStudents = this.courses.reduce((sum, course) => 
            sum + course.enrolledStudents.length, 0
        );
        
        return {
            academyName: this.academyName,
            headOfDepartment: this.headOfDepartment,
            totalCourses: totalCourses,
            totalStudents: totalStudents,
            activeCourses: this.courses.filter(course => course.isActive).length,
            courseTitles: this.courses.map(course => course.title)
        };
    }
    
    exportAllData() {
        const report = this.generateReport();
        const coursesData = this.courses.map(course => JSON.parse(course.exportData()));
        
        return JSON.stringify({
            academyReport: report,
            coursesDetails: coursesData,
            exportedBy: this.headOfDepartment,
            exportedAt: new Date().toISOString()
        }, null, 2);
    }
}

// ========== SYSTEM DEMONSTRATION ==========
console.log("\n5. SYSTEM DEMONSTRATION");
console.log("-".repeat(30));

// Initialize Academy
const adaEgypt = new AcademyManager(
    "Academy of Digital Arts Egypt",
    "Saad Hassan Saad"
);

// Create courses
const jsCourse = adaEgypt.createCourse("JavaScript Fundamentals", "6 weeks", 30, 500);
const nodeCourse = adaEgypt.createCourse("Node.js Backend Development", "8 weeks", 25, 800);
const reactCourse = adaEgypt.createCourse("React Frontend Development", "7 weeks", 20, 700);

// Enroll students
if (jsCourse) {
    const student1 = jsCourse.enrollStudent("Ahmed Ali", "ahmed@example.com");
    const student2 = jsCourse.enrollStudent("Sara Mohamed", "sara@example.com");
    const student3 = jsCourse.enrollStudent("Omar Hassan", "omar@example.com");
    
    // Update progress
    if (student1) jsCourse.updateProgress(student1.id, 75);
    if (student2) jsCourse.updateProgress(student2.id, 90);
    if (student3) jsCourse.updateProgress(student3.id, 60);
}

if (nodeCourse) {
    nodeCourse.enrollStudent("Layla Ibrahim", "layla@example.com");
    nodeCourse.enrollStudent("Mahmoud Saad", "mahmoud@example.com");
}

// Display statistics
console.log("\nCourse Statistics:");
console.log(jsCourse ? jsCourse.getStatistics() : "JavaScript course not available");
console.log(nodeCourse ? nodeCourse.getStatistics() : "Node.js course not available");

// Generate and display academy report
console.log("\nAcademy Report:");
console.log(adaEgypt.generateReport());

// Export data demonstration
console.log("\nExported Academy Data:");
const exportedData = adaEgypt.exportAllData();
console.log("Data exported successfully. Size:", exportedData.length, "characters");

// Parse and verify exported data
const parsedData = safeParseJSON(exportedData);
if (parsedData.success) {
    console.log("Export verification successful");
    console.log("Exported by:", parsedData.data.exportedBy);
    console.log("Total courses exported:", parsedData.data.coursesDetails.length);
} else {
    console.log("Export verification failed:", parsedData.error);
}

// ========== MODULE DEMONSTRATION (CONCEPTUAL) ==========
console.log("\n6. MODULE ORGANIZATION CONCEPTS");
console.log("-".repeat(40));

console.log("// ES6 Module Structure:");
console.log("// export class Course { ... }");
console.log("// export class AcademyManager { ... }");
console.log("// export { ValidationError, safeParseJSON };");
console.log("// export default AcademyManager;");
console.log("");
console.log("// CommonJS Structure:");
console.log("// module.exports = { Course, AcademyManager, ValidationError };");
console.log("// const { Course } = require('./academy-system');");

// ========== SESSION SUMMARY ==========
console.log("\n" + "=".repeat(60));
console.log("SESSION COMPLETED SUCCESSFULLY");
console.log("Instructor: Saad Hassan Saad");
console.log("Topics Covered:");
console.log("- Object properties and methods with 'this' keyword");
console.log("- JSON serialization and parsing with error handling");
console.log("- Custom error classes and try/catch/finally blocks");
console.log("- Practical application with course management system");
console.log("- Module organization concepts");
console.log("Academy of Digital Arts Egypt - Software Department");
console.log("=".repeat(60));