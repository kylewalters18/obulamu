import { List, ListItem } from 'material-ui/List';
import React, { PropTypes } from 'react';

import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import { Link } from 'react-router';
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
          rightIcon={<CommunicationChatBubble />}
        />
       )}
    </List>
  </div>

  //   <div>First Name, Last Name, Age</div>
  //   <ul>
  //     {props.patients.map((d, i) =>
  //       <li key={i}>
  //         <Link to={`/patient/${d.id}`}>
  //           {d.first_name} {d.last_name}, {d.age}
  //         </Link>
  //       </li>
  //           )}
  //   </ul>
  // </div>
);

App.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
