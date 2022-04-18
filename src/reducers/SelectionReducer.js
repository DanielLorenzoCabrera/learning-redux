export default (state = null, action) => {
  return action.type === 'select_library' ? action.payload : state;
};
