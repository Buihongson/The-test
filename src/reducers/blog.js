const initialState = {
  list: [],
  details: {}
};

const blogReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST":
      const newList = action.payload;

      return {
        ...state,
        list: newList,
      };

    case "GET_DETAILS":

      return {
        ...state,
        details: {...action.payload}
      };

    default:
      return state;
  }
};

export default blogReducers;
