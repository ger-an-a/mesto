import './index.css';
import { initialAddCards } from '../utils/initialAddCards.js';
import { cardsSelector, formEdit, formAdd, editBtn, addBtn, popupSelectors, cardSelectors, profileSelectors } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { FormValidator } from '../components/FormValidator.js';
import { validationSettings as settings } from '../utils/validationSettings.js'

const formEditValidation = new FormValidator(settings, formEdit);
const formAddValidation = new FormValidator(settings, formAdd);
const info = new UserInfo({ userNameSelector: profileSelectors.title, activitySelector: profileSelectors.subtitle });
const editPopup = new PopupWithForm(popupSelectors.edit, (evt) => {
  evt.preventDefault();
  editPopup._getInputValues();
  info.setUserInfo(editPopup._formValues.userName, editPopup._formValues.activity);
  editPopup.close();
})
const addPopup = new PopupWithForm(popupSelectors.add, (evt) => {
  evt.preventDefault();
  addPopup._getInputValues();
  const inputData = [{
    title: addPopup._formValues.title,
    link: addPopup._formValues.sorce,
    alt: addPopup._formValues.title
  }];
  const cardsList = new Section({
    items: inputData,
    renderer: (item) => {
      const card = new Card(item, cardSelectors.cardTemplate, () => {
        const popupImg = new PopupWithImage(popupSelectors.img, item);
        popupImg.open.bind(popupImg)();
      });
      const cardElement = card.generateCard();
      console.log(cardElement)
      cardsList.addItem(cardElement);
    },
  },
    cardsSelector
  );
  cardsList.renderItems.bind(cardsList)();
  formAddValidation.hideErrors();
  addPopup.close.bind(addPopup)();
});

initialAddCards();
formEditValidation.enableValidation();
formAddValidation.enableValidation();
editPopup.setEventListeners();
editBtn.addEventListener('click', () => {
  editPopup.setInputValues(info.getUserInfo());
  editPopup.open.bind(editPopup)();
});
addPopup.setEventListeners();
addBtn.addEventListener('click', addPopup.open.bind(addPopup));


