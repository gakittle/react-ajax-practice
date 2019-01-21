import React from 'react';
import Sender from './Sender.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  onSend(name, msg) {
    console.log('moo:', name, msg);
  }

  render() {
    return (
      <div>
        <div className="messages">Hello world</div>
        <div className="sender">
          <Sender onSend={this.onSend.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
