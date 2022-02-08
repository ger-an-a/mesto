import { Popup } from "./Popup.js";
export class PopupWithConfirm extends Popup {
  constructor(popupSelector, callbackSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector('.form');
    this._callbackSubmit = callbackSubmit;
  }

  _handleEnterSubmit(evt) {
    if (evt.key === 'Enter') this._callbackSubmit;
    let event = new Event("ent", {bubbles: true});
    document.dispatchEvent(event);
  }

  _setEventListeners() {
    super._setEventListeners();
    this._form.addEventListener('submit', this._callbackSubmit);
    document.addEventListener('keydown', this._handleEnterSubmit);


    document.addEventListener('ent', this._callbackSubmit);
  }

  _delEventListeners() {
    super._delEventListeners();
    this._form.removeEventListener('submit', this._callbackSubmit);
    document.removeEventListener('keydown', this._handleEnterSubmit);
  }

  delete(api) {
    this._card.deleteCard(api);
  }

  open(card) {
    super.open();
    this._card = card;
  }
}
