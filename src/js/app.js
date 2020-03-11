import '../sass/style.scss';
import './plugins';
import trips from './store/trips';
import formUI from './views/form';

document.addEventListener('DOMContentLoaded', () => {
  
    initApp();

    const form = formUI.form;

    async function initApp() {
        await trips.init();
        formUI.setAutocompleteData(trips.citiesAutocompleteList);
    }

    async function onFormSubmit() {
       const origin = form.originValue;
       const destination = form.destinationValue;
       const departDate = form.departDateValue;
       const departtime = form.departTimeValue;

        console.log(departDate, '\n', departtime);

       const params = {

       };

       trips.getTrips({});
       
    }
});