import './plugins';
import trips from './store/trips';
import formUI from './views/form';

document.addEventListener('DOMContentLoaded', () => {
  
    initApp();


    async function initApp() {
        await trips.init();
        formUI.setAutocompleteData(trips.citiesAutocompleteList);
    }

    async function onFormSubmit() {
       const origin = formUI.originValue;
       const destination = formUI.destinationValue;
       
    }
});