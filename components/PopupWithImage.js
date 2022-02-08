import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imgPopup = document.querySelector('.popup_target_img');
    this._viewportTitle = this._imgPopup.querySelector('.photo-viewport__title');
    this._viewportImg = this._imgPopup.querySelector('.photo-viewport__img');
  }

  open({ name, link, alt }) {
    super.open();
    this._viewportTitle.textContent = name;
    this._viewportImg.src = link;
    this._viewportImg.alt = alt;
  }
}
