/* 
В теме "Настраиваем обработку HTML" сказано, что файл index.js необходимо переместить в src.
В чеклисте также сказано, что HTML, CSS, JS-файлы и изображения должны быть в папке src.
Но еще в чеклисте сказано, что должна быть директория pages с файлами index.css и index.js.
В итоге должно быть 2 копии этих файлов в разных директориях? Или в чеклисте лишний пункт с прошлых работ?
Не совсем понятно, какая итоговая структура тогда должна быть
*/
import './index.css';
import { initialAddCards } from '../utils/initialAddCards.js';
import { formEdit, formAdd, editBtn, addBtn, popupSelectors, profileSelectors } from '../utils/constants.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';
import { validationSettings as settings } from '../utils/validationSettings.js';
import { createCard } from '../utils/createCard.js';

const formEditValidation = new FormValidator(settings, formEdit);
const formAddValidation = new FormValidator(settings, formAdd);
const info = new UserInfo({ userNameSelector: profileSelectors.title, activitySelector: profileSelectors.subtitle });
const popupImg = new PopupWithImage(popupSelectors.img);
const cardsList = initialAddCards(popupImg);
const editPopup = new PopupWithForm(popupSelectors.edit, (evt) => {
  evt.preventDefault();
  editPopup.getInputValues();
  info.setUserInfo(editPopup.formValues.userName, editPopup.formValues.activity);
  editPopup.close();
})
const addPopup = new PopupWithForm(popupSelectors.add, (evt) => {
  evt.preventDefault();
  addPopup.getInputValues();
  const inputData = {
    title: addPopup.formValues.title,
    link: addPopup.formValues.sorce,
    alt: addPopup.formValues.title
  };
  const cardElement = createCard(inputData, popupImg);
  cardsList.addItem(cardElement);
  formAddValidation.hideErrors();
  addPopup.close.bind(addPopup)();
});

formEditValidation.enableValidation();
formAddValidation.enableValidation();
editPopup.setEventListeners();
editBtn.addEventListener('click', () => {
  editPopup.setInputValues(info.getUserInfo());
  editPopup.open.bind(editPopup)();
});
addPopup.setEventListeners();
addBtn.addEventListener('click', addPopup.open.bind(addPopup));
