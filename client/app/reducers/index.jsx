import { combineReducers } from 'redux';
import newPatient from 'reducers/new-patient';
import patients from 'reducers/patients';
import newNote from 'reducers/new-note';
import notes from 'reducers/notes';

const reducer = combineReducers({
  newPatient,
  patients,
  newNote,
  notes,
});

export default reducer;
