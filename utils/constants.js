export const cardsSelector = '.cards__grid';
export const formEdit = document.forms.edit;
export const formAdd = document.forms.add;
export const cardsContainer = document.querySelector(cardsSelector);
export const page = document.querySelector('.page');
export const editBtn = page.querySelector('.profile__edit-btn');
export const addBtn = page.querySelector('.profile__add-btn');
export const profileSelectors = { title: '.profile__title', subtitle: '.profile__subtitle' };
export const cardSelectors = { card: '.card', cardTemplate: '#card-template', likeBtn: '.card__like-btn', likeBtnActive: 'card__like-btn_active', deleteBtn: '.card__delete-btn', img: '.card__img', title: '.card__title' };
export const popupSelectors = { edit: '.popup_target_edit', add: '.popup_target_add', img: '.popup_target_img' };
export const popupClasses = { popup: 'popup', btnClose: 'button_target_close', container: 'popup__container', opened: 'popup_opened' };
export const viewportSelectors = { title: '.photo-viewport__title', img: '.photo-viewport__img' };
export const formSelectors = { form: '.form', input: '.form__input' };
import imgKarachaevsk from '../src/images/Karachaevsk.jpg';
import imgElbrus from '../src/images/Elbrus.jpg';
import imgDombay from '../src/images/Dombay.jpg';
export const initialCards = [
  {
    title: 'Карачаевск',
    link: imgKarachaevsk,
    alt: 'Сентинский храм.'
  },
  {
    title: 'Гора Эльбрус',
    link: imgElbrus,
    alt: 'Горы на горизонте.'
  },
  {
    title: 'Домбай',
    link: imgDombay,
    alt: 'Пик Инэ домбай.'
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Озеро зимой.'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Вулкан.'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Железная дорога'
  }
];

