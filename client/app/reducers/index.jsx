import { combineReducers } from 'redux';
import newPatient from 'reducers/new-patient';
import patients from 'reducers/patients';

const reducer = combineReducers({
  patients,
  newPatient,
});

export default reducer;
