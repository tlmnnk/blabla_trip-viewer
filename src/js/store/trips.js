import api from '../services/apiService';

class Trips {
    constructor(api) {
        this.api = api;
        this.myTrips = null;
    }

    async init() {
        const areas = await this.api.getAreas();
        this.russianAreas = this.getRussianAreas(areas).areas;
        this.cities = this.getCities(this.russianAreas);
    }
    getRussianAreas(countries) {
        return countries.filter(country => country.id == '113')[0];
    }
    // 
    getCities(areas) {
      return areas.reduce((acc, item)=>{
            let cities = {};
            item.areas.forEach(city => {
                cities[city.name] = null;
            });
            Object.assign(acc, cities);
            return acc;
        }, {});

       
    }
}

const trips = new Trips(api);

export default trips;