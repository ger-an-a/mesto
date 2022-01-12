import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { validationSettings as settings } from './validationSettings.js'
import { openPopup, closePopup } from './displayPopup.js';
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
export const cardsContainer = document.querySelector('.cards__grid');
const formEditValidation = new FormValidator(settings, formEdit);
const formAddValidation = new FormValidator(settings, formAdd);

export function createCard(item) {
  const card = new Card(item, '#card-template');
  const cardElement = card.generateCard()
  return cardElement
}

function openEditPopup() {
  openPopup(editPopup);
  inputName.value = nameProfile.textContent;
  inputActivity.value = activityProfile.textContent;
  formEditValidation.hideErrors();
}

function openAddPopup() {
  openPopup(addPopup);
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

function newCard(evt) {
  evt.preventDefault();
  const inputData = {
    title: inputTitle.value,
    link: inputSorce.value,
    alt: inputSorce.value
  };
  cardsContainer.prepend(createCard(inputData));
  inputTitle.value = '';
  inputSorce.value = '';
  formAddValidation.hideErrors();
  closePopup(addPopup);
}


formEditValidation.enableValidation();
formAddValidation.enableValidation();
editBtn.addEventListener('click', openEditPopup);
addBtn.addEventListener('click', openAddPopup);
formEdit.addEventListener('submit', saveChanges);
formAdd.addEventListener('submit', newCard);
