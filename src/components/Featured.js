import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';

export default class Featured extends Component {
  static contextType = RoomContext;

  render() {
    const { featuredRooms: rooms } = this.context;

    return (
      <div>
        from featured rooms
        <Room />
        <Loading />
      </div>
    );
  }
}
