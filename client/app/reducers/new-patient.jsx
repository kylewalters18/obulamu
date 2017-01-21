const newPatient = (state = {
  firstName: '',
  lastName: '',
}, action) => {
  switch (action.type) {
    case 'SET_FIRST_NAME':
      return { ...state, firstName: action.firstName };
    case 'SET_LAST_NAME':
      return { ...state, lastName: action.lastName };
    case 'ADD_NEW_PATIENT':
      return { ...state, firstName: '', lastName: '' };
    default:
      return state;
  }
};

export default newPatient;
