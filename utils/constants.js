export const cardsSelector = '.cards__grid';
export const formEdit = document.forms.edit;
export const formAdd = document.forms.add;
export const page = document.querySelector('.page');
export const editBtn = page.querySelector('.profile__edit-btn');
export const addBtn = page.querySelector('.profile__add-btn');
export const profileSelectors = { title: '.profile__title', subtitle: '.profile__subtitle' };
export const popupSelectors = { edit: '.popup_target_edit', add: '.popup_target_add', img: '.popup_target_img' };
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

