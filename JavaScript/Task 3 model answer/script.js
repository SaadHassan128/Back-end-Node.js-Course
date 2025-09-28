// ============================================
// JavaScript Session 3 - Student Task Solution
// Academy of Digital Arts Egypt
// Functions, Scope, and Hoisting
// ============================================

console.log("=== JavaScript Session 3: Functions, Scope, and Hoisting ===");
console.log("Instructor: Saad Hassan Saad - Head of Software Department, ADA Egypt");
console.log("\n");

// ============================================
// STEP 3: Apply Hoisting Concepts (Demonstrating before main code)
// ============================================

console.log("=== STEP 3: Hoisting Concepts Demonstration ===");

// Function declaration hoisting - this works because function declarations are hoisted
console.log("Calling hoistedFunction before declaration:");
hoistedFunction();

// Variable hoisting with var - accessing before declaration
console.log("Accessing varVariable before declaration:", typeof varVariable); // undefined (hoisted but not initialized)

// Let's demonstrate temporal dead zone with let/const (these would cause ReferenceError)
console.log("--- Demonstrating hoisting behavior ---");
console.log("Function declarations are fully hoisted");
console.log("var variables are hoisted but undefined");
console.log("let/const variables exist in temporal dead zone until declaration");

// Function expression hoisting difference
console.log("Trying to call function expression before declaration:");
try {
    // This would cause an error: Cannot access 'functionExpression' before initialization
    // functionExpression();
    console.log("Function expressions are NOT hoisted like function declarations");
} catch (error) {
    console.log("Error:", error.message);
}

console.log("\n");

// ============================================
// STEP 2: Implement Scope Management
// ============================================

console.log("=== STEP 2: Scope Management ===");

// Global variables for application configuration
const MAX_USERS = 100;
const MIN_AGE = 18;
let currentUserCount = 0;

console.log(`Global configuration: MAX_USERS = ${MAX_USERS}, MIN_AGE = ${MIN_AGE}`);

// Function to demonstrate different scope levels
function demonstrateScopes() {
    // Function scope variables
    const functionScopedVar = "I'm in function scope";
    let functionCounter = 0;
    
    console.log("--- Function Scope Demo ---");
    console.log("Inside function - can access global MAX_USERS:", MAX_USERS);
    console.log("Function scoped variable:", functionScopedVar);
    
    // Block scope demonstration
    if (true) {
        // Block scope with let/const
        const blockScopedVar = "I'm in block scope";
        let blockCounter = 5;
        
        console.log("--- Block Scope Demo ---");
        console.log("Inside block - can access function scope:", functionScopedVar);
        console.log("Block scoped variable:", blockScopedVar);
        console.log("Block counter:", blockCounter);
        
        // This modifies the function-scoped variable
        functionCounter = 10;
    }
    
    console.log("After block - function counter was modified:", functionCounter);
    // console.log(blockScopedVar); // This would cause ReferenceError - block scoped
}

// Function closure for private variables
function createUserCounter() {
    // Private variable - only accessible through returned functions
    let privateCount = 0;
    
    return {
        increment: function() {
            privateCount++;
            return privateCount;
        },
        decrement: function() {
            privateCount--;
            return privateCount;
        },
        getCount: function() {
            return privateCount;
        }
    };
}

demonstrateScopes();

const userCounter = createUserCounter();
console.log("--- Closure Demo (Private Variables) ---");
console.log("Initial count:", userCounter.getCount());
console.log("After increment:", userCounter.increment());
console.log("After another increment:", userCounter.increment());
console.log("Current count:", userCounter.getCount());

console.log("\n");

// ============================================
// STEP 1: Create User Functions with Different Types
// ============================================

console.log("=== STEP 1: User Functions with Different Types ===");

// Function Declaration - validateUser (hoisted)
function validateUser(username, email, age) {
    console.log(`Validating user: ${username}`);
    
    if (!username || username.length < 3) {
        return { valid: false, error: "Username must be at least 3 characters" };
    }
    
    if (!email || !email.includes('@')) {
        return { valid: false, error: "Invalid email format" };
    }
    
    if (age < MIN_AGE) {
        return { valid: false, error: `Age must be at least ${MIN_AGE}` };
    }
    
    return { valid: true, message: "User validation successful" };
}

// Function Expression - hashPassword (not hoisted)
const hashPassword = function(password) {
    // Simulate password hashing
    if (!password || password.length < 6) {
        return null;
    }
    
    // Simple hash simulation (not for real use!)
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    
    return `hashed_${Math.abs(hash)}_${password.length}`;
};

// Arrow Functions for filtering and formatting
const filterActiveUsers = (users) => users.filter(user => user.active === true);

const formatUserDisplay = (user) => `${user.name} (${user.email}) - Age: ${user.age}`;

const isAdultUser = (age) => age >= MIN_AGE;

// Function with default parameters
function createUser(name, email, age, role = "user", active = true) {
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        age: age,
        role: role,
        active: active,
        createdBy: "Saad Hassan Saad",
        createdAt: new Date().toISOString()
    };
    
    return newUser;
}

// Function with rest parameters for collecting preferences
function setUserPreferences(userId, ...preferences) {
    console.log(`Setting preferences for user ${userId}:`);
    console.log(`Total preferences: ${preferences.length}`);
    
    const preferenceObj = {};
    preferences.forEach((pref, index) => {
        preferenceObj[`pref_${index + 1}`] = pref;
    });
    
    return {
        userId: userId,
        preferences: preferenceObj,
        count: preferences.length
    };
}

// Test the functions
console.log("--- Function Declarations Test ---");
const validation1 = validateUser("saad", "saad@adaegypt.com", 28);
console.log("Validation result:", validation1);

const validation2 = validateUser("jo", "invalid-email", 16);
console.log("Validation result:", validation2);

console.log("--- Function Expression Test ---");
console.log("Hashed password:", hashPassword("mySecurePassword123"));
console.log("Invalid password:", hashPassword("123"));

console.log("--- Arrow Functions Test ---");
const testUsers = [
    { name: "Ahmed Ali", email: "ahmed@test.com", age: 25, active: true },
    { name: "Sara Mohamed", email: "sara@test.com", age: 22, active: false },
    { name: "Omar Hassan", email: "omar@test.com", age: 30, active: true }
];

const activeUsers = filterActiveUsers(testUsers);
console.log("Active users:", activeUsers.length);
activeUsers.forEach(user => console.log(formatUserDisplay(user)));

console.log("--- Default Parameters Test ---");
const user1 = createUser("Saad Hassan Saad", "saad@adaegypt.com", 28);
const user2 = createUser("Fatma Ahmed", "fatma@test.com", 24, "admin", false);
console.log("User with defaults:", user1);
console.log("User with custom values:", user2);

console.log("--- Rest Parameters Test ---");
const prefs = setUserPreferences(123, "dark-theme", "notifications", "auto-save", "high-contrast");
console.log("User preferences:", prefs);

console.log("\n");

// ============================================
// STEP 4: Build Complete User Management Features
// ============================================

console.log("=== STEP 4: Complete User Management System ===");

// Global user database
let userDatabase = [];

// User registration function with validation
function registerUser(username, email, age, password) {
    console.log(`--- Registering User: ${username} ---`);
    
    // Check if we've reached max users
    if (currentUserCount >= MAX_USERS) {
        return { success: false, error: "Maximum user limit reached" };
    }
    
    // Validate user data
    const validation = validateUser(username, email, age);
    if (!validation.valid) {
        return { success: false, error: validation.error };
    }
    
    // Check if email already exists
    const existingUser = userDatabase.find(user => user.email === email);
    if (existingUser) {
        return { success: false, error: "Email already registered" };
    }
    
    // Hash password and create user
    const hashedPassword = hashPassword(password);
    if (!hashedPassword) {
        return { success: false, error: "Password must be at least 6 characters" };
    }
    
    const newUser = createUser(username, email, age);
    newUser.password = hashedPassword;
    
    userDatabase.push(newUser);
    currentUserCount++;
    
    return { 
        success: true, 
        message: "User registered successfully",
        user: { ...newUser, password: "***hidden***" }
    };
}

// User authentication with multiple parameters
function authenticateUser(email, password, rememberMe = false, loginAttempts = 0) {
    console.log(`--- Authenticating User: ${email} ---`);
    
    if (loginAttempts > 3) {
        return { success: false, error: "Too many login attempts" };
    }
    
    const user = userDatabase.find(u => u.email === email);
    if (!user) {
        return { success: false, error: "User not found" };
    }
    
    const hashedInputPassword = hashPassword(password);
    if (user.password !== hashedInputPassword) {
        return { success: false, error: "Invalid password", attempts: loginAttempts + 1 };
    }
    
    // Update last login
    user.lastLogin = new Date().toISOString();
    
    return {
        success: true,
        message: "Authentication successful",
        user: { ...user, password: "***hidden***" },
        sessionToken: `token_${user.id}_${Date.now()}`,
        rememberMe: rememberMe
    };
}

// User profile updater with return value confirmation
function updateUserProfile(userId, updates) {
    console.log(`--- Updating Profile for User ID: ${userId} ---`);
    
    const userIndex = userDatabase.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        return { success: false, error: "User not found" };
    }
    
    const user = userDatabase[userIndex];
    const originalData = { ...user };
    
    // Apply updates
    Object.keys(updates).forEach(key => {
        if (key !== 'id' && key !== 'password') { // Protect sensitive fields
            user[key] = updates[key];
        }
    });
    
    user.updatedAt = new Date().toISOString();
    user.updatedBy = "Saad Hassan Saad";
    
    return {
        success: true,
        message: "Profile updated successfully",
        changes: updates,
        user: { ...user, password: "***hidden***" }
    };
}

// User search functionality using arrow functions
const searchUsers = (searchTerm, filters = {}) => {
    console.log(`--- Searching Users: "${searchTerm}" ---`);
    
    let results = userDatabase.filter(user => {
        // Text search in name and email
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             user.email.toLowerCase().includes(searchTerm.toLowerCase());
        
        if (!matchesSearch) return false;
        
        // Apply filters
        if (filters.minAge && user.age < filters.minAge) return false;
        if (filters.maxAge && user.age > filters.maxAge) return false;
        if (filters.role && user.role !== filters.role) return false;
        if (filters.active !== undefined && user.active !== filters.active) return false;
        
        return true;
    });
    
    return {
        results: results.map(user => ({ ...user, password: "***hidden***" })),
        count: results.length,
        searchTerm: searchTerm,
        filters: filters
    };
};

// Admin functions with role-based access using scope
function createAdminModule() {
    // Private admin configuration
    const adminConfig = {
        maxLoginAttempts: 5,
        sessionTimeout: 3600000, // 1 hour
        auditLog: []
    };
    
    // Private helper function
    function logAdminAction(action, userId, adminId) {
        adminConfig.auditLog.push({
            action: action,
            userId: userId,
            adminId: adminId,
            timestamp: new Date().toISOString()
        });
    }
    
    // Return public admin functions
    return {
        deleteUser: function(userIdToDelete, adminUserId) {
            console.log(`--- Admin Delete User: ${userIdToDelete} ---`);
            
            const admin = userDatabase.find(u => u.id === adminUserId && u.role === 'admin');
            if (!admin) {
                return { success: false, error: "Unauthorized: Admin access required" };
            }
            
            const userIndex = userDatabase.findIndex(u => u.id === userIdToDelete);
            if (userIndex === -1) {
                return { success: false, error: "User not found" };
            }
            
            const deletedUser = userDatabase.splice(userIndex, 1)[0];
            currentUserCount--;
            
            logAdminAction('DELETE_USER', userIdToDelete, adminUserId);
            
            return {
                success: true,
                message: "User deleted successfully",
                deletedUser: { ...deletedUser, password: "***hidden***" }
            };
        },
        
        getUserStats: function(adminUserId) {
            const admin = userDatabase.find(u => u.id === adminUserId && u.role === 'admin');
            if (!admin) {
                return { success: false, error: "Unauthorized: Admin access required" };
            }
            
            return {
                success: true,
                stats: {
                    totalUsers: currentUserCount,
                    maxUsers: MAX_USERS,
                    activeUsers: userDatabase.filter(u => u.active).length,
                    adminUsers: userDatabase.filter(u => u.role === 'admin').length,
                    recentLogins: userDatabase.filter(u => u.lastLogin).length
                }
            };
        },
        
        getAuditLog: function(adminUserId) {
            const admin = userDatabase.find(u => u.id === adminUserId && u.role === 'admin');
            if (!admin) {
                return { success: false, error: "Unauthorized: Admin access required" };
            }
            
            return {
                success: true,
                auditLog: [...adminConfig.auditLog]
            };
        }
    };
}

// Create admin module instance
const adminModule = createAdminModule();

// ============================================
// TESTING THE COMPLETE SYSTEM
// ============================================

console.log("--- Testing Complete User Management System ---");

// Register users
console.log("1. Registering users...");
const reg1 = registerUser("Saad Hassan", "saad@adaegypt.com", 28, "securePass123");
const reg2 = registerUser("Ahmed Mohamed", "ahmed@test.com", 25, "password456");
const reg3 = registerUser("Sara Ali", "sara@test.com", 23, "mypass789");
console.log("Registration results:", reg1.success, reg2.success, reg3.success);

// Create admin user
if (reg1.success) {
    const adminUser = userDatabase.find(u => u.email === "saad@adaegypt.com");
    adminUser.role = "admin";
    console.log("Promoted Saad to admin role");
}

// Test authentication
console.log("\n2. Testing authentication...");
const auth1 = authenticateUser("saad@adaegypt.com", "securePass123", true);
const auth2 = authenticateUser("ahmed@test.com", "wrongpassword");
console.log("Auth success:", auth1.success);
console.log("Auth failure:", auth2.success, auth2.error);

// Test profile updates
console.log("\n3. Testing profile updates...");
if (reg2.success && reg2.user) {
    const update1 = updateUserProfile(reg2.user.id, {
        name: "Ahmed Mohamed Ali",
        age: 26
    });
    console.log("Profile update:", update1.success);
}

// Test user search
console.log("\n4. Testing user search...");
const search1 = searchUsers("saad");
const search2 = searchUsers("ahmed", { minAge: 25, active: true });
console.log("Search results:", search1.count, search2.count);

// Test admin functions
console.log("\n5. Testing admin functions...");
const adminUser = userDatabase.find(u => u.role === 'admin');
if (adminUser) {
    const stats = adminModule.getUserStats(adminUser.id);
    console.log("User stats:", stats.success ? stats.stats : stats.error);
    
    const auditLog = adminModule.getAuditLog(adminUser.id);
    console.log("Audit log entries:", auditLog.success ? auditLog.auditLog.length : auditLog.error);
}

// ============================================
// HOISTING FUNCTION DECLARATIONS (Referenced earlier)
// ============================================

// This function was called before its declaration to demonstrate hoisting
function hoistedFunction() {
    console.log("This function was called before its declaration - demonstrating hoisting!");
}

// Var hoisting demonstration
var varVariable = "This var is hoisted but was undefined when accessed earlier";

console.log("\n--- Final Hoisting Examples ---");
console.log("Now varVariable is properly initialized:", varVariable);

// Function expression (not hoisted)
const functionExpression = function() {
    console.log("Function expressions are not hoisted like declarations");
};

functionExpression();

console.log("\n=== User Management System Complete ===");
console.log("All JavaScript functions, scope, and hoisting concepts demonstrated!");
console.log(`Current users in system: ${currentUserCount}/${MAX_USERS}`);
console.log("System ready for production use!");