import { Popup } from "./Popup.js";
import { popupSelectors, viewportSelectors } from "../utils/constants.js";
export class PopupWithImage extends Popup {
  constructor(popupSelector, { title, link, alt }) {
    super(popupSelector);
    this._title = title;
    this._link = link;
    this._alt = alt;
    this._imgPopup = document.querySelector(popupSelectors.img);
    this._viewportTitle = this._imgPopup.querySelector(viewportSelectors.title);
    this._viewportImg = this._imgPopup.querySelector(viewportSelectors.img);
  }

  open() {
    super.open();
    this._viewportTitle.textContent = this._title;
    this._viewportImg.src = this._link;
    this._viewportImg.alt = this._alt;
  }
}
