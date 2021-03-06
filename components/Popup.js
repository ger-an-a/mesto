export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }

  _handleOverlayClose(evt) {
    if (evt.target.classList.contains('button_target_close') || evt.target.classList.contains('popup') && !evt.target.classList.contains('popup__container')) {
      this.close();
    }
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('click', this._handleOverlayClose);
  }

  _delEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('click', this._handleOverlayClose);
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._delEventListeners();
  }
}
