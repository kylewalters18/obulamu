const formatDate = date => new Date(date).toJSON().split('T')[0];

const newPatient = (state = {
  firstName: '',
  lastName: '',
  address: '',
  dob: '',
}, action) => {
  switch (action.type) {
    case 'UPDATE_FIRST_NAME':
      return { ...state, firstName: action.firstName };
    case 'UPDATE_LAST_NAME':
      return { ...state, lastName: action.lastName };
    case 'UPDATE_ADDRESS':
      return { ...state, address: action.address };
    case 'UPDATE_DOB':
      return { ...state, dob: formatDate(action.dob) };
    case 'ADD_NEW_PATIENT':
      return { ...state,
        firstName: '',
        lastName: '',
        address: '',
        dob: '',
      };
    default:
      return state;
  }
};

export default newPatient;
