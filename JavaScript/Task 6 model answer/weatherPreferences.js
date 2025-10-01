class WeatherPreferencesAPI {
    constructor(baseURL = 'https://jsonplaceholder.typicode.com') {
        this.baseURL = baseURL;
    }

    // Generic POST request handler
    async post(endpoint, data) {
        try {
            console.log(`Posting to: ${this.baseURL}${endpoint}`);
            console.log('Data:', JSON.stringify(data, null, 2));
            
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
            }
            
            const responseData = await response.json();
            
            return {
                success: true,
                data: responseData,
                status: response.status
            };
            
        } catch (error) {
            console.error('POST request failed:', error.message);
            return {
                success: false,
                error: error.message,
                data: null
            };
        }
    }

    // Save user preferences
    async savePreferences(preferences) {
        try {
            const preferenceData = {
                userId: preferences.userId || 1,
                name: preferences.name || 'Saad Hassan Saad',
                favoriteCity: preferences.favoriteCity,
                units: preferences.units || 'metric',
                notifications: preferences.notifications || false,
                theme: preferences.theme || 'black',
                createdAt: new Date().toISOString()
            };
            
            const result = await this.post('/posts', preferenceData);
            
            if (result.success) {
                console.log('Preferences saved successfully');
                return result.data;
            }
            
            throw new Error(result.error);
            
        } catch (error) {
            console.error('Error saving preferences:', error.message);
            throw error;
        }
    }

    // Save favorite locations
    async saveFavoriteLocations(locations) {
        try {
            const locationData = {
                userId: 1,
                userName: 'Saad Hassan Saad',
                locations: locations,
                savedAt: new Date().toISOString()
            };
            
            const result = await this.post('/posts', locationData);
            
            if (result.success) {
                console.log('Favorite locations saved');
                return result.data;
            }
            
            throw new Error(result.error);
            
        } catch (error) {
            console.error('Error saving locations:', error.message);
            throw error;
        }
    }
}

// API Client class combining GET and POST
class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        };

        if (options.body) {
            config.body = JSON.stringify(options.body);
        }

        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            
            const data = await response.json();
            return { success: true, data };
            
        } catch (error) {
            console.error('API request failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    async get(endpoint) {
        return await this.request(endpoint, { method: 'GET' });
    }

    async post(endpoint, body) {
        return await this.request(endpoint, { method: 'POST', body });
    }

    async put(endpoint, body) {
        return await this.request(endpoint, { method: 'PUT', body });
    }

    async delete(endpoint) {
        return await this.request(endpoint, { method: 'DELETE' });
    }
}

module.exports = { WeatherPreferencesAPI, APIClient };