/**
 * JavaScript Session 6: Asynchronous JavaScript & API Communication
 * Academy of Digital Arts Egypt - Back-End Development Course
 * 
 * Instructor: Saad Hassan Saad
 * Position: Full Stack Web Development Instructor & Head of Software Department
 * Age: 28 | Education: Computer Science Graduate
 * Organization: Academy of Digital Arts Egypt
 * Favorite Color: Black
 * 
 * Session Topics:
 * 1. Events & Callbacks - Foundation of async programming
 * 2. Promises - Managing asynchronous operations
 * 3. Async/Await - Modern syntax for async code
 * 4. Fetch API - HTTP requests (GET, POST)
 */

console.log("=".repeat(70));
console.log("Asynchronous JavaScript & API Communication");
console.log("Instructor: Saad Hassan Saad - ADA Egypt");
console.log("=".repeat(70));

// ========== PART 1: EVENTS & CALLBACKS ==========
console.log("\n1. EVENTS & CALLBACKS OVERVIEW");
console.log("-".repeat(50));

// Simple event emitter demonstration
const eventSystem = {
    events: {},
    
    on: function(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    },
    
    emit: function(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => callback(data));
        }
    }
};

// Register event listener
eventSystem.on('courseEnrollment', (student) => {
    console.log(`Student enrolled: ${student.name} in ${student.course}`);
});

// Trigger event
eventSystem.emit('courseEnrollment', {
    name: 'Ahmed Hassan',
    course: 'Full Stack Development'
});

// Callback example - demonstrates callback hell problem
function simulateAsyncOperation(data, callback) {
    setTimeout(() => {
        callback(`Processed: ${data}`);
    }, 500);
}

simulateAsyncOperation('User Data', (result) => {
    console.log(result);
});

// ========== PART 2: PROMISES ==========
console.log("\n2. PROMISES FOR ASYNC OPERATIONS");
console.log("-".repeat(50));

// Creating a Promise
function fetchInstructorData(instructorId) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching instructor ${instructorId} data...`);
        
        setTimeout(() => {
            if (instructorId > 0) {
                resolve({
                    id: instructorId,
                    name: "Saad Hassan Saad",
                    position: "Head of Software Department",
                    department: "Full Stack Development",
                    academy: "Academy of Digital Arts Egypt"
                });
            } else {
                reject(new Error('Invalid instructor ID'));
            }
        }, 1000);
    });
}

// Using Promises with .then() and .catch()
fetchInstructorData(1)
    .then(instructor => {
        console.log(`Instructor: ${instructor.name}`);
        console.log(`Position: ${instructor.position}`);
        return instructor;
    })
    .then(instructor => {
        console.log(`Department: ${instructor.department}`);
    })
    .catch(error => {
        console.log('Error:', error.message);
    });

// Promise chaining for multiple operations
function processCourseEnrollment(studentName, courseName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                student: studentName,
                course: courseName,
                instructor: "Saad Hassan Saad",
                enrolledAt: new Date()
            });
        }, 800);
    });
}

function sendConfirmationEmail(enrollment) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ...enrollment,
                emailSent: true,
                message: 'Confirmation email sent successfully'
            });
        }, 500);
    });
}

// Chaining promises
processCourseEnrollment('Sara Mohamed', 'JavaScript Advanced')
    .then(enrollment => {
        console.log(`Enrolled: ${enrollment.student} in ${enrollment.course}`);
        return sendConfirmationEmail(enrollment);
    })
    .then(confirmation => {
        console.log(confirmation.message);
    })
    .catch(error => {
        console.log('Enrollment failed:', error.message);
    });

// Promise.all for parallel operations
function fetchCourseData(courseId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: courseId,
                name: `Course ${courseId}`,
                instructor: "Saad Hassan Saad"
            });
        }, 600);
    });
}

Promise.all([
    fetchCourseData(1),
    fetchCourseData(2),
    fetchCourseData(3)
])
.then(courses => {
    console.log(`Loaded ${courses.length} courses`);
    courses.forEach(course => {
        console.log(`- ${course.name} by ${course.instructor}`);
    });
})
.catch(error => {
    console.log('Failed to load courses:', error.message);
});

// ========== PART 3: ASYNC/AWAIT ==========
console.log("\n3. ASYNC/AWAIT MODERN SYNTAX");
console.log("-".repeat(50));

// Basic async/await function
async function getInstructorProfile(instructorId) {
    try {
        console.log('Loading instructor profile...');
        const instructor = await fetchInstructorData(instructorId);
        console.log(`Profile loaded: ${instructor.name}`);
        return instructor;
    } catch (error) {
        console.log('Error loading profile:', error.message);
        return null;
    }
}

// Sequential vs Parallel execution comparison
async function sequentialOperations() {
    console.log('Starting sequential operations...');
    const start = Date.now();
    
    const course1 = await fetchCourseData(1);
    const course2 = await fetchCourseData(2);
    const course3 = await fetchCourseData(3);
    
    const duration = Date.now() - start;
    console.log(`Sequential completed in ${duration}ms`);
    return [course1, course2, course3];
}

async function parallelOperations() {
    console.log('Starting parallel operations...');
    const start = Date.now();
    
    const [course1, course2, course3] = await Promise.all([
        fetchCourseData(1),
        fetchCourseData(2),
        fetchCourseData(3)
    ]);
    
    const duration = Date.now() - start;
    console.log(`Parallel completed in ${duration}ms`);
    return [course1, course2, course3];
}

// Error handling with async/await
async function processStudentEnrollments(studentIds) {
    const results = [];
    
    for (const studentId of studentIds) {
        try {
            const enrollment = await processCourseEnrollment(
                `Student ${studentId}`,
                'Full Stack Development'
            );
            results.push({ success: true, enrollment });
        } catch (error) {
            results.push({ success: false, error: error.message });
        }
    }
    
    return results;
}

// Execute async operations
async function demonstrateAsync() {
    await getInstructorProfile(1);
    
    console.log('\nComparing sequential vs parallel:');
    await sequentialOperations();
    await parallelOperations();
    
    const enrollmentResults = await processStudentEnrollments([1, 2, 3]);
    console.log(`Processed ${enrollmentResults.length} enrollments`);
}

demonstrateAsync();

// ========== PART 4: FETCH API ==========
console.log("\n4. FETCH API - HTTP REQUESTS");
console.log("-".repeat(50));

// GET request with error handling
async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        
        const users = await response.json();
        console.log(`Fetched ${users.length} users from API`);
        return users;
    } catch (error) {
        console.log('Fetch error:', error.message);
        return [];
    }
}

// GET request with parameters
async function fetchUserById(userId) {
    try {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('User not found');
        }
        
        const user = await response.json();
        console.log(`User found: ${user.name} (${user.email})`);
        return user;
    } catch (error) {
        console.log('Error fetching user:', error.message);
        return null;
    }
}

// POST request
async function createPost(title, body, userId) {
    try {
        const postData = {
            title: title,
            body: body,
            userId: userId
        };
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        });
        
        if (!response.ok) {
            throw new Error('Failed to create post');
        }
        
        const newPost = await response.json();
        console.log(`Post created with ID: ${newPost.id}`);
        return newPost;
    } catch (error) {
        console.log('Error creating post:', error.message);
        return null;
    }
}

// ========== PRACTICAL APPLICATION: API CLIENT CLASS ==========
console.log("\n5. PRACTICAL API CLIENT IMPLEMENTATION");
console.log("-".repeat(50));

class AcademyAPIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.instructor = "Saad Hassan Saad";
    }
    
    async get(endpoint) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`);
            
            if (!response.ok) {
                throw new Error(`GET request failed: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.log('GET error:', error.message);
            return null;
        }
    }
    
    async post(endpoint, data) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (!response.ok) {
                throw new Error(`POST request failed: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.log('POST error:', error.message);
            return null;
        }
    }
    
    async getAllUsers() {
        console.log(`API request initiated by: ${this.instructor}`);
        return await this.get('/users');
    }
    
    async createCoursePost(title, content, userId) {
        return await this.post('/posts', {
            title: title,
            body: content,
            userId: userId,
            instructor: this.instructor
        });
    }
}

// Course Management System using API
class CourseManagementSystem {
    constructor(apiClient) {
        this.api = apiClient;
        this.instructorName = "Saad Hassan Saad";
        this.academy = "Academy of Digital Arts Egypt";
    }
    
    async fetchAllStudents() {
        try {
            console.log(`${this.instructorName} is fetching student list...`);
            const users = await this.api.getAllUsers();
            
            if (users && users.length > 0) {
                console.log(`Found ${users.length} students`);
                return users.slice(0, 5);
            }
            
            return [];
        } catch (error) {
            console.log('Error fetching students:', error.message);
            return [];
        }
    }
    
    async createCourseAnnouncement(title, message) {
        try {
            console.log('Creating course announcement...');
            const post = await this.api.createCoursePost(title, message, 1);
            
            if (post) {
                console.log(`Announcement created: ${post.title}`);
                return post;
            }
            
            return null;
        } catch (error) {
            console.log('Error creating announcement:', error.message);
            return null;
        }
    }
    
    async generateCourseReport() {
        try {
            const students = await this.fetchAllStudents();
            
            return {
                academy: this.academy,
                instructor: this.instructorName,
                totalStudents: students.length,
                students: students.map(student => ({
                    name: student.name,
                    email: student.email
                })),
                generatedAt: new Date().toISOString()
            };
        } catch (error) {
            console.log('Error generating report:', error.message);
            return null;
        }
    }
}

// ========== DEMONSTRATION OF COMPLETE SYSTEM ==========
async function demonstrateCompleteSystem() {
    console.log("\n6. COMPLETE SYSTEM DEMONSTRATION");
    console.log("-".repeat(50));
    
    const apiClient = new AcademyAPIClient('https://jsonplaceholder.typicode.com');
    const courseSystem = new CourseManagementSystem(apiClient);
    
    // Fetch students
    const students = await courseSystem.fetchAllStudents();
    console.log(`Retrieved ${students.length} student records`);
    
    // Create announcement
    const announcement = await courseSystem.createCourseAnnouncement(
        'Welcome to Full Stack Development',
        'Course starting next week. Instructor: Saad Hassan Saad'
    );
    
    // Generate report
    const report = await courseSystem.generateCourseReport();
    if (report) {
        console.log('\nCourse Report Generated:');
        console.log(`Academy: ${report.academy}`);
        console.log(`Instructor: ${report.instructor}`);
        console.log(`Total Students: ${report.totalStudents}`);
    }
}

// Execute complete demonstration
demonstrateCompleteSystem();

// ========== SESSION SUMMARY ==========
console.log("\n" + "=".repeat(70));
console.log("SESSION COMPLETED SUCCESSFULLY");
console.log("Instructor: Saad Hassan Saad");
console.log("Position: Head of Software Department - ADA Egypt");
console.log("\nTopics Covered:");
console.log("- Events and callbacks foundation");
console.log("- Promises for async operation management");
console.log("- Async/await modern syntax");
console.log("- Fetch API for HTTP requests");
console.log("- Complete API client implementation");
console.log("- Sequential vs parallel execution patterns");
console.log("- Error handling in async operations");
console.log("\nAcademy of Digital Arts Egypt - Full Stack Development Course");
console.log("=".repeat(70));