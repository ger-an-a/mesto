export class Card {
  constructor({ name, link, likes, _id}, cardSelector, handleDeleteClick, handleCardClick, handleLikeClick) {
    this._title = name;
    this._link = link;
    this._alt = this._title;
    this._likes = likes;
    this._id = _id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', this._handleCardClick);
    this._likeBtn.addEventListener('click', this._handleLikeClick);
    this._deleteBtn.addEventListener('click', this._handleDeleteClick);
  }

  _toggleLike() {
    this._likeBtn.classList.toggle('card__like-btn_active');
  }

  _putLike(api){
    api.putLike(this._id)
    .then(data =>{
      this._sumLikes.textContent = data.likes.length;
    })
  }

  _deleteLike(api){
    api.deleteLike(this._id)
    .then(data =>{
      this._sumLikes.textContent = data.likes.length;
    })
  }

  handleLike(api){
    this._sumLikes.textContent = '...';
    if(this._likeBtn.classList.contains('card__like-btn_active')){
      this._deleteLike(api);
    }
    else this._putLike(api);
    this._toggleLike();
  }

  deleteCard(api) {
    this._element.closest('.card').remove();
    api.deleteCard(this._id);
  }

  generateCard(myId) {
    this._element = this._getTemplate();
    this._deleteBtn = this._element.querySelector('.card__delete-btn');
    this._cardImage = this._element.querySelector('.card__img');
    this._likeBtn = this._element.querySelector('.card__like-btn');
    this._sumLikes = this._element.querySelector('.card__likes');
    this._element.querySelector('.card__title').textContent = this._title;
    this._sumLikes.textContent = this._likes.length;
    this._likes.forEach(element => {
      if(element._id == myId) {
        this._toggleLike();
      }
    });
    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;
    this._setEventListeners();
    return this._element;
  }
}
