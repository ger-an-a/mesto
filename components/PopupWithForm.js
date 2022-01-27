import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmit) {
    super(popupSelector);
    this._callbackSubmit = callbackSubmit;
    this._form = this._popup.querySelector('.form');
    this._inputs = this._popup.querySelectorAll('.form__input');
    this.formValues = {};
  }

  getInputValues() {
    this._inputs.forEach((input) => {
      this.formValues[input.name] = input.value;
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

  delEventListeners() {
    super.delEventListeners();
    this._form.removeEventListener('submit', this._callbackSubmit);
  }

  close() {
    super.close();
    this._form.reset();
  }
}
