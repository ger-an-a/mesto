export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
  popup.addEventListener('click', overlayClose);
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
  popup.removeEventListener('click', overlayClose);
}

function overlayClose(evt) {
  if (evt.target.classList.contains('button_target_close') || evt.target.classList.contains('popup') && !evt.target.classList.contains('popup__container')) {
    closePopup(document.querySelector('.popup_opened'));
  }
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}
