import React from 'react';
import axios from 'axios';


export default class FriendInput extends React.Component {
  state = {
    friend: null,
    input: '',
  }

  render() {
    return (
      <div>
        <input onChange={this.changeInput}></input>
      </div>
    );
  }
}