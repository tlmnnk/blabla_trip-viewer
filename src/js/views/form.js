import { getAutocompleteInstance } from '../plugins';

class FormUI {
    constructor(autocompleteInstance) {
        this._form = document.forms['tripsControls'];
        this.origin = document.getElementById('autocomplete-origin');
        this.destination = document.getElementById('autocomplete-dest');
        this.depart_date = document.getElementById('datepicker-depart');
        this.depart_time = document.getElementById('timepicker-depart');
        this.originAutocomplete = autocompleteInstance(this.origin);
        this.destinationAutocomplete = autocompleteInstance(this.destination);
        this.departDatepicker = datepickerInstance(this.depart_date);
        this.departTimepicker = datepickerInstance(this.depart_time);
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
        return this.departTimepicker.toString();
    }

    setAutocompleteData(data) {
        this.originAutocomplete.updateData(data);
        this.destinationAutocomplete.updateData(data);
    }
}

const formUI = new FormUI(getAutocompleteInstance);

export default formUI;