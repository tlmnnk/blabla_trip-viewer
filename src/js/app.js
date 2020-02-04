import api from './services/apiService';

document.addEventListener('DOMContentLoaded', () => {
    const myTrips = api.getTrips();
    console.log(myTrips);
});