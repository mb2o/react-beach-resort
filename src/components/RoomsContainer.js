import React, { Fragment } from 'react';
import Loading from '../components/Loading';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { withRoomConsumer } from '../context';

function RoomsContainer({ context }) {
  const { loading, rooms, sortedRooms } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </Fragment>
  );
}

export default withRoomConsumer(RoomsContainer);
