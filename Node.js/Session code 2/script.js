// ========================================
// Node.js Session 2: ES6+, ES Modules, Promises & Async/Await
// Academy of Digital Arts Egypt
// Instructor: Saad Hassan Saad
// ========================================

// SETUP: Add "type": "module" to package.json first

// ========================================
// PART 1: ES6+ FEATURES
// ========================================

// Template Literals
const instructorName = 'Saad Hassan Saad';
const age = 28;
const position = 'Head of Software Department';
const favoriteColor = 'black';

console.log(`Hello! I'm ${instructorName}, ${age} years old.`);
console.log(`I work as ${position} at ADA Egypt.`);
console.log(`My favorite color is ${favoriteColor}.`);

// Destructuring Objects
const instructor = {
    name: 'Saad Hassan Saad',
    age: 28,
    role: 'Full Stack Web Development Instructor',
    department: 'Software',
    education: 'Computer Science'
};

const { name, role, department } = instructor;
console.log('\nInstructor Info:', name, role, department);

// Destructuring Arrays
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const [primary, secondary, ...otherSkills] = skills;
console.log('\nPrimary Skill:', primary);
console.log('Secondary Skill:', secondary);
console.log('Other Skills:', otherSkills);

// Spread Operator
const basicInfo = { name: 'Saad', age: 28 };
const professionalInfo = { ...basicInfo, role: 'Instructor', company: 'ADA Egypt' };
console.log('\nComplete Profile:', professionalInfo);

// Rest Parameters
function displayCourses(...courses) {
    console.log('\nTeaching Courses:');
    courses.forEach((course, index) => {
        console.log(`${index + 1}. ${course}`);
    });
}

displayCourses('Front-End React', 'Back-End Development', 'Full Stack', 'Advanced JavaScript');

// Arrow Functions
const calculateExperience = (startYear) => {
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
};

console.log('\nYears of Experience:', calculateExperience(2018));

// ========================================
// PART 2: PROMISES
// ========================================

console.log('\n========== PROMISES DEMO ==========');

// Creating a Promise
function fetchStudentData(studentId) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching student ${studentId}...`);
        
        setTimeout(() => {
            if (studentId > 0) {
                const student = {
                    id: studentId,
                    name: `Student ${studentId}`,
                    course: 'Front-End React Development',
                    instructor: 'Saad Hassan Saad'
                };
                resolve(student);
            } else {
                reject(new Error('Invalid student ID'));
            }
        }, 1000);
    });
}

// Using Promises with .then() and .catch()
console.log('\n--- Promise Example 1: Basic Usage ---');
fetchStudentData(1)
    .then(student => {
        console.log('Student found:', student.name);
        console.log('Enrolled in:', student.course);
        return student;
    })
    .then(student => {
        console.log('Instructor:', student.instructor);
    })
    .catch(error => {
        console.log('Error:', error.message);
    });

// Promise Chaining
function enrollStudent(student) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ ...student, enrolled: true, enrollmentDate: new Date() });
        }, 500);
    });
}

console.log('\n--- Promise Example 2: Chaining ---');
fetchStudentData(2)
    .then(student => {
        console.log('Processing student:', student.name);
        return enrollStudent(student);
    })
    .then(enrolledStudent => {
        console.log('Enrollment complete:', enrolledStudent);
    })
    .catch(error => {
        console.log('Enrollment failed:', error.message);
    });

// Promise.all() - Multiple Promises
console.log('\n--- Promise Example 3: Promise.all() ---');
function fetchCourseData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                name: 'Front-End React Development',
                duration: '3 months',
                instructor: 'Saad Hassan Saad'
            });
        }, 800);
    });
}

Promise.all([fetchStudentData(3), fetchCourseData()])
    .then(([student, course]) => {
        console.log('Student:', student.name);
        console.log('Course:', course.name);
        console.log('Duration:', course.duration);
    })
    .catch(error => {
        console.log('Failed to fetch data:', error.message);
    });

// Promise.race()
console.log('\n--- Promise Example 4: Promise.race() ---');
function fastFetch() {
    return new Promise(resolve => setTimeout(() => resolve('Fast Response'), 500));
}

function slowFetch() {
    return new Promise(resolve => setTimeout(() => resolve('Slow Response'), 1500));
}

Promise.race([fastFetch(), slowFetch()])
    .then(result => {
        console.log('First response:', result);
    });

// Error Handling with Promises
console.log('\n--- Promise Example 5: Error Handling ---');
function riskyOperation() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if (random > 0.5) {
                resolve('Operation successful!');
            } else {
                reject(new Error('Operation failed randomly'));
            }
        }, 300);
    });
}

riskyOperation()
    .then(result => console.log('Result:', result))
    .catch(error => console.log('Caught error:', error.message))
    .finally(() => console.log('Operation completed'));

// ========================================
// PART 3: ASYNC/AWAIT
// ========================================

console.log('\n========== ASYNC/AWAIT DEMO ==========');

// Basic Async/Await
async function getStudentWithAsync(studentId) {
    try {
        console.log('\n--- Async/Await Example 1: Basic Usage ---');
        const student = await fetchStudentData(studentId);
        console.log('Got student:', student.name);
        console.log('Course:', student.course);
        return student;
    } catch (error) {
        console.log('Error:', error.message);
        return null;
    }
}

// Sequential vs Parallel Operations
async function sequentialOperations() {
    console.log('\n--- Async/Await Example 2: Sequential ---');
    console.log('Starting sequential operations...');
    const start = Date.now();
    
    const student1 = await fetchStudentData(4);
    const student2 = await fetchStudentData(5);
    
    const duration = Date.now() - start;
    console.log('Sequential complete:', student1.name, student2.name);
    console.log('Duration:', duration, 'ms');
}

async function parallelOperations() {
    console.log('\n--- Async/Await Example 3: Parallel ---');
    console.log('Starting parallel operations...');
    const start = Date.now();
    
    const [student1, student2] = await Promise.all([
        fetchStudentData(6),
        fetchStudentData(7)
    ]);
    
    const duration = Date.now() - start;
    console.log('Parallel complete:', student1.name, student2.name);
    console.log('Duration:', duration, 'ms');
}

// Error Handling with Try/Catch
async function handleMultipleStudents(studentIds) {
    console.log('\n--- Async/Await Example 4: Error Handling ---');
    const results = [];
    
    for (const studentId of studentIds) {
        try {
            const student = await fetchStudentData(studentId);
            results.push({ success: true, student });
        } catch (error) {
            results.push({ success: false, error: error.message });
        }
    }
    
    return results;
}

async function processStudents() {
    const studentIds = [8, -1, 9];
    const results = await handleMultipleStudents(studentIds);
    
    results.forEach((result, index) => {
        if (result.success) {
            console.log(`Student ${index + 1}: ${result.student.name}`);
        } else {
            console.log(`Student ${index + 1}: Error - ${result.error}`);
        }
    });
}

// Async Arrow Function
const fetchAndProcess = async (studentId) => {
    try {
        const student = await fetchStudentData(studentId);
        return {
            ...student,
            processed: true,
            processedBy: 'Saad Hassan Saad',
            timestamp: new Date()
        };
    } catch (error) {
        throw new Error(`Processing failed: ${error.message}`);
    }
};

// Complete Async Example
async function demonstrateAsync() {
    console.log('\n--- Async/Await Example 5: Complete Flow ---');
    
    try {
        // Single operation
        const processed = await fetchAndProcess(10);
        console.log('Processed student:', processed.name);
        console.log('Processed by:', processed.processedBy);
        
        // Multiple operations
        const students = await Promise.all([
            fetchAndProcess(11),
            fetchAndProcess(12)
        ]);
        
        console.log('All processed students:');
        students.forEach(s => console.log(`- ${s.name}`));
        
    } catch (error) {
        console.log('Error in async demo:', error.message);
    }
}

// ========================================
// PRACTICAL EXAMPLE: Student Management System
// ========================================

console.log('\n========== PRACTICAL EXAMPLE ==========');

class StudentManagementSystem {
    constructor(instructorName) {
        this.students = [];
        this.instructorName = instructorName;
    }
    
    async addStudent(name, email) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!name || !email) {
                    reject(new Error('Name and email are required'));
                } else if (!email.includes('@')) {
                    reject(new Error('Invalid email format'));
                } else {
                    const student = {
                        id: Date.now() + Math.random(),
                        name,
                        email,
                        instructor: this.instructorName,
                        enrolledAt: new Date()
                    };
                    this.students.push(student);
                    resolve(student);
                }
            }, 300);
        });
    }
    
    async findStudent(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const student = this.students.find(s => s.id === id);
                if (student) {
                    resolve(student);
                } else {
                    reject(new Error('Student not found'));
                }
            }, 200);
        });
    }
    
    async getAllStudents() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([...this.students]);
            }, 100);
        });
    }
}

// Main execution function
async function runCompleteDemo() {
    console.log('\n--- Complete System Demo ---');
    const system = new StudentManagementSystem('Saad Hassan Saad');
    
    try {
        // Add students
        console.log('Adding students...');
        const student1 = await system.addStudent('Ahmed Ali', 'ahmed@example.com');
        const student2 = await system.addStudent('Sarah Mohamed', 'sarah@example.com');
        
        console.log(`Students added: ${student1.name}, ${student2.name}`);
        console.log(`Instructor: ${student1.instructor}`);
        
        // Get all students
        const allStudents = await system.getAllStudents();
        console.log(`\nTotal students: ${allStudents.length}`);
        
        // Find specific student
        const foundStudent = await system.findStudent(student1.id);
        console.log(`Found student: ${foundStudent.name} (${foundStudent.email})`);
        
    } catch (error) {
        console.log('System error:', error.message);
    }
}

// ========================================
// EXECUTE ALL EXAMPLES
// ========================================

setTimeout(async () => {
    await getStudentWithAsync(1);
    await sequentialOperations();
    await parallelOperations();
    await processStudents();
    await demonstrateAsync();
    await runCompleteDemo();
    
    console.log('\n========================================');
    console.log('Session Complete!');
    console.log('Instructor: Saad Hassan Saad');
    console.log('Academy of Digital Arts Egypt');
    console.log('========================================');
}, 2000);

// ========================================
// KEY CONCEPTS SUMMARY
// ========================================

/*
1. ES6+ FEATURES:
   - Template literals: `Hello ${name}`
   - Destructuring: const { name, age } = person
   - Spread operator: { ...obj1, ...obj2 }
   - Rest parameters: function(...args)
   - Arrow functions: const fn = () => {}

2. PROMISES:
   - new Promise((resolve, reject) => {})
   - .then() for success
   - .catch() for errors
   - .finally() for cleanup
   - Promise.all() for multiple promises
   - Promise.race() for first completion

3. ASYNC/AWAIT:
   - async function always returns Promise
   - await pauses execution
   - try/catch for error handling
   - Cleaner than .then() chains
   - Sequential vs Parallel execution

4. BEST PRACTICES:
   - Always handle errors
   - Use parallel operations when possible
   - Avoid callback hell
   - Keep code readable and maintainable
*/