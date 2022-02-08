import { cardsSelector } from './constants.js';
import { Section } from '../components/Section.js';
import { createCard } from '../utils/createCard.js';
export function initialAddCards(initialCards, myId, popup, popupDel, api) {
  const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item, popup, popupDel, myId, api);
      if(item.owner._id !== myId){
        cardElement.querySelector('.card__delete-btn').remove();
      }
      cardsList.addInitialItem(cardElement);},
    },
    cardsSelector
  );
  cardsList.renderItems();
  return cardsList;

}
