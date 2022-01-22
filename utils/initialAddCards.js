import { cardsSelector, initialCards, cardSelectors, popupSelectors } from './constants.js'
import { Section } from '../components/Section.js'
import { Card } from '../components/Card.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
export function initialAddCards() {
  const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, cardSelectors.cardTemplate, () => {
        const popupImg = new PopupWithImage(popupSelectors.img, item);
        popupImg.open.bind(popupImg)();
      });
      const cardElement = card.generateCard();
      cardsList.addItem(cardElement);
    },
  },
    cardsSelector
  );
  cardsList.renderItems();
}


