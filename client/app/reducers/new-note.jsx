const formatDate = date => new Date(date).toJSON().split('T')[0];
const formatTime = time => new Date(time).toJSON().split('T')[1];

const newNote = (state = {
  newNote: '',
  newNoteDate: '',
  newNoteTime: '',
  patient: '',
}, action) => {
  switch (action.type) {
    case 'UPDATE_NEW_NOTE':
      return { ...state, newNote: action.newNote };
    case 'UPDATE_NEW_NOTE_TIME':
      return { ...state, newNoteTime: formatTime(action.newNoteTime) };
    case 'UPDATE_NEW_NOTE_DATE':
      return { ...state, newNoteDate: formatDate(action.newNoteDate) };
    case 'UPDATE_NEW_NOTE_DATE_TIME':
      return { ...state, newNoteDateTime: action.newNoteDateTime };
    case 'ADD_NEW_NOTE':
      return { ...state,
        newNote: '',
        newNoteDate: '',
        newNoteTime: '',
        patient: '',
      };
    default:
      return state;
  }
};

export default newNote;
