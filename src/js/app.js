import './plugins';
import trips from './store/trips';

document.addEventListener('DOMContentLoaded', () => {
  
    async function onFormSubmit() {
        trips.init(params);
    }
});