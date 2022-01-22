import { cardSelectors } from "../utils/constants.js";
export class Card {
  constructor({ title, link, alt }, cardSelector, handleCardClick) {
    this._title = title;
    this._link = link;
    this._alt = alt;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector(cardSelectors.card).cloneNode(true);
    return cardElement;
  }

  _toggleLike() {
    this._element.querySelector(cardSelectors.likeBtn).classList.toggle(cardSelectors.likeBtnActive);
  }

  _deleteCard() {
    this._element.closest(cardSelectors.card).remove();
  }

  _setEventListeners() {
    this._element.querySelector(cardSelectors.img).addEventListener('click', this._handleCardClick);
    this._element.querySelector(cardSelectors.likeBtn).addEventListener('click', () => {
      this._toggleLike()
    });
    this._element.querySelector(cardSelectors.deleteBtn).addEventListener('click', () => {
      this._deleteCard()
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(cardSelectors.title).textContent = this._title;
    this._element.querySelector(cardSelectors.img).src = this._link;
    this._element.querySelector(cardSelectors.img).alt = this._alt;
    this._setEventListeners();
    return this._element;
  }
}
