export const createCard = (card) => {
  return({
    type: 'CREATE_CARD',
    card: card
  });
};
