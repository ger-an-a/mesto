let page = document.querySelector('.page');
let editBtn = page.querySelector('.profile__edit-btn');
let profileName = page.querySelector('.profile__title');
let profileActivity = page.querySelector('.profile__subtitle');
let popup = page.querySelector('.popup');
let closeBtn = popup.querySelector('.popup__close-btn');
let form = popup.querySelector('.form');
let inputName = form.querySelector('input[name="forename"]');
let inputActivity = form.querySelector('input[name="activity"]');

function open() {
  inputName.value = profileName.textContent;
  inputActivity.value = profileActivity.textContent;
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

editBtn.addEventListener('click', open);
closeBtn.addEventListener('click', close);
form.addEventListener('submit', save);
