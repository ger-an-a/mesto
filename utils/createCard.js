import { Card } from "../components/Card.js";
export function createCard(cardData, popupImg, popupDel, myId, api) {
  const card = new Card(cardData, '#card-template', () => {
    popupDel.open(card);
  }, () => {
    popupImg.open(cardData);
  }, () => {
    Promise.any([api.getInitialCards(), api.getInitialInfo()])
    card.handleLike(api);
  });
  const cardElement = card.generateCard(myId);
  return cardElement;
}
