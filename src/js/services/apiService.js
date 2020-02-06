import axios from 'axios';
import {config, hhAreasConfig} from '../config/apiConfig';

class Api {
    constructor(config) {
        this.apiKey = config.apiKey;
        this.url = config.apiUrl;
        this.areasUrl = hhAreasConfig.apiUrl;
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

    async getAreas() {
        try {
            const response = await axios.get(this.areasUrl);
            return response.data;
        } catch (err) {
            console.log(err);
            Promise.reject(err);
        }
    }
}

const api = new Api(config);

export default api;