function open() {
  inputName.setAttribute('value', profileName.textContent);
  inputActivity.setAttribute('value', profileActivity.textContent);
  popup.classList.add('popup_opened');
}

function close() {
  popup.classList.remove('popup_opened');
}

function save(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileActivity.textContent = inputActivity.value;
  close();
}

let page = document.querySelector('.page');
let editBtn = page.querySelector('.profile__edit-btn');
let profileName = page.querySelector('.profile__title');
let profileActivity = page.querySelector('.profile__subtitle');
let popup = page.querySelector('.popup');
let resetBtn = popup.querySelector('.popup__reset-btn');
let inputName = popup.querySelector('.popup__input_name');
let inputActivity = popup.querySelector('.popup__input_activity');
editBtn.addEventListener('click', open);
resetBtn.addEventListener('click', close);
popup.addEventListener('submit', save);
