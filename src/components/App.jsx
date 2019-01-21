import React from 'react';
import Sender from './Sender.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  onSend(name, message) {
    console.log('moo:', name, message);
    var post = { name, message };
    console.log(post);
    $.ajax({
      url:
        'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf111/greeting',
      type: 'POST',
      data: JSON.stringify(post),
      contentType: 'application/json',
      success: data => {
        console.log('moooooo!!', data);
      },
      error: err => {
        console.log('error: failed to send data'), err;
      }
    });
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
