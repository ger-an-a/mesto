import { Popup } from "./Popup.js";
import { formSelectors } from "../utils/constants.js";
export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmit) {
    super(popupSelector);
    this._callbackSubmit = callbackSubmit;
    this._form = this._popup.querySelector(formSelectors.form);
    this._inputs = this._popup.querySelectorAll(formSelectors.input);
    this._formValues = {};
  }

  _getInputValues() {
    this._inputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
  }

  setInputValues(obj) {
    this._inputs.forEach((input) => {
      input.value = obj[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._callbackSubmit);
  }

  close() {
    super.close();
    this._inputs.forEach((input) => {
      input.value = '';
    });
  }
}
