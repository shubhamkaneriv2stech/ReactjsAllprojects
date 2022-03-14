const intialState = 5;
const mulDiv = (state = intialState, action) => {
  switch (action.type) {
    case "MULTIPLICATION":
      return state * action.payload;
    case "DIVISION":
      return state / 5;

    default:
      return state;
  }
};

export default mulDiv;
