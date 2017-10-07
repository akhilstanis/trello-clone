export const createBoard = (board) => {
  return({
    type: 'CREATE_BOARD',
    board
  });
};
