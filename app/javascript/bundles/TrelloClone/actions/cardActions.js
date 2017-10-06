export const createCard = (card) => {
  return({
    type: 'CREATE_CARD',
    card: card
  });
};

export const updateCard = (id, cardAttrs) => {
  return({
    type: 'UPDATE_CARD',
    id,
    cardAttrs
  });
};
