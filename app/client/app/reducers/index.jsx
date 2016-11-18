import { combineReducers } from 'redux';
import patients from 'reducers/patients';

const reducer = combineReducers({
  patients,
});

export default reducer;
