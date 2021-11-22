const page = document.querySelector('.page');
const nameProfile = page.querySelector('.profile__title');
const activityProfile = page.querySelector('.profile__subtitle');
const editBtn = page.querySelector('.profile__edit-btn');
const editPopup = page.querySelector('.popup_target_edit');
const closeBtnEditPopup = editPopup.querySelector('.popup__close-btn');
const formEditPopup = editPopup.querySelector('.form');
const inputNameEditPopup = formEditPopup.querySelector('input[name="forename"]');
const inputActivityEditPopup = formEditPopup.querySelector('input[name="activity"]');
const addBtn = page.querySelector('.profile__add-btn');
const addPopup = page.querySelector('.popup_target_add');
const closeBtnAddPopup = addPopup.querySelector('.popup__close-btn');
const formAddPopup = addPopup.querySelector('.form');
const inputNameAddPopup = formAddPopup.querySelector('input[name="forename"]');
const inputSorceAddPopup = formAddPopup.querySelector('input[name="sorce"]');
const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = page.querySelector('.cards__grid');
const imgPopup = page.querySelector('.popup_target_img');
const closeBtnImgPopup = imgPopup.querySelector('.popup__close-btn');

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
  card.querySelector('.card__like-btn').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like-btn_active');
  });
  card.querySelector('.card__delete-btn').addEventListener('click', (evt) => {
    evt.target.parentNode.remove();
  });
  card.querySelector('.card__img').addEventListener('click', open);
  cardsContainer.prepend(card);
}
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function open(evt) {
  switch (evt.target) {
    case editBtn:
      openPopup(editPopup);
      inputNameEditPopup.value = nameProfile.textContent;
      inputActivityEditPopup.value = activityProfile.textContent;
      break;
    case addBtn:
      openPopup(addPopup);
      //инпуты здесь очищала, потому что не припомню, чтоб где-то после закрытия формы оставались введенные данные=)
      break;
    default:
      openPopup(imgPopup);
      imgPopup.querySelector('.photo-viewport__title').textContent = evt.target.parentNode.querySelector('.card__title').textContent;
      imgPopup.querySelector('.photo-viewport__img').src = evt.target.src;
      imgPopup.querySelector('.photo-viewport__img').alt = evt.target.alt;
  }
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function close() {
  closePopup(page.querySelector('.popup_opened'));
  //не понимаю, почему в этом случае тоже нужно выносить в отельную функцию удаление класса, это итак универсальная функция закрытия попапа(больше одного же не может быть открыто)
}

function saveChanges(evt) {
  evt.preventDefault();
  nameProfile.textContent = inputNameEditPopup.value;
  activityProfile.textContent = inputActivityEditPopup.value;
  close();
}

function createCard(evt) {
  evt.preventDefault();
  addCard(inputNameAddPopup.value, inputSorceAddPopup.value);
  inputNameAddPopup.value = '';
  inputSorceAddPopup.value = '';
  close();
}

initialAddCards();
editBtn.addEventListener('click', open);
addBtn.addEventListener('click', open);
closeBtnEditPopup.addEventListener('click', close);
closeBtnAddPopup.addEventListener('click', close);
closeBtnImgPopup.addEventListener('click', close);
formEditPopup.addEventListener('submit', saveChanges);
formAddPopup.addEventListener('submit', createCard);
