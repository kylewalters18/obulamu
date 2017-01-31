import { List, ListItem } from 'material-ui/List';
import React, { PropTypes } from 'react';

import { Link } from 'react-router';
import Subheader from 'material-ui/Subheader';

const App = props => (
  <div>
    <List>
      <Subheader>Notes</Subheader>
      {props.notes.map((d, i) =>
        <ListItem
          key={i}
          primaryText={d.note}
        />
       )}
    </List>
  </div>
);

App.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
