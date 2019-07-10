import React from 'react';
import Loading from '../components/Loading';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { RoomConsumer } from '../context';

export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value;

        if (loading) {
          return <Loading />;
        }

        return (
          <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
