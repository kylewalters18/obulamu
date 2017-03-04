import React, { PropTypes } from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';

import AppbarContainer from 'containers/appbar-container';
import NotesListContainer from 'containers/notes-list-container';
import NewNoteContainer from 'containers/new-note-container';

class Patient extends React.Component {

  componentDidMount() {
    this.props.loadNotes();
    this.props.updateNewNoteDate(Date.now());
    this.props.updateNewNoteTime(Date.now());
  }
  render() {
    return (
      <div>
        <AppbarContainer />
        <Card>
          <CardHeader
            title={`${this.props.firstName} ${this.props.lastName} ${this.props.curPatient}`}
            subtitle={`date of birth: ${this.props.dob}`}
          />
          <CardText />
        </Card>
        <NewNoteContainer />
        <NotesListContainer />
      </div>
    );
  }
}

Patient.propTypes = {
  loadNotes: PropTypes.func.isRequired,
  updateNewNoteDate: PropTypes.func.isRequired,
  updateNewNoteTime: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  curPatient: PropTypes.number.isRequired,
};

export default Patient;
