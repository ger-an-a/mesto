import { popupClasses } from "../utils/constants.js";
export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  _overlayClose(evt) {
    if (evt.target.classList.contains(popupClasses.btnClose) || evt.target.classList.contains(popupClasses.popup) && !evt.target.classList.contains(popupClasses.container)) {
      this.close();
    }
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose.bind(this));
    this._popup.addEventListener('click', this._overlayClose.bind(this));
  }

  delEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
    this._popup.removeEventListener('click', this._overlayClose.bind(this));
  }

  open() {
    this._popup.classList.add(popupClasses.opened);
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove(popupClasses.opened);
    this.delEventListeners();
  }
}
