import { openPopup } from "./DisplayPopup.js";
export class Card {
  constructor(data, cardSelector) {
    this._title = data.title;
    this._link = data.link;
    this._alt = data.alt;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  _openImgPopup() {
    const imgPopup = document.querySelector('.popup_target_img');
    openPopup(imgPopup);
    imgPopup.querySelector('.photo-viewport__title').textContent = this._title;
    imgPopup.querySelector('.photo-viewport__img').src = this._link;
    imgPopup.querySelector('.photo-viewport__img').alt = this._alt;
  }

  _toggleLike() {
    this._element.querySelector('.card__like-btn').classList.toggle('card__like-btn_active');
  }

  _deleteCard() {
    this._element.closest('.card').remove();
  }

  _setEventListeners() {
    this._element.querySelector('.card__img').addEventListener('click', () => {
      this._openImgPopup()
    });
    this._element.querySelector('.card__like-btn').addEventListener('click', () => {
      this._toggleLike()
    });
    this._element.querySelector('.card__delete-btn').addEventListener('click', () => {
      this._deleteCard()
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.card__title').textContent = this._title;
    this._element.querySelector('.card__img').src = this._link;
    this._element.querySelector('.card__img').alt = this._alt;
    this._setEventListeners();
    return this._element;
  }
}

const cardsContainer = document.querySelector('.cards__grid');

export function addCard(card) {
  cardsContainer.prepend(card);
}
