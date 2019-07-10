import React from 'react';
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
    <div>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomsContainer);
