const formatDate = date => new Date(date).toJSON().split('T')[0];

const newNote = (state = {
  note: '',
  datetime: '',
  patient: '',
}, action) => {
  switch (action.type) {
    case 'UPDATE_NEW_NOTE':
      return { ...state, newNote: action.newNote };
    case 'ADD_NEW_NOTE':
      return { ...state,
        note: '',
        datetime: '',
        patient: '',
      };
    default:
      return state;
  }
};

export default newNote;
