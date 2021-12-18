import { Card, addCard } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { validationSettings as settings } from './ValidationSettings.js'
import { openPopup, closePopup } from './DisplayPopup.js';
const page = document.querySelector('.page');
const nameProfile = page.querySelector('.profile__title');
const activityProfile = page.querySelector('.profile__subtitle');
const formEdit = document.forms.edit;
const inputName = formEdit.elements.forename;
const inputActivity = formEdit.elements.activity;
const formAdd = document.forms.add;
const inputTitle = formAdd.elements.title;
const inputSorce = formAdd.elements.sorce;
const editPopup = page.querySelector('.popup_target_edit');
const addPopup = page.querySelector('.popup_target_add');
const editBtn = page.querySelector('.profile__edit-btn');
const addBtn = page.querySelector('.profile__add-btn');

function disabledBtn(Btn) {
  Btn.classList.add('form__submit_inactive');
  Btn.setAttribute('disabled', true);
}

function openEditPopup() {
  openPopup(editPopup);
  inputName.value = nameProfile.textContent;
  inputActivity.value = activityProfile.textContent;
  const formEditValidation = new FormValidator(settings, formEdit);
  formEditValidation.enableValidation();
  formEditValidation.hideErrors();
}

function openAddPopup() {
  openPopup(addPopup);
  const formAddValidation = new FormValidator(settings, formAdd);
  formAddValidation.enableValidation();
  if ((inputTitle.value == '') && (inputSorce.value == '')) {
    formAddValidation.hideErrors();
  }
}

function saveChanges(evt) {
  evt.preventDefault();
  nameProfile.textContent = inputName.value;
  activityProfile.textContent = inputActivity.value;
  closePopup(editPopup);
}

function createCard(evt) {
  evt.preventDefault();
  const inputData = {
    title: inputTitle.value,
    link: inputSorce.value,
    alt: inputSorce.value
  };
  const card = new Card(inputData, '#card-template');
  addCard(card.generateCard());
  inputTitle.value = '';
  inputSorce.value = '';
  disabledBtn(addPopup.querySelector('.form__submit-btn'));
  closePopup(addPopup);
}

editBtn.addEventListener('click', openEditPopup);
addBtn.addEventListener('click', openAddPopup);
formEdit.addEventListener('submit', saveChanges);
formAdd.addEventListener('submit', createCard);
