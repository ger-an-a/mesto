import { Card } from "../components/Card.js";
export function createCard(cardData, popup) {
  const card = new Card(cardData, '#card-template', () => {
    popup.open(cardData);
  });
  const cardElement = card.generateCard();
  return cardElement;
}
