// ============================================
// JavaScript Session 1 - Student Task Solution
// Academy of Digital Arts Egypt
// ============================================

// STEP 1: Create Personal Information Variables
// ============================================

// Using const for values that won't change
const fullName = "Saad Hassan Saad";
const favoriteColor = "Black";

// Using let for values that might change
let age = 28;
let isStudent = false; // Graduated, now working as instructor
let graduationYear = null; // Already graduated

// Array of hobbies (using const because we're not reassigning the array itself)
const hobbies = ["Teaching", "Full Stack Development", "Reading Tech Books", "Mentoring Students", "Code Review"];

console.log("=== STEP 1: Personal Information Variables ===");
console.log("Full Name:", fullName);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Favorite Color:", favoriteColor);
console.log("Graduation Year:", graduationYear);
console.log("Hobbies:", hobbies);
console.log("\n");

// ============================================
// STEP 2: Create Student Profile Object
// ============================================

const studentProfile = {
    name: "Saad Hassan Saad",
    major: "Computer Science",
    gpa: null, // Already graduated
    university: "Computer Science Graduate",
    isEnrolled: false,
    // Current professional information
    currentPosition: "Full Stack Web Development Instructor",
    department: "Head of Software Department",
    organization: "Academy of Digital Arts Egypt",
    // Nested object for contact information
    contactInfo: {
        email: "saad.hassan@adaegypt.com",
        phone: "+20 10 1234 5678",
        address: {
            city: "Cairo",
            country: "Egypt"
        }
    },
    // Professional information object
    professionalInfo: {
        yearsOfExperience: 5,
        specializations: ["Full Stack Development", "JavaScript", "React", "Node.js", "MongoDB"],
        currentRole: "Instructor & Department Head",
        teachingSubjects: ["HTML/CSS", "JavaScript", "React", "Node.js", "Database Management"]
    }
};

console.log("=== STEP 2: Student Profile Object ===");
console.log("Profile:", studentProfile);
console.log("Name:", studentProfile.name);
console.log("Education:", studentProfile.major);
console.log("Current Position:", studentProfile.currentPosition);
console.log("Department Role:", studentProfile.department);
console.log("Organization:", studentProfile.organization);
console.log("Email:", studentProfile.contactInfo.email);
console.log("Phone:", studentProfile.contactInfo.phone);
console.log("City:", studentProfile.contactInfo.address.city);
console.log("Specializations:", studentProfile.professionalInfo.specializations);
console.log("\n");

// ============================================
// STEP 3: Practice Type Conversion and Checking
// ============================================

console.log("=== STEP 3: Type Conversion and Checking ===");

// Convert age to string using String()
const ageAsString = String(age);
console.log("Age converted to string:", ageAsString);
console.log("Type of ageAsString:", typeof ageAsString);

// Convert a string number to actual number using Number()
const stringNumber = "35";
const convertedNumber = Number(stringNumber);
console.log("String '35' converted to number:", convertedNumber);
console.log("Type of convertedNumber:", typeof convertedNumber);

// Convert string with invalid number
const invalidString = "ADA2025";
const invalidNumber = Number(invalidString);
console.log("Invalid string 'ADA2025' converted to number:", invalidNumber); // NaN

// Using typeof operator on all variables
console.log("\n--- typeof operations on all variables ---");
console.log("typeof fullName:", typeof fullName);
console.log("typeof age:", typeof age);
console.log("typeof isStudent:", typeof isStudent);
console.log("typeof favoriteColor:", typeof favoriteColor);
console.log("typeof graduationYear:", typeof graduationYear);
console.log("typeof hobbies:", typeof hobbies); // object (arrays are objects in JS)
console.log("typeof studentProfile:", typeof studentProfile);

// Demonstrating null and undefined
let undefinedVariable;
let nullVariable = null;
console.log("typeof undefinedVariable:", typeof undefinedVariable); // undefined
console.log("typeof nullVariable:", typeof nullVariable); // object (this is a known JS quirk)

// Boolean conversions from different values
console.log("\n--- Boolean Conversions ---");

// Truthy values
console.log("Boolean(1):", Boolean(1)); // true
console.log("Boolean('Instructor'):", Boolean("Instructor")); // true
console.log("Boolean([1,2,3]):", Boolean([1,2,3])); // true
console.log("Boolean({name: 'Saad'}):", Boolean({name: 'Saad'})); // true

// Falsy values
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean(''):", Boolean("")); // false
console.log("Boolean(null):", Boolean(null)); // false
console.log("Boolean(undefined):", Boolean(undefined)); // false
console.log("Boolean(NaN):", Boolean(NaN)); // false

console.log("\n");

// ============================================
// STEP 4: Display All Information with Descriptive Messages
// ============================================

console.log("=== STEP 4: Complete Information Display ===");

// Display personal information with nice formatting
console.log("PERSONAL INFORMATION");
console.log("================================");
console.log(`Name: ${fullName} (Type: ${typeof fullName})`);
console.log(`Age: ${age} years old (Type: ${typeof age})`);
console.log(`Student Status: ${isStudent ? 'Currently a student' : 'Professional Instructor'} (Type: ${typeof isStudent})`);
console.log(`Favorite Color: ${favoriteColor} (Type: ${typeof favoriteColor})`);
console.log(`Graduation Status: ${graduationYear === null ? 'Already graduated from Computer Science' : graduationYear} (Type: ${typeof graduationYear})`);
console.log(`Professional Interests: ${hobbies.join(", ")} (Type: ${typeof hobbies}, Length: ${hobbies.length})`);

console.log("\nPROFESSIONAL PROFILE");
console.log("================================");
console.log(`Organization: ${studentProfile.organization}`);
console.log(`Position: ${studentProfile.currentPosition}`);
console.log(`Department Role: ${studentProfile.department}`);
console.log(`Education Background: ${studentProfile.major}`);
console.log(`Years of Experience: ${studentProfile.professionalInfo.yearsOfExperience}`);
console.log(`Current Role: ${studentProfile.professionalInfo.currentRole}`);

console.log("\nTECHNICAL SPECIALIZATIONS");
console.log("================================");
console.log(`Main Specializations: ${studentProfile.professionalInfo.specializations.join(", ")}`);
console.log(`Teaching Subjects: ${studentProfile.professionalInfo.teachingSubjects.join(", ")}`);

console.log("\nCONTACT INFORMATION");
console.log("================================");
console.log(`Email: ${studentProfile.contactInfo.email}`);
console.log(`Phone: ${studentProfile.contactInfo.phone}`);
console.log(`Location: ${studentProfile.contactInfo.address.city}, ${studentProfile.contactInfo.address.country}`);

console.log("\nTYPE CONVERSION EXAMPLES");
console.log("================================");
console.log(`Original age: ${age} (${typeof age})`);
console.log(`Age as string: "${ageAsString}" (${typeof ageAsString})`);
console.log(`String "35" as number: ${convertedNumber} (${typeof convertedNumber})`);
console.log(`Invalid conversion "ADA2025": ${invalidNumber} (${typeof invalidNumber})`);

// Additional demonstrations
console.log("\nADDITIONAL DATA TYPE EXAMPLES");
console.log("================================");

// Working with different data types
const pi = 3.14159;
const scientificNumber = 1.23e-4;
const booleanTrue = true;
const booleanFalse = false;
const emptyString = "";
const whitespaceString = "   ";

console.log(`Pi: ${pi} (${typeof pi})`);
console.log(`Scientific notation: ${scientificNumber} (${typeof scientificNumber})`);
console.log(`Boolean true: ${booleanTrue} (${typeof booleanTrue})`);
console.log(`Boolean false: ${booleanFalse} (${typeof booleanFalse})`);
console.log(`Empty string: "${emptyString}" (${typeof emptyString})`);
console.log(`Whitespace string: "${whitespaceString}" (${typeof whitespaceString})`);

// Array operations
console.log("\nARRAY OPERATIONS");
console.log("================================");
console.log(`First professional interest: ${hobbies[0]}`);
console.log(`Last professional interest: ${hobbies[hobbies.length - 1]}`);
console.log(`Total interests: ${hobbies.length}`);

// Object property access
console.log("\nOBJECT PROPERTY ACCESS");
console.log("================================");
console.log("Dot notation - Name:", studentProfile.name);
console.log("Bracket notation - Position:", studentProfile["currentPosition"]);
console.log("Nested access - Email:", studentProfile.contactInfo.email);

console.log("\nPROGRAM EXECUTION COMPLETED SUCCESSFULLY!");

// ============================================
// BONUS: Additional Examples and Edge Cases
// ============================================

console.log("\nBONUS: Advanced Concepts");
console.log("================================");

// Template literals vs concatenation
const greeting1 = "Hello, I'm " + fullName + "! I'm " + age + " years old and work as an instructor.";
const greeting2 = `Hello, I'm ${fullName}! I'm ${age} years old and work as an instructor.`;

console.log("String concatenation:", greeting1);
console.log("Template literal:", greeting2);

// Checking if variables are defined
console.log("Is graduationYear defined?", graduationYear !== undefined);
console.log("Is undefinedVariable defined?", undefinedVariable !== undefined);

// Array methods demonstration
const experienceYears = [2019, 2020, 2021, 2022, 2023];
console.log("Teaching experience years:", experienceYears);
console.log("Years as string:", experienceYears.join(" | "));

// Object keys and values
console.log("Professional profile keys:", Object.keys(studentProfile.professionalInfo));
console.log("Contact info values:", Object.values(studentProfile.contactInfo));

console.log("\nAll JavaScript fundamentals demonstrated successfully!");