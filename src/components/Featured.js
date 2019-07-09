import React, { Component } from 'react';
import { RoomContext } from '../context';

export default class Featured extends Component {
  static contextType = RoomContext;

  render() {
    const { greeting, name } = this.context;

    return (
      <div>
        {greeting} {name} from featured rooms
      </div>
    );
  }
}
