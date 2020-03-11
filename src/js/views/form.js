import { getAutocompleteInstance, getDatepickerInstance, getTimepickerInstance } from '../plugins';

class FormUI {
    constructor(autocompleteInstance, datepickerInstance, timepickerInstance) {
        this._form = document.forms['tripsControls'];
        this.origin = document.getElementById('autocomplete-origin');
        this.destination = document.getElementById('autocomplete-dest');
        this.departDate = document.getElementById('datepicker-depart');
        this.departTime = document.getElementById('timepicker-depart');
        this.originAutocomplete = autocompleteInstance(this.origin);
        this.destinationAutocomplete = autocompleteInstance(this.destination);
        this.departDatepicker = datepickerInstance(this.departDate);
        this.departTimepicker = timepickerInstance(this.departTime);
    }

    get form() {
        return this._form;
    }

    get originValue() {
        return this.origin.value;
    }

    get destinationValue() {
        return this.destination.value;
    }
    get departDateValue() {
        return this.departDatepicker.toString();
    }
    get departTimeValue() {
        return this.departTimepicker.time;
    }

    setAutocompleteData(data) {
        this.originAutocomplete.updateData(data);
        this.destinationAutocomplete.updateData(data);
    }
}

const formUI = new FormUI(getAutocompleteInstance, getDatepickerInstance, getTimepickerInstance);

export default formUI;