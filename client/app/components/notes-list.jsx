import { List, ListItem } from 'material-ui/List';
import React, { PropTypes } from 'react';

const formatDateTime = dateTime => new Date(dateTime).toLocaleString();

const NotesList = props => (
  <div>
    <List>
      {props.notes.map((item, i) =>
        <ListItem
          key={i}
          primaryText={item.note}
          secondaryText={formatDateTime(item.datetime)}
        />
       )}
    </List>
  </div>
);

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NotesList;
