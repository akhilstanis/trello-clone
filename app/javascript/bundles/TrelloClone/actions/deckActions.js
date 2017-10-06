export const createDeck = (deck) => {
  return({
    type: 'CREATE_DECK',
    deck: deck
  });
};
