import '../sass/style.scss';
import './plugins';
import trips from './store/trips';
import formUI from './views/form';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Starting...');
    const form = formUI.form;
    //const submit = document.getElementById('submit-btn');

    initApp();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        onFormSubmit();
    });
    

    async function initApp() {
        await trips.init();
        formUI.setAutocompleteData(trips.citiesAutocompleteList);
    }

    async function onFormSubmit() {
       const origin = formUI.originValue;
       const destination = formUI.destinationValue;
       const departDate = formUI.departDateValue;
       const departTime = formUI.departTimeValue;

        console.log( departDate, '\n', departTime, '\n', origin, '\n', destination);

       const params = {
            'fn': origin.includes(',') ?  origin.substr(0, origin.indexOf(',')) : origin,
            'tn': destination.includes(',') ? destination.substr(0, destination.indexOf(',')) : destination,
            //needs to check what date and time format put in headers for query blablacar
           // 'db': departDate,
           // 'hb': departTime,
            'locale': 'ru_RU',
            'cur': "RUB"
       };

       console.log(trips.getTrips(params));
       
    }
});