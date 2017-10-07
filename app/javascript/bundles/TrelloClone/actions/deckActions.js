export const createDeck = (deck) => {
  return({
    type: 'CREATE_DECK',
    deck: deck
  });
};

export const updateDeck = (id, deckAttrs) => {
  return({
    type: 'UPDATE_DECK',
    id,
    deckAttrs
  });
}
