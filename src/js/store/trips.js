import api from '../services/apiService';

class Trips {
    constructor(api) {
        this.myTrips = null;
    }

    async init(params) {
        const response = await Promise.all([api.getTrips(params)]);
        this.myTrips = response.data.trips;
    }
}

const trips = new Trips(api);

export default trips;