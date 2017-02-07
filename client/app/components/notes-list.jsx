import { List, ListItem } from 'material-ui/List';
import React, { PropTypes } from 'react';

import Subheader from 'material-ui/Subheader';

const NotesList = props => (
  <div>
    <List>
      <Subheader>Notes</Subheader>
      {props.notes.map((item, i) =>
        <ListItem
          key={i}
          primaryText={item.note}
        />
       )}
    </List>
  </div>
);

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NotesList;
