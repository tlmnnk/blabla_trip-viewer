import axios from 'axios';
import config from '../config/apiConfig';

class Api {
    constructor(config) {
        this.apiKey = config.apiKey;
        this.url = config.apiUrl; 
    }
    async getTrips(params) {
        try {
            const response = await axios.get(`${this.apiUrl}api/v2/trips`, {
                params: params
            });
            return response;
        } catch (err) {
            console.log(err);
            Promise.reject(err);
        }
    }
}

const api = new Api(config);

export default api;