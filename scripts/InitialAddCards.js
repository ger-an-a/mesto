import { cardsContainer, createCard } from './script.js'
function initialAddCards() {
  const initialCards = [
    {
      title: 'Карачаевск',
      link: './images/Karachaevsk.jpg',
      alt: 'Сентинский храм.'
    },
    {
      title: 'Гора Эльбрус',
      link: './images/Elbrus.jpg',
      alt: 'Горы на горизонте.'
    },
    {
      title: 'Домбай',
      link: './images/Dombay.jpg',
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
  initialCards.forEach((item) => {
    cardsContainer.prepend(createCard(item));
  });
}

initialAddCards();
