import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmit) {
    super(popupSelector);
    this._callbackSubmit = callbackSubmit;
    this._submitBtn = this._popup.querySelector('.form__submit-btn');
    this._form = this._popup.querySelector('.form');
    this._inputs = this._popup.querySelectorAll('.form__input');
    this.formValues = {};
  }

  _setEventListeners() {
    super._setEventListeners();
    this._form.addEventListener('submit', this._callbackSubmit);
  }

  _delEventListeners() {
    super._delEventListeners();
    this._form.removeEventListener('submit', this._callbackSubmit);
  }

  loading(isLoading){
    if(isLoading){
      this._submitBtn.textContent = 'Сохранение...';
    }
    else this._submitBtn.textContent = 'Сохранить';
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

  reset() {
    this._form.reset();
  }
}
