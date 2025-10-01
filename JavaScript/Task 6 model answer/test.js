const { MockAPI } = require('./weatherAPI');
const { APIClient } = require('./weatherPreferences');

async function testAPIs() {
    console.log('===== API TESTING =====\n');

    // Test Mock API (GET requests)
    console.log('Testing GET requests with JSONPlaceholder...\n');
    const mockAPI = new MockAPI();
    
    const postsResult = await mockAPI.getPosts();
    if (postsResult.success) {
        console.log(`Successfully fetched ${postsResult.data.length} posts`);
    }

    // Test API Client (GET and POST)
    console.log('\nTesting API Client...\n');
    const client = new APIClient('https://jsonplaceholder.typicode.com');
    
    // GET request
    const getUsersResult = await client.get('/users');
    if (getUsersResult.success) {
        console.log(`Fetched ${getUsersResult.data.length} users`);
    }

    // POST request
    const postData = {
        title: 'Weather App by Saad Hassan Saad',
        body: 'Testing async operations',
        userId: 1
    };
    
    const postResult = await client.post('/posts', postData);
    if (postResult.success) {
        console.log('POST request successful');
        console.log('Response:', postResult.data);
    }

    console.log('\n===== TESTING COMPLETE =====');
}

testAPIs();