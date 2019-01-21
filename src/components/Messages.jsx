import React from 'react';

var Messages = props => (
  <div>
    {props.messages.map(msg => {
      return (
        <div className="chat">
          <div className="user" style={{ fontWeight: 'bold' }}>
            {msg.name}:
          </div>
          <div className="text">{msg.message}</div>
        </div>
      );
    })}
  </div>
);

export default Messages;
