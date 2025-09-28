// ============================================
// JavaScript Session 2 - Student Task Solution
// Academy of Digital Arts Egypt
// ============================================

// STEP 1: Create Student Data and Basic Conditionals
// ============================================

console.log("=== JavaScript Session 2: Conditionals and Loops ===");
console.log("Instructor: Saad Hassan Saad - Head of Software Department, ADA Egypt");
console.log("\n");

// Create student data array with objects
const students = [
    {
        name: "Ahmed Ali Mohamed",
        scores: [85, 92, 78, 88, 91],
        isActive: true
    },
    {
        name: "Fatma Hassan Ibrahim",
        scores: [95, 89, 93, 97, 90],
        isActive: true
    },
    {
        name: "Omar Saad Mahmoud",
        scores: [65, 58, 72, 69, 63],
        isActive: false
    },
    {
        name: "Nour Ahmed Khaled",
        scores: [78, 82, 75, 80, 85],
        isActive: true
    },
    {
        name: "Youssef Mohamed Ali",
        scores: [45, 52, 38, 48, 55],
        isActive: true
    }
];

console.log("=== STEP 1: Student Data and Basic Conditionals ===");

// Process each student with basic conditionals
for (let i = 0; i < students.length; i++) {
    const student = students[i];
    
    console.log(`\nProcessing student: ${student.name}`);
    
    // Check if student is active before processing
    if (student.isActive === true) {
        console.log(`${student.name} is active - processing grades...`);
        
        // Calculate average score using for loop
        let sum = 0;
        for (let j = 0; j < student.scores.length; j++) {
            sum += student.scores[j];
        }
        const average = sum / student.scores.length;
        
        console.log(`Average score: ${average.toFixed(2)}`);
        
        // Determine if student needs extra help (average < 70)
        if (average < 70) {
            console.log(`*** ${student.name} needs extra help (average below 70) ***`);
        } else if (average >= 70 && average < 80) {
            console.log(`${student.name} is performing adequately`);
        } else {
            console.log(`${student.name} is performing well`);
        }
    } else {
        console.log(`${student.name} is not active - skipping processing`);
    }
}

console.log("\n");

// ============================================
// STEP 2: Implement Grade Calculation with Switch
// ============================================

console.log("=== STEP 2: Grade Calculation with Switch ===");

// Function to get letter grade using switch statement
function getLetterGrade(average) {
    // Round average to nearest integer for switch evaluation
    const roundedAverage = Math.round(average);
    
    // Use switch with ranges by dividing by 10
    switch (Math.floor(roundedAverage / 10)) {
        case 10: // 100
        case 9:  // 90-99
            return 'A';
        case 8:  // 80-89
            return 'B';
        case 7:  // 70-79
            return 'C';
        case 6:  // 60-69
            return 'D';
        default: // Below 60
            return 'F';
    }
}

// Process students using for...of loop
for (const student of students) {
    if (student.isActive) {
        console.log(`\n--- ${student.name} Grade Report ---`);
        console.log(`Scores: ${student.scores.join(", ")}`);
        
        // Calculate average using for loop
        let totalScore = 0;
        for (let i = 0; i < student.scores.length; i++) {
            totalScore += student.scores[i];
        }
        const average = totalScore / student.scores.length;
        
        // Get letter grade using switch statement
        const letterGrade = getLetterGrade(average);
        
        console.log(`Average: ${average.toFixed(2)}`);
        console.log(`Letter Grade: ${letterGrade}`);
        
        // Add the calculated values to student object for later use
        student.average = average;
        student.letterGrade = letterGrade;
    }
}

console.log("\n");

// ============================================
// STEP 3: Add Interactive Features with While Loop
// ============================================

console.log("=== STEP 3: Interactive Menu System ===");

// Simulate menu system using while loop and switch
let menuRunning = true;
let menuChoice = 1; // Simulate user choices

// Menu options simulation array
const simulatedChoices = [1, 2, 3, 4]; // show grades, add student, statistics, exit
let choiceIndex = 0;

while (menuRunning && choiceIndex < simulatedChoices.length) {
    // Display menu
    console.log("\n--- Grade Management System Menu ---");
    console.log("1. Show All Grades");
    console.log("2. Add New Student");
    console.log("3. Show Statistics");
    console.log("4. Exit");
    
    // Get simulated user choice
    menuChoice = simulatedChoices[choiceIndex];
    console.log(`Selected option: ${menuChoice}`);
    
    // Input validation using do...while
    let validChoice = false;
    do {
        if (menuChoice >= 1 && menuChoice <= 4) {
            validChoice = true;
        } else {
            console.log("Invalid choice! Please select 1-4.");
            validChoice = false;
        }
    } while (!validChoice && menuChoice < 1 || menuChoice > 4);
    
    // Process menu choice using switch
    switch (menuChoice) {
        case 1:
            console.log("\n=== All Student Grades ===");
            for (const student of students) {
                if (student.isActive && student.average) {
                    console.log(`${student.name}: ${student.average.toFixed(2)} (${student.letterGrade})`);
                }
            }
            break;
            
        case 2:
            console.log("\n=== Adding New Student ===");
            const newStudent = {
                name: "Saad Hassan Saad Jr.",
                scores: [88, 92, 85, 90, 87],
                isActive: true
            };
            
            // Calculate average for new student
            let newSum = 0;
            for (let score of newStudent.scores) {
                newSum += score;
            }
            newStudent.average = newSum / newStudent.scores.length;
            newStudent.letterGrade = getLetterGrade(newStudent.average);
            
            students.push(newStudent);
            console.log(`Added: ${newStudent.name} with average ${newStudent.average.toFixed(2)} (${newStudent.letterGrade})`);
            break;
            
        case 3:
            console.log("\n=== Class Statistics ===");
            // This will be implemented in Step 4
            break;
            
        case 4:
            console.log("\nExiting Grade Management System...");
            menuRunning = false;
            break;
            
        default:
            console.log("Invalid selection!");
            break;
    }
    
    choiceIndex++;
}

console.log("\n");

// ============================================
// STEP 4: Generate Statistics Report
// ============================================

console.log("=== STEP 4: Statistics Report ===");

// Calculate class statistics
let activeStudents = [];
let totalGrades = 0;
let gradeCount = 0;

// Use for...of to collect active students
for (const student of students) {
    if (student.isActive && student.average) {
        activeStudents.push(student);
        totalGrades += student.average;
        gradeCount++;
    }
}

console.log("\n--- Individual Student Details (using for...in) ---");
// Use for...in to display student properties
for (let i = 0; i < activeStudents.length; i++) {
    const student = activeStudents[i];
    console.log(`\nStudent ${i + 1}:`);
    
    // Use for...in to iterate through object properties
    for (const property in student) {
        if (student.hasOwnProperty(property)) {
            if (property === "scores") {
                console.log(`  ${property}: [${student[property].join(", ")}]`);
            } else if (property === "average") {
                console.log(`  ${property}: ${student[property].toFixed(2)}`);
            } else {
                console.log(`  ${property}: ${student[property]}`);
            }
        }
    }
}

// Calculate class statistics
console.log("\n--- Class Statistics Report ---");
console.log(`Total Active Students: ${activeStudents.length}`);

if (gradeCount > 0) {
    const classAverage = totalGrades / gradeCount;
    console.log(`Class Average: ${classAverage.toFixed(2)}`);
    
    // Count students by grade levels using comparison operators
    let gradeA = 0, gradeB = 0, gradeC = 0, gradeD = 0, gradeF = 0;
    let passCount = 0;
    
    for (const student of activeStudents) {
        // Use comparison operators to count grade levels
        if (student.average >= 90) {
            gradeA++;
        } else if (student.average >= 80) {
            gradeB++;
        } else if (student.average >= 70) {
            gradeC++;
        } else if (student.average >= 60) {
            gradeD++;
        } else {
            gradeF++;
        }
        
        // Count passing students (>= 60)
        if (student.average >= 60) {
            passCount++;
        }
    }
    
    // Calculate pass rate
    const passRate = (passCount / gradeCount) * 100;
    
    console.log("\n--- Grade Distribution ---");
    console.log(`A grades (90-100): ${gradeA} students`);
    console.log(`B grades (80-89): ${gradeB} students`);
    console.log(`C grades (70-79): ${gradeC} students`);
    console.log(`D grades (60-69): ${gradeD} students`);
    console.log(`F grades (below 60): ${gradeF} students`);
    
    console.log(`\nPass Rate: ${passRate.toFixed(2)}%`);
    
    // Conditional formatting based on performance
    if (passRate >= 90) {
        console.log("EXCELLENT class performance!");
    } else if (passRate >= 80) {
        console.log("GOOD class performance");
    } else if (passRate >= 70) {
        console.log("SATISFACTORY class performance");
    } else {
        console.log("Class needs improvement - consider additional support");
    }
    
    // Find highest and lowest performers
    let highestScore = 0;
    let lowestScore = 100;
    let topPerformer = "";
    let needsHelp = "";
    
    for (const student of activeStudents) {
        if (student.average > highestScore) {
            highestScore = student.average;
            topPerformer = student.name;
        }
        if (student.average < lowestScore) {
            lowestScore = student.average;
            needsHelp = student.name;
        }
    }
    
    console.log("\n--- Performance Highlights ---");
    console.log(`Top Performer: ${topPerformer} (${highestScore.toFixed(2)})`);
    console.log(`Needs Most Support: ${needsHelp} (${lowestScore.toFixed(2)})`);
}

// ============================================
// BONUS: Additional Examples and Demonstrations
// ============================================

console.log("\n=== BONUS: Advanced Conditionals and Loops ===");

// Demonstrate logical operators
console.log("\n--- Logical Operators Examples ---");
const instructorAge = 28;
const hasExperience = true;
const isHeadOfDepartment = true;

// AND operator
if (instructorAge >= 25 && hasExperience) {
    console.log("Saad is qualified to be an instructor (age >= 25 AND has experience)");
}

// OR operator
if (instructorAge >= 30 || isHeadOfDepartment) {
    console.log("Saad can lead advanced courses (age >= 30 OR is department head)");
}

// NOT operator
if (!false) {
    console.log("Saad is available for teaching (NOT busy)");
}

// Complex logical expressions
if ((instructorAge >= 25 && hasExperience) || isHeadOfDepartment) {
    console.log("Saad meets all leadership criteria");
}

// Nested loops example
console.log("\n--- Nested Loops: Course Schedule ---");
const courses = ["HTML/CSS", "JavaScript", "React", "Node.js"];
const timeSlots = ["Morning", "Afternoon"];

for (let i = 0; i < courses.length; i++) {
    console.log(`\nCourse: ${courses[i]}`);
    for (let j = 0; j < timeSlots.length; j++) {
        console.log(`  Available in: ${timeSlots[j]}`);
    }
}

// Different loop types comparison
console.log("\n--- Loop Types Comparison ---");
const technologies = ["HTML", "CSS", "JavaScript", "React", "MongoDB"];

console.log("Using traditional for loop:");
for (let i = 0; i < technologies.length; i++) {
    console.log(`${i + 1}. ${technologies[i]}`);
}

console.log("\nUsing for...of loop (for arrays):");
for (const tech of technologies) {
    console.log(`- ${tech}`);
}

console.log("\nUsing while loop:");
let index = 0;
while (index < technologies.length) {
    console.log(`While loop: ${technologies[index]}`);
    index++;
}

console.log("\nUsing do...while loop:");
let doIndex = 0;
do {
    console.log(`Do-while: ${technologies[doIndex]}`);
    doIndex++;
} while (doIndex < 3); // Only show first 3

// Object iteration with for...in
console.log("\n--- Object Iteration with for...in ---");
const instructorProfile = {
    name: "Saad Hassan Saad",
    age: 28,
    position: "Full Stack Instructor",
    department: "Head of Software Department",
    specializations: ["JavaScript", "React", "Node.js", "MongoDB"]
};

console.log("Instructor Profile:");
for (const key in instructorProfile) {
    if (instructorProfile.hasOwnProperty(key)) {
        const value = instructorProfile[key];
        if (Array.isArray(value)) {
            console.log(`${key}: [${value.join(", ")}]`);
        } else {
            console.log(`${key}: ${value}`);
        }
    }
}

console.log("\n--- Program Execution Completed Successfully ---");
console.log("All JavaScript conditionals and loops concepts demonstrated!");
console.log("Ready for the next session on Functions and Scope!");