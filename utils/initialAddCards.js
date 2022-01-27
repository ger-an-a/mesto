import { cardsSelector, initialCards } from './constants.js';
import { Section } from '../components/Section.js';
import { createCard } from '../utils/createCard.js';
export function initialAddCards(popup) {
  const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item, popup);
      cardsList.addItem(cardElement);
    },
  },
    cardsSelector
  );
  cardsList.renderItems();
  return cardsList;
}
