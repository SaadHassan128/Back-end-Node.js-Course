const { WeatherAPI } = require('./weatherAPI');
const { WeatherPreferencesAPI } = require('./weatherPreferences');

class WeatherApplication {
    constructor(apiKey) {
        this.weatherAPI = new WeatherAPI(apiKey);
        this.preferencesAPI = new WeatherPreferencesAPI();
        this.isLoading = false;
        this.user = {
            name: 'Saad Hassan Saad',
            age: 28,
            position: 'Head of Software Department at ADA Egypt',
            favoriteColor: 'black'
        };
    }

    // Display loading state
    setLoading(loading) {
        this.isLoading = loading;
        console.log(loading ? 'Loading...' : 'Loading complete');
    }

    // Get complete weather dashboard data
    async getWeatherDashboard(city) {
        this.setLoading(true);
        
        try {
            console.log(`\n=== Weather Dashboard for ${city} ===`);
            console.log(`Requested by: ${this.user.name}`);
            
            // Fetch current weather and forecast in parallel
            const [currentWeather, forecast] = await Promise.all([
                this.weatherAPI.getCurrentWeather(city),
                this.weatherAPI.getForecast(city, 3)
            ]);
            
            const dashboard = {
                user: this.user,
                currentWeather: currentWeather,
                forecast: forecast,
                generatedAt: new Date().toISOString()
            };
            
            console.log('\nCurrent Weather:');
            console.log(`Temperature: ${currentWeather.temperature}°C`);
            console.log(`Description: ${currentWeather.description}`);
            console.log(`Humidity: ${currentWeather.humidity}%`);
            console.log(`Wind Speed: ${currentWeather.windSpeed} m/s`);
            
            console.log(`\nForecast (${forecast.forecast.length} data points)`);
            
            this.setLoading(false);
            return dashboard;
            
        } catch (error) {
            this.setLoading(false);
            console.error('Dashboard Error:', error.message);
            throw new Error(`Failed to load dashboard: ${error.message}`);
        }
    }

    // Save user preferences
    async saveUserPreferences(city, units = 'metric', notifications = true) {
        try {
            console.log('\n=== Saving User Preferences ===');
            
            const preferences = {
                name: this.user.name,
                favoriteCity: city,
                units: units,
                notifications: notifications,
                theme: this.user.favoriteColor
            };
            
            const result = await this.preferencesAPI.savePreferences(preferences);
            
            console.log('Preferences saved successfully');
            console.log('Saved data:', result);
            
            return result;
            
        } catch (error) {
            console.error('Error saving preferences:', error.message);
            throw error;
        }
    }

    // Get weather for multiple cities
    async compareMultipleCities(cities) {
        this.setLoading(true);
        
        try {
            console.log(`\n=== Comparing Weather for Multiple Cities ===`);
            console.log(`Cities: ${cities.join(', ')}`);
            
            const weatherData = await this.weatherAPI.getMultipleCitiesWeather(cities);
            
            console.log('\nComparison Results:');
            weatherData.forEach((weather, index) => {
                console.log(`\n${index + 1}. ${weather.city}`);
                console.log(`   Temperature: ${weather.temperature}°C`);
                console.log(`   Description: ${weather.description}`);
            });
            
            this.setLoading(false);
            return weatherData;
            
        } catch (error) {
            this.setLoading(false);
            console.error('Comparison Error:', error.message);
            throw error;
        }
    }

    // Save favorite locations
    async saveFavoriteLocations(locations) {
        try {
            console.log('\n=== Saving Favorite Locations ===');
            
            const result = await this.preferencesAPI.saveFavoriteLocations(locations);
            
            console.log('Locations saved successfully');
            return result;
            
        } catch (error) {
            console.error('Error saving locations:', error.message);
            throw error;
        }
    }

    // Complete workflow demonstration
    async runCompleteWorkflow(city) {
        console.log('\n========================================');
        console.log('WEATHER APPLICATION - COMPLETE WORKFLOW');
        console.log('========================================');
        console.log(`User: ${this.user.name}`);
        console.log(`Position: ${this.user.position}`);
        console.log('========================================\n');
        
        try {
            // Step 1: Get dashboard
            const dashboard = await this.getWeatherDashboard(city);
            
            // Step 2: Save preferences
            await this.saveUserPreferences(city, 'metric', true);
            
            // Step 3: Save favorite locations
            await this.saveFavoriteLocations([city, 'London', 'New York']);
            
            // Step 4: Compare multiple cities
            await this.compareMultipleCities(['Cairo', 'London', 'Paris']);
            
            console.log('\n========================================');
            console.log('WORKFLOW COMPLETED SUCCESSFULLY');
            console.log('========================================\n');
            
            return dashboard;
            
        } catch (error) {
            console.log('\n========================================');
            console.log('WORKFLOW FAILED');
            console.log(`Error: ${error.message}`);
            console.log('========================================\n');
            throw error;
        }
    }
}

module.exports = WeatherApplication;