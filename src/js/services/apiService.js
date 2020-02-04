import axios from 'axios';
import config from '../config/apiConfig';

class Api {
    constructor(config) {
        this.apiKey = config.apiKey;
        this.url = config.url;
        //params for testing
        this.params = {
            fn: 'Rostov-na-Donu',
            tn: 'Moscow',
            locale: 'ru_RU',
            cur: 'RUB'

        };
    }

    async getTrips() {
        try {
            const response = await axios.get(`${this.url}api/v2/trips`, {
                params: this.params
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