import './materialize';


// init autocomplete
const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete);

export function getAutocompleteInstance(elem) {
    return M.Autocomplete.getInstance(elem);
}

//init datepicker
const datepicker = document.querySelector('.datepicker');
M.Datepicker.init(datepicker, {
    showClearBtn: true,
    format: 'yyyy-mm-dd'
});

export function getDatepickerInstance(elem) {
    return M.Datepicker.getInstance(elem);
}

//init timepicker
var elems = document.querySelectorAll('.timepicker');
M.Timepicker.init(elems, {
    defaultTime: 'now',
    twelveHour: false
});

export function getTimepickerInstance(elem) {
    return M.Timepicker.getInstance(elem);
}