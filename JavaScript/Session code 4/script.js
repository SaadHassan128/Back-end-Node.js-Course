console.log("=== JavaScript Arrays & ES6 Features Complete Guide ===");
console.log("Instructor: Saad Hassan Saad - ADA Egypt");
console.log("Session 4: Array Operations, Iteration Methods & ES6 Features");

// ========== PART 1: ARRAY OPERATIONS ==========

// Basic array operations for course management
const courses = ["JavaScript", "React", "Node.js"];
const instructors = ["Saad Hassan Saad"];

// Mutating methods (change original array)
console.log("\n=== Mutating Array Methods ===");

// push() - Add elements to end
courses.push("MongoDB", "Express.js");
console.log("After push:", courses);

// pop() - Remove last element
const removedCourse = courses.pop();
console.log("Removed course:", removedCourse);
console.log("Courses after pop:", courses);

// unshift() - Add elements to beginning
courses.unshift("HTML", "CSS");
console.log("After unshift:", courses);

// shift() - Remove first element
const firstCourse = courses.shift();
console.log("First course removed:", firstCourse);
console.log("Courses after shift:", courses);

// splice() - Add/remove elements at any position
const removedItems = courses.splice(2, 1, "Advanced JavaScript");
console.log("Removed with splice:", removedItems);
console.log("Courses after splice:", courses);

// Non-mutating methods (return new array)
console.log("\n=== Non-mutating Array Methods ===");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// slice() - Extract portion of array
const firstThree = numbers.slice(0, 3);
const lastThree = numbers.slice(-3);
console.log("First three numbers:", firstThree);
console.log("Last three numbers:", lastThree);
console.log("Original numbers unchanged:", numbers);

// concat() - Combine arrays
const frontEndSkills = ["HTML", "CSS", "JavaScript"];
const backEndSkills = ["Node.js", "MongoDB", "Express.js"];
const allSkills = frontEndSkills.concat(backEndSkills);
console.log("All skills:", allSkills);

// ========== PART 2: ARRAY ITERATION METHODS ==========

console.log("\n=== Array Iteration Methods ===");

// Sample data for demonstrations
const students = [
    { id: 1, name: "Ahmed Hassan", age: 22, grades: [85, 92, 78, 96], major: "Computer Science" },
    { id: 2, name: "Sarah Mohamed", age: 21, grades: [90, 88, 95, 87], major: "Engineering" },
    { id: 3, name: "Omar Ali", age: 23, grades: [75, 82, 79, 88], major: "Computer Science" }
];

// forEach() - Execute function for each element
console.log("\n--- forEach() Method ---");
students.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name} - ${student.major}`);
});

// map() - Transform elements and return new array
console.log("\n--- map() Method ---");
const studentNames = students.map(student => student.name);
console.log("Student names:", studentNames);

const formattedStudents = students.map(student => ({
    id: student.id,
    fullInfo: `${student.name} (${student.age} years old)`,
    average: student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length
}));
console.log("Formatted students:", formattedStudents);

// filter() - Select elements that meet condition
console.log("\n--- filter() Method ---");
const adultStudents = students.filter(student => student.age >= 22);
console.log("Adult students:", adultStudents);

const csStudents = students.filter(student => student.major === "Computer Science");
console.log("Computer Science students:", csStudents);

// Advanced filtering with grade averages
const excellentStudents = students.filter(student => {
    const average = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
    return average >= 85;
});
console.log("Excellent students (average >= 85):", excellentStudents);

// reduce() - Accumulate to single value
console.log("\n--- reduce() Method ---");
const allGrades = students.reduce((acc, student) => acc.concat(student.grades), []);
console.log("All grades combined:", allGrades);

const totalStudents = students.reduce((count, student) => count + 1, 0);
console.log("Total students:", totalStudents);

// Group students by major
const studentsByMajor = students.reduce((groups, student) => {
    const major = student.major;
    if (!groups[major]) {
        groups[major] = [];
    }
    groups[major].push(student);
    return groups;
}, {});
console.log("Students grouped by major:", studentsByMajor);

// ========== PART 3: ES6 FEATURES ==========

console.log("\n=== ES6 Features ===");

// Template Literals
console.log("\n--- Template Literals ---");
const instructorName = "Saad Hassan Saad";
const instructorAge = 28;
const department = "Software Department";
const favoriteColor = "Black";

// Basic template literal
const introduction = `Hello, I'm ${instructorName}, a ${instructorAge}-year-old instructor at ADA Egypt.`;
console.log(introduction);

// Multi-line template literal
const courseWelcome = `
Welcome to JavaScript Course!

Instructor: ${instructorName}
Department: ${department}
Favorite Color: ${favoriteColor}

Course Details:
- Duration: 3 months
- Level: Beginner to Advanced
- Focus: Full Stack Development

Looking forward to teaching you!
`;
console.log(courseWelcome);

// Template literal with expressions
const instructor = { name: "Saad Hassan Saad", isHeadOfDepartment: true, experience: 5 };
const statusMessage = `Instructor ${instructor.name} is ${instructor.isHeadOfDepartment ? 'Head of Department' : 'regular instructor'} with ${instructor.experience > 3 ? 'extensive' : 'good'} experience.`;
console.log(statusMessage);

// Destructuring
console.log("\n--- Destructuring ---");

// Array destructuring
const technologies = ["JavaScript", "React", "Node.js", "MongoDB"];
const [primary, secondary, ...otherTech] = technologies;
console.log("Primary tech:", primary);
console.log("Secondary tech:", secondary);
console.log("Other technologies:", otherTech);

// Object destructuring
const instructorProfile = {
    id: 1,
    name: "Saad Hassan Saad",
    age: 28,
    position: "Head of Software Department",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    contact: {
        email: "saad@adaegypt.com",
        phone: "123-456-7890"
    }
};

// Basic destructuring
const { id, name, age } = instructorProfile;
console.log("Basic destructuring:", { id, name, age });

// Renaming variables
const { name: fullName, position: jobTitle } = instructorProfile;
console.log("Renamed variables:", { fullName, jobTitle });

// Nested destructuring
const { contact: { email, phone } } = instructorProfile;
console.log("Contact info:", { email, phone });

// Destructuring with default values
const { country = "Egypt", favoriteLanguage = "JavaScript" } = instructorProfile;
console.log("With defaults:", { country, favoriteLanguage });

// Function parameter destructuring
function displayStudentInfo({ name, age, major, grades }) {
    const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
    return `Student: ${name}, Age: ${age}, Major: ${major}, Average: ${average.toFixed(2)}`;
}

console.log("Destructured function:", displayStudentInfo(students[0]));

// Spread & Rest Operators
console.log("\n--- Spread & Rest Operators ---");

// Spread operator with arrays
const basicSkills = ["HTML", "CSS"];
const advancedSkills = ["React", "Node.js"];
const allTechSkills = [...basicSkills, "JavaScript", ...advancedSkills];
console.log("Combined skills:", allTechSkills);

// Spread operator with objects
const basicInfo = { name: "Saad Hassan Saad", age: 28 };
const professionalInfo = { position: "Head of Software Department", department: "ADA Egypt" };
const completeProfile = { ...basicInfo, ...professionalInfo, favoriteColor: "Black" };
console.log("Complete profile:", completeProfile);

// Rest operator in functions
function calculateAverage(...grades) {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return grades.length > 0 ? sum / grades.length : 0;
}

console.log("Average of grades:", calculateAverage(85, 92, 78, 96, 88));

// Rest with other parameters
function createCourseAnnouncement(instructor, ...courseTopics) {
    return `Instructor ${instructor} will cover: ${courseTopics.join(", ")}`;
}

console.log(createCourseAnnouncement("Saad Hassan Saad", "Arrays", "Objects", "Functions", "ES6"));

// ========== PART 4: COMPLEX DATA PROCESSING ==========

console.log("\n=== Complex Data Processing ===");

// Method chaining for data processing
const courseData = [
    { id: 1, title: "JavaScript Basics", students: 25, rating: 4.8, instructor: "Saad Hassan Saad" },
    { id: 2, title: "React Fundamentals", students: 20, rating: 4.9, instructor: "Saad Hassan Saad" },
    { id: 3, title: "Node.js Backend", students: 18, rating: 4.7, instructor: "Saad Hassan Saad" },
    { id: 4, title: "Database Design", students: 15, rating: 4.6, instructor: "Other Instructor" }
];

// Filter, map, and process in one chain
const saadCourses = courseData
    .filter(course => course.instructor === "Saad Hassan Saad")
    .map(course => ({
        title: course.title,
        enrollment: course.students,
        rating: course.rating,
        status: course.rating >= 4.8 ? "Excellent" : "Good"
    }))
    .sort((a, b) => b.rating - a.rating);

console.log("Saad's courses (sorted by rating):", saadCourses);

// Advanced data processing pipeline
const studentAnalytics = students.map(({ id, name, grades, major }) => {
    const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
    const highest = Math.max(...grades);
    const lowest = Math.min(...grades);
    
    return {
        id,
        name,
        major,
        stats: {
            average: Math.round(average * 100) / 100,
            highest,
            lowest,
            range: highest - lowest
        },
        performance: average >= 85 ? "Excellent" : average >= 75 ? "Good" : "Needs Improvement",
        instructor: "Saad Hassan Saad"
    };
});

console.log("Student analytics:", studentAnalytics);

// ========== PART 5: FUNCTIONAL PROGRAMMING CONCEPTS ==========

console.log("\n=== Functional Programming ===");

// Pure functions
const addTax = (price, taxRate = 0.14) => price * (1 + taxRate);
const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

// Function composition
const prices = [19.99, 25.50, 99.99, 45.00];
const finalPrices = prices
    .map(price => addTax(price))
    .map(price => formatCurrency(price));

console.log("Original prices:", prices);
console.log("Final prices with tax:", finalPrices);

// Immutable data operations
const originalSettings = { theme: "light", fontSize: 14, language: "en" };
const userSettings = { 
    ...originalSettings, 
    theme: "dark", 
    fontSize: 16,
    instructor: "Saad Hassan Saad"
};

console.log("Original settings:", originalSettings);
console.log("Updated settings:", userSettings);

// ========== PART 6: PRACTICAL STUDENT MANAGEMENT SYSTEM ==========

console.log("\n=== Student Management System ===");

// Enhanced student data
const courseStudents = [
    { id: 1, name: "Ahmed Hassan", age: 22, grades: [85, 92, 78, 96], major: "Computer Science", instructor: "Saad Hassan Saad" },
    { id: 2, name: "Sarah Mohamed", age: 21, grades: [90, 88, 95, 87], major: "Engineering", instructor: "Saad Hassan Saad" },
    { id: 3, name: "Omar Ali", age: 23, grades: [75, 82, 79, 88], major: "Computer Science", instructor: "Saad Hassan Saad" },
    { id: 4, name: "Layla Ahmed", age: 20, grades: [95, 89, 92, 98], major: "Engineering", instructor: "Saad Hassan Saad" }
];

// Add new student using spread operator
const newStudent = {
    id: 5,
    name: "Youssef Mahmoud",
    age: 22,
    grades: [88, 85, 90, 87],
    major: "Computer Science",
    instructor: "Saad Hassan Saad"
};

const allCourseStudents = [...courseStudents, newStudent];

// Generate comprehensive reports
const generateStudentReport = ({ name, major, grades, instructor }) => {
    const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
    const highest = Math.max(...grades);
    const lowest = Math.min(...grades);
    
    return `
Student Report - Instructor: ${instructor}
Name: ${name}
Major: ${major}
Grades: ${grades.join(", ")}
Average: ${average.toFixed(2)}%
Highest: ${highest}%
Lowest: ${lowest}%
Status: ${average >= 85 ? "Excellent" : average >= 75 ? "Good" : "Needs Improvement"}
Department: Software Department - ADA Egypt
`;
};

// Display all student reports
console.log("=== Individual Student Reports ===");
allCourseStudents.forEach(student => {
    console.log(generateStudentReport(student));
});

// Course statistics
const courseStats = {
    totalStudents: allCourseStudents.length,
    averageAge: allCourseStudents.reduce((sum, student) => sum + student.age, 0) / allCourseStudents.length,
    majorDistribution: allCourseStudents.reduce((dist, student) => {
        dist[student.major] = (dist[student.major] || 0) + 1;
        return dist;
    }, {}),
    instructor: "Saad Hassan Saad",
    department: "Software Department",
    favoriteColor: "Black"
};

console.log("=== Course Statistics ===");
console.log(`Total Students: ${courseStats.totalStudents}`);
console.log(`Average Age: ${courseStats.averageAge.toFixed(1)} years`);
console.log(`Major Distribution:`, courseStats.majorDistribution);
console.log(`Instructor: ${courseStats.instructor}`);
console.log(`Department: ${courseStats.department}`);

// Excellence tracking
const excellenceReport = allCourseStudents
    .map(student => ({
        name: student.name,
        average: student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length
    }))
    .filter(student => student.average >= 85)
    .sort((a, b) => b.average - a.average);

console.log("=== Excellence Report (Students with 85%+ average) ===");
excellenceReport.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name}: ${student.average.toFixed(2)}%`);
});

console.log("\n=== Session Complete ===");
console.log("All array operations and ES6 features demonstrated successfully!");
console.log("Instructor: Saad Hassan Saad - Head of Software Department, ADA Egypt");
console.log("Next session: Objects and Advanced JavaScript Concepts");