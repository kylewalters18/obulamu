import { List, ListItem } from 'material-ui/List';
import React, { PropTypes } from 'react';

import { Link } from 'react-router';
import Person from 'material-ui/svg-icons/social/person';
import Subheader from 'material-ui/Subheader';

const App = props => (
  <div>
    <List>
      <Subheader>Patients</Subheader>
      {props.patients.map((d, i) =>
        <ListItem
          key={i}
          primaryText={`${d.first_name}  ${d.last_name}`}
          containerElement={<Link to={`/patient/${d.id}`} />}
          rightIcon={<Person />}
        />
       )}
    </List>
  </div>
);

App.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
