const page = document.querySelector('.page');
const nameProfile = page.querySelector('.profile__title');
const activityProfile = page.querySelector('.profile__subtitle');
const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = page.querySelector('.cards__grid');
const formEdit = document.forms.edit;
const inputName = formEdit.elements.forename;
const inputActivity = formEdit.elements.activity;
const formAdd = document.forms.add;
const inputTitle = formAdd.elements.title;
const inputSorce = formAdd.elements.sorce;
const editPopup = page.querySelector('.popup_target_edit');
const addPopup = page.querySelector('.popup_target_add');
const imgPopup = page.querySelector('.popup_target_img');
const editBtn = page.querySelector('.profile__edit-btn');
const addBtn = page.querySelector('.profile__add-btn');

function initialAddCards() {
  const initialCards = [
    {
      name: 'Карачаевск',
      link: './images/Karachaevsk.jpg',
      alt: 'Сентинский храм.'
    },
    {
      name: 'Гора Эльбрус',
      link: './images/Elbrus.jpg',
      alt: 'Горы на горизонте.'
    },
    {
      name: 'Домбай',
      link: './images/Dombay.jpg',
      alt: 'Пик Инэ домбай.'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
      alt: 'Озеро зимой.'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
      alt: 'Вулкан.'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
      alt: 'Железная дорога'
    }
  ];
  initialCards.forEach((item) => {
    const card = newCard(item.name, item.link, item.alt);
    addCard(card);
  });
}

function newCard(cardName, cardLink, cardAlt = cardName) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__title').textContent = cardName;
  card.querySelector('.card__img').src = cardLink;
  card.querySelector('.card__img').alt = cardAlt;
  card.querySelector('.card__img').addEventListener('click', openImgPopup);
  card.querySelector('.card__like-btn').addEventListener('click', toggleLike);
  card.querySelector('.card__delete-btn').addEventListener('click', deleteCard);
  return card;
}

function addCard(card) {
  cardsContainer.prepend(card);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
  popup.addEventListener('click', overlayClose);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
  popup.removeEventListener('click', overlayClose);
}

function openEditPopup() {
  openPopup(editPopup);
  inputName.value = nameProfile.textContent;
  inputActivity.value = activityProfile.textContent;
}

function openAddPopup() {
  openPopup(addPopup);
}

function openImgPopup(evt) {
  openPopup(imgPopup);
  imgPopup.querySelector('.photo-viewport__title').textContent = evt.target.parentNode.querySelector('.card__title').textContent;
  imgPopup.querySelector('.photo-viewport__img').src = evt.target.src;
  imgPopup.querySelector('.photo-viewport__img').alt = evt.target.alt;
}

function saveChanges(evt) {
  evt.preventDefault();
  nameProfile.textContent = inputName.value;
  activityProfile.textContent = inputActivity.value;
  closePopup(editPopup);
}

function disabledBtn(Btn) {
  Btn.classList.add('form__submit_inactive');
  Btn.setAttribute('disabled', true);
}

function createCard(evt) {
  evt.preventDefault();
  const card = newCard(inputTitle.value, inputSorce.value);
  card.querySelector('.card__img').addEventListener('click', openImgPopup);
  card.querySelector('.card__like-btn').addEventListener('click', toggleLike);
  card.querySelector('.card__delete-btn').addEventListener('click', deleteCard);
  addCard(card);
  inputTitle.value = '';
  inputSorce.value = '';
  disabledBtn(addPopup.querySelector('.form__submit-btn'));
  closePopup(addPopup);
}

function toggleLike(evt) {
  evt.target.classList.toggle('card__like-btn_active');
}

function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

function overlayClose(evt) {
  if (evt.target.classList.contains('button_target_close') || evt.target.classList.contains('popup') && !evt.target.classList.contains('popup__container')) {
    closePopup(page.querySelector('.popup_opened'));
  }
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    closePopup(page.querySelector('.popup_opened'));
  }
}

initialAddCards();
editBtn.addEventListener('click', openEditPopup);
addBtn.addEventListener('click', openAddPopup);
formEdit.addEventListener('submit', saveChanges);
formAdd.addEventListener('submit', createCard);


