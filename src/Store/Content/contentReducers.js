const SET_CONTENT = (state, action) => {
  state.data = action.payload;
};
const SET_CONTENT_BY_ID = (state, action) => {
  state.element = action.payload;
};

export default {
  SET_CONTENT,
  SET_CONTENT_BY_ID,
};
