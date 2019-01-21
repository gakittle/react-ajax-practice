import React from 'react';

var Sender = props => (
  <div>
    Name:
    <input id="name" />
    Message:
    <input id="msg" />
    <button
      onClick={() => {
        props.onSend(
          document.getElementById('name').value,
          document.getElementById('msg').value
        );
      }}
    >
      Send Message!
    </button>
  </div>
);

export default Sender;
