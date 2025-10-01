// Weather API Configuration
const WEATHER_API_KEY = 'your_api_key_here'; // Replace with actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Alternative: Using JSONPlaceholder for practice
const MOCK_API_URL = 'https://jsonplaceholder.typicode.com';

class WeatherAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = BASE_URL;
    }

    // Generic GET request handler
    async get(endpoint, params = {}) {
        try {
            const queryString = new URLSearchParams(params).toString();
            const url = `${this.baseURL}${endpoint}${queryString ? '?' + queryString : ''}`;
            
            console.log(`Fetching from: ${url}`);
            
            const response = await fetch(url);
            
            // Check if response is ok
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
            }
            
            const data = await response.json();
            return {
                success: true,
                data: data,
                status: response.status
            };
            
        } catch (error) {
            console.error('GET request failed:', error.message);
            return {
                success: false,
                error: error.message,
                data: null
            };
        }
    }

    // Get current weather by city name
    async getCurrentWeather(city) {
        try {
            const result = await this.get('/weather', {
                q: city,
                appid: this.apiKey,
                units: 'metric'
            });
            
            if (result.success) {
                return {
                    city: result.data.name,
                    temperature: result.data.main.temp,
                    description: result.data.weather[0].description,
                    humidity: result.data.main.humidity,
                    windSpeed: result.data.wind.speed,
                    fetchedBy: 'Saad Hassan Saad',
                    timestamp: new Date().toISOString()
                };
            }
            
            throw new Error(result.error);
            
        } catch (error) {
            console.error('Error fetching current weather:', error.message);
            throw error;
        }
    }

    // Get weather forecast
    async getForecast(city, days = 5) {
        try {
            const result = await this.get('/forecast', {
                q: city,
                appid: this.apiKey,
                units: 'metric',
                cnt: days * 8 // 8 data points per day
            });
            
            if (result.success) {
                return {
                    city: result.data.city.name,
                    forecast: result.data.list.map(item => ({
                        date: item.dt_txt,
                        temperature: item.main.temp,
                        description: item.weather[0].description
                    })),
                    fetchedBy: 'Saad Hassan Saad'
                };
            }
            
            throw new Error(result.error);
            
        } catch (error) {
            console.error('Error fetching forecast:', error.message);
            throw error;
        }
    }

    // Get weather for multiple cities
    async getMultipleCitiesWeather(cities) {
        try {
            console.log('Fetching weather for multiple cities...');
            
            const promises = cities.map(city => this.getCurrentWeather(city));
            const results = await Promise.all(promises);
            
            return results;
            
        } catch (error) {
            console.error('Error fetching multiple cities:', error.message);
            throw error;
        }
    }
}

// Mock API for practice (using JSONPlaceholder)
class MockAPI {
    constructor() {
        this.baseURL = MOCK_API_URL;
    }

    async get(endpoint) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`);
            
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            
            const data = await response.json();
            return {
                success: true,
                data: data
            };
            
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }

    async getPosts() {
        return await this.get('/posts');
    }

    async getUsers() {
        return await this.get('/users');
    }
}

module.exports = { WeatherAPI, MockAPI };