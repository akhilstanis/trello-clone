export const createBoard = (board) => {
  return({
    type: 'CREATE_BOARD',
    board
  });
};

export const updateBoard = (id, boardAttrs) => {
  return({
    type: 'UPDATE_BOARD',
    id,
    boardAttrs
  });
};
