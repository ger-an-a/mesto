const page = document.querySelector('.page');
const buttonList = Array.from(page.querySelectorAll('.button'));
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
    addCard(item.name, item.link, item.alt);
  });
}

function addCard(cardName, cardLink, cardAlt = cardName) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__title').textContent = cardName;
  card.querySelector('.card__img').src = cardLink;
  card.querySelector('.card__img').alt = cardAlt;
  cardsContainer.prepend(card);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function selectToOpen(evt) {
  const editPopup = page.querySelector('.popup_target_edit');
  const addPopup = page.querySelector('.popup_target_add');
  const imgPopup = page.querySelector('.popup_target_img');
  switch (evt.target.id) {
    case 'edit':
      openPopup(editPopup);
      inputName.value = nameProfile.textContent;
      inputActivity.value = activityProfile.textContent;
      break;
    case 'add':
      openPopup(addPopup);
      break;
    case 'img':
      openPopup(imgPopup);
      imgPopup.querySelector('.photo-viewport__title').textContent = evt.target.parentNode.querySelector('.card__title').textContent;
      imgPopup.querySelector('.photo-viewport__img').src = evt.target.src;
      imgPopup.querySelector('.photo-viewport__img').alt = evt.target.alt;
  }
}

function selectToClose() {
  closePopup(page.querySelector('.popup_opened'));
}

function saveChanges(evt) {
  evt.preventDefault();
  nameProfile.textContent = inputName.value;
  activityProfile.textContent = inputActivity.value;
  selectToClose();
}

function createCard(evt) {
  evt.preventDefault();
  addCard(inputTitle.value, inputSorce.value);
  inputTitle.value = '';
  inputSorce.value = '';
  selectToClose();
}

function enableClickEvent(evt) {
  if (evt.target.classList.contains('card__like-btn')) {
    evt.target.classList.toggle('card__like-btn_active');
  }
  if (evt.target.classList.contains('card__delete-btn')) {
    evt.target.parentNode.remove();
  }
  if (evt.target.classList.contains('button_target_open')) {
    selectToOpen(evt);
  }
  if (evt.target.classList.contains('button_target_close') || evt.target.classList.contains('popup') && !evt.target.classList.contains('popup__container')) {
    selectToClose();
  }
}

function enableKeydownEvent(evt) {
  if (evt.key === 'Escape') {
    selectToClose();
  }
}

initialAddCards();
page.addEventListener('click', enableClickEvent);
document.addEventListener('keydown', enableKeydownEvent);
formEdit.addEventListener('submit', saveChanges);
formAdd.addEventListener('submit', createCard);



