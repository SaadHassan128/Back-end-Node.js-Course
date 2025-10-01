const { sequentialOperations, parallelOperations } = require('./promiseExamples');
const WeatherApplication = require('./weatherApp');

// Main execution function
async function main() {
    console.log('===== JavaScript Session 6 - Async Programming =====');
    console.log('Student: Saad Hassan Saad');
    console.log('Position: Instructor & Head of Software Department');
    console.log('Academy of Digital Arts Egypt');
    console.log('===================================================\n');

    try {
        // Part 1: Promise Examples
        console.log('PART 1: PROMISE OPERATIONS\n');
        await sequentialOperations();
        console.log('\n');
        await parallelOperations();

        // Part 2: Weather Application
        console.log('\n\nPART 2: WEATHER APPLICATION\n');
        
        // Note: Replace 'your_api_key_here' with actual OpenWeatherMap API key
        // For demonstration, using Cairo as default city
        const app = new WeatherApplication('your_api_key_here');
        
        // Run complete workflow
        await app.runCompleteWorkflow('Cairo');

    } catch (error) {
        console.error('\n=== APPLICATION ERROR ===');
        console.error('Error:', error.message);
        console.error('========================\n');
    }
}

// Run the application
main();