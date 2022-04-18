export default (state = null, action) => {
    return action.type === 'mark_as_done' ? action.payload : state;
  };
  