const SET_INCREMENT = (state, action) => {
  const itemIndex = state.findIndex((item) => item.id === action.payload);
  state[itemIndex].value++;
};

const SET_DECREMENT = (state, action) => {
  const itemIndex = state.findIndex((item) => item.id === action.payload);
  state[itemIndex].value--;
};

export default {
  SET_INCREMENT,
  SET_DECREMENT,
};
