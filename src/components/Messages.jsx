import React from 'react';

var Messages = props => (
  <ul>
    {props.messages.map(msg => {
      return <li>{msg.message}</li>;
    })}
  </ul>
);

export default Messages;
