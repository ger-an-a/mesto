import './index.css';
import { initialAddInfo } from '../utils/initialAddInfo.js';
import { initialAddCards } from '../utils/initialAddCards.js';
import { formEdit, formAdd, formAvatar, editBtn, addBtn, avatarBtn, popupSelectors, profileSelectors } from '../utils/constants.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithConfirm } from '../components/PopupWithConfirm.js';
import { FormValidator } from '../components/FormValidator.js';
import { validationSettings as settings } from '../utils/validationSettings.js';
import { createCard } from '../utils/createCard.js';
import { Api } from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-34',
  headers: {
    authorization: 'c0d2a2f4-6654-436b-b9fd-4446d91e7925',
    'Content-Type': 'application/json'
  }
});
const formEditValidation = new FormValidator(settings, formEdit);
const formAddValidation = new FormValidator(settings, formAdd);
const formAvatarValidation = new FormValidator(settings, formAvatar);
const imgPopup = new PopupWithImage(popupSelectors.img);
const delPopup = new PopupWithConfirm(popupSelectors.del, (evt) => {
  evt.preventDefault();
  delPopup.delete(api);
  delPopup.close();
});

formEditValidation.enableValidation();
formAddValidation.enableValidation();
formAvatarValidation.enableValidation();
Promise.all([api.getInitialCards(), api.getInitialInfo()])
  .then(([cardsData, userData]) => {
    const myId = userData._id;
    const info = initialAddInfo(userData, { userNameSelector: profileSelectors.title, activitySelector: profileSelectors.subtitle, avatarSelector: profileSelectors.avatar });
    const cardsList = initialAddCards(cardsData, myId, imgPopup, delPopup, api);
    const avatarPopup = new PopupWithForm(popupSelectors.avatar, (evt) => {
      evt.preventDefault();
      avatarPopup.loading(true);
      avatarPopup.getInputValues();
      api.patchAvatar(avatarPopup.formValues.sorce)
        .then(data => {
          info.setAvatar(data.avatar);
        })
        .finally(() => {
          avatarPopup.loading(false);
          avatarPopup.close();
          avatarPopup.reset();
        })
    });
    const editPopup = new PopupWithForm(popupSelectors.edit, (evt) => {
      evt.preventDefault();
      editPopup.loading(true);
      editPopup.getInputValues();
      api.patchInfo(editPopup.formValues.userName, editPopup.formValues.activity)
        .then(data => {
          info.setUserInfo(data.name, data.about);
        })
        .finally(() => {
          editPopup.loading(false);
          editPopup.close();
        })
    });
    const addPopup = new PopupWithForm(popupSelectors.add, (evt) => {
      evt.preventDefault();
      addPopup.loading(true);
      addPopup.getInputValues();
      api.postCard(addPopup.formValues.title, addPopup.formValues.sorce)
        .then(data => {
          const cardElement = createCard(data, myId, imgPopup, delPopup, api);
          cardsList.addItem(cardElement);
          formAddValidation.hideErrors();
        })
        .finally(() => {
          avatarPopup.loading(false);
          addPopup.close.bind(addPopup)();
          addPopup.reset.bind(addPopup)();
        })
    });

    avatarBtn.addEventListener('click', avatarPopup.open.bind(avatarPopup));
    editBtn.addEventListener('click', () => {
      editPopup.setInputValues(info.getUserInfo());
      editPopup.open.bind(editPopup)();
    });
    addBtn.addEventListener('click', addPopup.open.bind(addPopup));
  });
