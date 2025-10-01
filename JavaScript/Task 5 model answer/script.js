// ============================================
// JavaScript Session 5 - Student Task Solution
// Academy of Digital Arts Egypt
// Objects, JSON, Error Handling, and Modules
// ============================================

// NOTE: This is a consolidated single-file solution for demonstration.
// In a real project, this would be split into separate modules:
// - student.js (Student class and ValidationError)
// - studentManager.js (StudentManager class)
// - main.js (application entry point)

console.log("=== JavaScript Session 5: Objects, JSON, Error Handling, and Modules ===");
console.log("Instructor: Saad Hassan Saad - Head of Software Department, ADA Egypt");
console.log("\n");

// ============================================
// STEP 3: Custom Error Handling (Define first for use in other classes)
// ============================================

// Custom ValidationError class extending Error
class ValidationError extends Error {
    constructor(message, field = null) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
        this.timestamp = new Date().toISOString();
        
        // Maintains proper stack trace for where error was thrown
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ValidationError);
        }
    }
    
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            field: this.field,
            timestamp: this.timestamp
        };
    }
}

// Additional custom error for data operations
class DataOperationError extends Error {
    constructor(message, operation = null) {
        super(message);
        this.name = "DataOperationError";
        this.operation = operation;
        this.timestamp = new Date().toISOString();
        
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, DataOperationError);
        }
    }
}

console.log("=== Custom Error Classes Defined ===");
console.log("Available error types: ValidationError, DataOperationError");
console.log("\n");

// ============================================
// STEP 1: Create Student Object with Methods
// ============================================

console.log("=== STEP 1: Student Class with Methods ===");

class Student {
    constructor(id, name, email, isActive = true) {
        // Validate required fields
        if (!id || !name || !email) {
            throw new ValidationError("Missing required fields: id, name, and email are required");
        }
        
        // Validate email format
        if (!this.isValidEmail(email)) {
            throw new ValidationError("Invalid email format", "email");
        }
        
        this.id = id;
        this.name = name;
        this.email = email;
        this.grades = [];
        this.isActive = isActive;
        this.createdAt = new Date().toISOString();
        this.createdBy = "Saad Hassan Saad - ADA Egypt";
    }
    
    // Email validation helper
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Add grade method with validation - returns 'this' for chaining
    addGrade(grade) {
        // Validate grade
        if (typeof grade !== 'number') {
            throw new ValidationError("Grade must be a number", "grade");
        }
        
        if (grade < 0 || grade > 100) {
            throw new ValidationError("Grade must be between 0 and 100", "grade");
        }
        
        this.grades.push(grade);
        console.log(`Added grade ${grade} for ${this.name}`);
        
        // Return 'this' for method chaining
        return this;
    }
    
    // Calculate average grade
    getAverage() {
        if (this.grades.length === 0) {
            return 0;
        }
        
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return Math.round((sum / this.grades.length) * 100) / 100;
    }
    
    // Get student information
    getInfo() {
        const average = this.getAverage();
        const status = this.isActive ? "Active" : "Inactive";
        
        return `Student: ${this.name} (ID: ${this.id})
Email: ${this.email}
Status: ${status}
Grades: [${this.grades.join(", ")}]
Average: ${average}
Total Grades: ${this.grades.length}`;
    }
    
    // Update email with validation - returns 'this' for chaining
    updateEmail(newEmail) {
        if (!this.isValidEmail(newEmail)) {
            throw new ValidationError("Invalid email format", "email");
        }
        
        const oldEmail = this.email;
        this.email = newEmail;
        console.log(`Email updated from ${oldEmail} to ${newEmail}`);
        
        // Return 'this' for method chaining
        return this;
    }
    
    // Update active status - returns 'this' for chaining
    setActive(isActive) {
        this.isActive = isActive;
        console.log(`Student ${this.name} status set to: ${isActive ? "Active" : "Inactive"}`);
        return this;
    }
    
    // ============================================
    // STEP 2: JSON Operations
    // ============================================
    
    // Convert to JSON string
    toJSON() {
        const jsonString = JSON.stringify({
            id: this.id,
            name: this.name,
            email: this.email,
            grades: this.grades,
            isActive: this.isActive,
            average: this.getAverage(),
            createdAt: this.createdAt,
            createdBy: this.createdBy
        }, null, 2);
        
        return jsonString;
    }
    
    // Static method to create Student from JSON
    static fromJSON(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            
            // Validate required fields
            if (!data.id || !data.name || !data.email) {
                throw new ValidationError("JSON missing required fields");
            }
            
            // Create student instance
            const student = new Student(data.id, data.name, data.email, data.isActive);
            
            // Add grades if present
            if (Array.isArray(data.grades)) {
                data.grades.forEach(grade => {
                    student.grades.push(grade);
                });
            }
            
            // Restore timestamps if present
            if (data.createdAt) {
                student.createdAt = data.createdAt;
            }
            
            return student;
            
        } catch (error) {
            if (error instanceof SyntaxError) {
                throw new DataOperationError("Invalid JSON format", "fromJSON");
            }
            throw error;
        }
    }
}

// Test Student class
console.log("--- Creating Students with Method Chaining ---");
try {
    const student1 = new Student(1, "Ahmed Mohamed Ali", "ahmed@adaegypt.com");
    
    // Demonstrate method chaining
    student1
        .addGrade(85)
        .addGrade(92)
        .addGrade(78)
        .updateEmail("ahmed.mohamed@adaegypt.com")
        .setActive(true);
    
    console.log("\n" + student1.getInfo());
    
} catch (error) {
    console.error(`Error: ${error.message}`);
}

console.log("\n");

// ============================================
// STEP 2: JSON Operations with Error Handling
// ============================================

console.log("=== STEP 2: JSON Operations with Error Handling ===");

// Safe JSON export function
function exportStudents(students) {
    try {
        console.log("--- Exporting Students to JSON ---");
        
        if (!Array.isArray(students)) {
            throw new ValidationError("Students must be an array");
        }
        
        const studentsData = students.map(student => ({
            id: student.id,
            name: student.name,
            email: student.email,
            grades: student.grades,
            isActive: student.isActive,
            average: student.getAverage(),
            createdAt: student.createdAt
        }));
        
        const jsonString = JSON.stringify(studentsData, null, 2);
        console.log("Export successful");
        
        return {
            success: true,
            data: jsonString,
            count: students.length
        };
        
    } catch (error) {
        console.error(`Export failed: ${error.message}`);
        return {
            success: false,
            error: error.message,
            errorType: error.name
        };
    }
}

// Safe JSON import function
function importStudents(jsonString) {
    try {
        console.log("--- Importing Students from JSON ---");
        
        if (typeof jsonString !== 'string') {
            throw new ValidationError("Input must be a JSON string");
        }
        
        const studentsData = JSON.parse(jsonString);
        
        if (!Array.isArray(studentsData)) {
            throw new ValidationError("JSON must contain an array of students");
        }
        
        const students = studentsData.map(data => {
            const student = new Student(data.id, data.name, data.email, data.isActive);
            
            if (Array.isArray(data.grades)) {
                data.grades.forEach(grade => student.grades.push(grade));
            }
            
            if (data.createdAt) {
                student.createdAt = data.createdAt;
            }
            
            return student;
        });
        
        console.log(`Import successful: ${students.length} students loaded`);
        
        return {
            success: true,
            data: students,
            count: students.length
        };
        
    } catch (error) {
        console.error(`Import failed: ${error.message}`);
        
        if (error instanceof SyntaxError) {
            return {
                success: false,
                error: "Invalid JSON format",
                errorType: "SyntaxError"
            };
        }
        
        return {
            success: false,
            error: error.message,
            errorType: error.name
        };
    }
}

// Test JSON operations
const testStudent1 = new Student(1, "Fatma Ahmed Hassan", "fatma@adaegypt.com");
testStudent1.addGrade(95).addGrade(88).addGrade(92);

const testStudent2 = new Student(2, "Omar Saad Mahmoud", "omar@adaegypt.com");
testStudent2.addGrade(78).addGrade(82).addGrade(75);

const exportResult = exportStudents([testStudent1, testStudent2]);
console.log("Export result:", exportResult.success ? "Success" : "Failed");

if (exportResult.success) {
    console.log("\nExported JSON (preview):");
    console.log(exportResult.data.substring(0, 200) + "...");
    
    // Test import
    const importResult = importStudents(exportResult.data);
    console.log("\nImport result:", importResult.success ? "Success" : "Failed");
    console.log(`Imported ${importResult.count} students`);
}

console.log("\n");

// ============================================
// STEP 3: Comprehensive Error Handling Examples
// ============================================

console.log("=== STEP 3: Comprehensive Error Handling ===");

// Safe wrapper function pattern
function safeCreateStudent(id, name, email) {
    try {
        console.log(`Attempting to create student: ${name}`);
        const student = new Student(id, name, email);
        
        return {
            success: true,
            data: student,
            message: "Student created successfully"
        };
        
    } catch (error) {
        return {
            success: false,
            error: error.message,
            errorType: error.name,
            field: error.field || null
        };
    }
}

// Demonstrate error handling
console.log("--- Testing Various Error Scenarios ---");

// Test 1: Valid student creation
const result1 = safeCreateStudent(3, "Nour Ahmed Khaled", "nour@adaegypt.com");
console.log("Test 1 (Valid):", result1.success ? "Success" : `Failed - ${result1.error}`);

// Test 2: Invalid email
const result2 = safeCreateStudent(4, "Test Student", "invalid-email");
console.log("Test 2 (Invalid Email):", result2.success ? "Success" : `Failed - ${result2.error}`);

// Test 3: Missing fields
const result3 = safeCreateStudent(null, null, null);
console.log("Test 3 (Missing Fields):", result3.success ? "Success" : `Failed - ${result3.error}`);

// Demonstrate try/catch/finally
console.log("\n--- Try/Catch/Finally Example ---");
function processStudentGrade(student, grade) {
    console.log(`Processing grade ${grade} for student ${student.name}`);
    
    try {
        student.addGrade(grade);
        console.log("Grade added successfully");
        return { success: true };
        
    } catch (error) {
        console.error(`Error adding grade: ${error.message}`);
        return { success: false, error: error.message };
        
    } finally {
        console.log("Grade processing completed (finally block always runs)");
    }
}

const student = new Student(5, "Test Student", "test@adaegypt.com");
processStudentGrade(student, 95);
processStudentGrade(student, -10); // Invalid grade

console.log("\n");

// ============================================
// STEP 4: Student Manager Class (Module Pattern)
// ============================================

console.log("=== STEP 4: Student Manager with Module Pattern ===");

class StudentManager {
    constructor() {
        this.students = [];
        this.nextId = 1;
        this.manager = "Saad Hassan Saad - ADA Egypt";
    }
    
    // Add student with error handling
    addStudent(name, email, grades = []) {
        try {
            const student = new Student(this.nextId++, name, email);
            
            // Add grades if provided
            grades.forEach(grade => student.addGrade(grade));
            
            this.students.push(student);
            
            return {
                success: true,
                data: student,
                message: `Student ${name} added successfully`
            };
            
        } catch (error) {
            return {
                success: false,
                error: error.message,
                errorType: error.name
            };
        }
    }
    
    // Find student by ID
    findStudentById(id) {
        const student = this.students.find(s => s.id === id);
        
        if (!student) {
            return {
                success: false,
                error: `Student with ID ${id} not found`
            };
        }
        
        return {
            success: true,
            data: student
        };
    }
    
    // Find students by name (partial match)
    findStudentsByName(searchName) {
        const results = this.students.filter(student => 
            student.name.toLowerCase().includes(searchName.toLowerCase())
        );
        
        return {
            success: true,
            data: results,
            count: results.length
        };
    }
    
    // Get all active students
    getActiveStudents() {
        const activeStudents = this.students.filter(s => s.isActive);
        
        return {
            success: true,
            data: activeStudents,
            count: activeStudents.length
        };
    }
    
    // Calculate class statistics
    getClassStatistics() {
        if (this.students.length === 0) {
            return {
                success: true,
                data: {
                    totalStudents: 0,
                    activeStudents: 0,
                    averageGrade: 0,
                    highestAverage: 0,
                    lowestAverage: 0
                }
            };
        }
        
        const activeStudents = this.students.filter(s => s.isActive);
        const averages = this.students
            .filter(s => s.grades.length > 0)
            .map(s => s.getAverage());
        
        const classAverage = averages.length > 0
            ? averages.reduce((sum, avg) => sum + avg, 0) / averages.length
            : 0;
        
        return {
            success: true,
            data: {
                totalStudents: this.students.length,
                activeStudents: activeStudents.length,
                inactiveStudents: this.students.length - activeStudents.length,
                averageGrade: Math.round(classAverage * 100) / 100,
                highestAverage: averages.length > 0 ? Math.max(...averages) : 0,
                lowestAverage: averages.length > 0 ? Math.min(...averages) : 0,
                studentsWithGrades: averages.length
            }
        };
    }
    
    // Export all students to JSON
    exportToJSON() {
        return exportStudents(this.students);
    }
    
    // Import students from JSON
    importFromJSON(jsonString) {
        const result = importStudents(jsonString);
        
        if (result.success) {
            this.students = result.data;
            // Update next ID
            if (this.students.length > 0) {
                this.nextId = Math.max(...this.students.map(s => s.id)) + 1;
            }
        }
        
        return result;
    }
    
    // Display all students
    displayAllStudents() {
        console.log("--- All Students in System ---");
        
        if (this.students.length === 0) {
            console.log("No students in system");
            return;
        }
        
        this.students.forEach((student, index) => {
            console.log(`\n${index + 1}. ${student.getInfo()}`);
            console.log("---");
        });
    }
}

// ============================================
// TESTING THE COMPLETE SYSTEM
// ============================================

console.log("=== Testing Complete Student Management System ===");

const manager = new StudentManager();

// Add students
console.log("\n1. Adding Students to System");
manager.addStudent("Saad Hassan Saad", "saad@adaegypt.com", [95, 92, 98]);
manager.addStudent("Ahmed Ali Mohamed", "ahmed@adaegypt.com", [85, 88, 82]);
manager.addStudent("Fatma Hassan Ibrahim", "fatma@adaegypt.com", [90, 87, 93]);
manager.addStudent("Omar Saad Mahmoud", "omar@adaegypt.com", [75, 78, 72]);
console.log(`Total students added: ${manager.students.length}`);

// Search for student
console.log("\n2. Searching for Student");
const searchResult = manager.findStudentsByName("saad");
console.log(`Found ${searchResult.count} students matching "saad"`);
if (searchResult.count > 0) {
    searchResult.data.forEach(s => console.log(`  - ${s.name}`));
}

// Get class statistics
console.log("\n3. Class Statistics");
const stats = manager.getClassStatistics();
console.log("Statistics:", JSON.stringify(stats.data, null, 2));

// Export to JSON
console.log("\n4. Exporting to JSON");
const exportData = manager.exportToJSON();
console.log(`Export status: ${exportData.success ? "Success" : "Failed"}`);
console.log(`Exported ${exportData.count} students`);

// Display all students
console.log("\n5. All Students in System");
manager.displayAllStudents();

// Test error handling with invalid data
console.log("\n6. Testing Error Handling");
const invalidResult = manager.addStudent("", "invalid", []);
console.log("Adding invalid student:", invalidResult.success ? "Success" : `Failed - ${invalidResult.error}`);

// ============================================
// MODULE EXPORT EXAMPLES (for reference)
// ============================================

console.log("\n=== Module Export Examples (Reference) ===");
console.log(`
// In a real project, code would be organized as follows:

// ===== student.js =====
export class Student { /* ... */ }
export class ValidationError extends Error { /* ... */ }

// OR using CommonJS:
// module.exports = { Student, ValidationError };

// ===== studentManager.js =====
import { Student, ValidationError } from './student.js';
// OR: const { Student, ValidationError } = require('./student.js');

export class StudentManager { /* ... */ }
// OR: module.exports = StudentManager;

// ===== main.js =====
import { Student, ValidationError } from './student.js';
import StudentManager from './studentManager.js';
// OR: const { Student, ValidationError } = require('./student.js');
// OR: const StudentManager = require('./studentManager.js');

// Application code here...
`);

console.log("=== Student Management System Complete ===");
console.log("All JavaScript objects, JSON, error handling, and module concepts demonstrated!");
console.log(`System managed by: ${manager.manager}`);
console.log(`Total students in system: ${manager.students.length}`);
console.log("System ready for production use!");