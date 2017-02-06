const newNote = (state = {
  note: '',
  datetime: '',
  patient: '',
}, action) => {
  switch (action.type) {
    case 'UPDATE_NEW_NOTE':
      return { ...state, newNote: action.newNote };
    case 'UPDATE_NEW_NOTE_DATE_TIME':
      return { ...state, newNoteDateTime: action.newNoteDateTime };
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
