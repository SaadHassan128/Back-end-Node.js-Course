// Simulate data loading with Promise
function loadData(dataName, delay = 2000) {
    return new Promise((resolve, reject) => {
        console.log(`Loading ${dataName}...`);
        
        setTimeout(() => {
            if (dataName) {
                resolve({
                    data: dataName,
                    timestamp: new Date().toISOString(),
                    loadedBy: 'Saad Hassan Saad'
                });
            } else {
                reject(new Error('Data name is required'));
            }
        }, delay);
    });
}

// Async function using async/await
async function fetchUserData() {
    try {
        console.log('Starting to fetch user data...');
        const result = await loadData('User Profile', 1500);
        console.log('Data loaded successfully:', result);
        return result;
    } catch (error) {
        console.error('Error loading data:', error.message);
        throw error;
    }
}

// Sequential operations
async function sequentialOperations() {
    try {
        console.log('--- Sequential Operations ---');
        const user = await loadData('User Data', 1000);
        console.log('Step 1 complete:', user.data);
        
        const posts = await loadData('User Posts', 1000);
        console.log('Step 2 complete:', posts.data);
        
        const comments = await loadData('Post Comments', 1000);
        console.log('Step 3 complete:', comments.data);
        
        console.log('All sequential operations completed');
    } catch (error) {
        console.error('Sequential operation failed:', error.message);
    }
}

// Parallel operations with Promise.all()
async function parallelOperations() {
    try {
        console.log('--- Parallel Operations ---');
        const startTime = Date.now();
        
        const [user, posts, comments] = await Promise.all([
            loadData('User Data', 1000),
            loadData('User Posts', 1000),
            loadData('Post Comments', 1000)
        ]);
        
        const endTime = Date.now();
        console.log('All data loaded in parallel');
        console.log('Time taken:', endTime - startTime, 'ms');
        console.log('Results:', { user, posts, comments });
        
        return { user, posts, comments };
    } catch (error) {
        console.error('Parallel operation failed:', error.message);
    }
}

// Export functions
module.exports = {
    loadData,
    fetchUserData,
    sequentialOperations,
    parallelOperations
};