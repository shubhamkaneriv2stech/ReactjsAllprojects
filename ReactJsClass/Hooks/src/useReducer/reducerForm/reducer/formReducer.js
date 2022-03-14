const formReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "HANDLE INPUT TEXT":
      return {
        ...state,
        [action.field]: action.data,
      };

    case "TOGGLE CONSENT":
      return {
        ...state,
        hasConsented: !state.hasConsented,
      };

    default:
      return state;
  }
};

export default formReducer;
