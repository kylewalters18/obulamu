const notes = (state = {
  notes: [],
}, action) => {
  switch (action.type) {
    case 'RECEIVE_NOTES':
      return { ...state, notes: action.notes };
    default:
      return state;
  }
};

export default notes;
