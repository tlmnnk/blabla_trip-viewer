import api from '../services/apiService';

class Trips {
    constructor(api) {
        this.api = api;
        this.myTrips = null;
    }

    async init() {
        const areas = await this.api.getAreas();
        const russianAreas = this.getRussianAreas(areas).areas;
        this.citiesAutocompleteList = this.getCitiesAutocompleteList(russianAreas);
    }
    getRussianAreas(countries) {
        return countries.filter(country => country.id == '113')[0];
    }

    getRidOfBracesInCityName(city) {
        if(city.name.includes('(')) {
            const index = city.name.indexOf('(');
            city.name = city.name.substr(0, index - 1);
        }
    }

    addMoscowAndPeterburg(array) {
        array.unshift(['2', 'Санкт-Петербург']);
        array.unshift(['1', 'Москва']);
        return array;
    }
    getSerializedCities(areas) {
    return areas.reduce((acc, item)=>{
        let cities = {};
        const region = item.name;
        item.areas.forEach(city => {
            this.getRidOfBracesInCityName(city);
            cities[city.id] = `${city.name}, ${region}`;
        });
        Object.assign(acc, cities);
        return acc;
    }, {});
    }
 
    getCitiesAutocompleteList(areas) {
        let citiesTemp = this.getSerializedCities(areas); 
        let citiesSorted = Object.entries(citiesTemp).sort((a,b) => a - b);

        citiesSorted = this.addMoscowAndPeterburg(citiesSorted);
        
        return citiesSorted.reduce((acc, item) => {
            acc[item[1]] = null;
            return acc;
        }, {});
    }

    getTrips(params) {
        return this.api.getTrips(params);
    }
}

const trips = new Trips(api);

export default trips;