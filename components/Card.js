export class Card {
  constructor({ title, link, alt }, cardSelector, handleCardClick) {
    this._title = title;
    this._link = link;
    this._alt = alt;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  _toggleLike() {
    this._likeBtn.classList.toggle('card__like-btn_active');
  }

  _deleteCard() {
    this._element.closest('.card').remove();
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', this._handleCardClick);
    this._likeBtn.addEventListener('click', () => {
      this._toggleLike()
    });
    this._element.querySelector('.card__delete-btn').addEventListener('click', () => {
      this._deleteCard()
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__img');
    this._likeBtn = this._element.querySelector('.card__like-btn');
    this._element.querySelector('.card__title').textContent = this._title;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;
    this._setEventListeners();
    return this._element;
  }
}
