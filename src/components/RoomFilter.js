import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  let types = getUnique(rooms, 'type');
  types = ['all', ...types];
  types = types.map((type, index) => (
    <option key={index} value={type}>
      {type}
    </option>
  ));

  let capacities = getUnique(rooms, 'capacity');
  capacities = capacities.map((capacity, index) => (
    <option key={index} value={capacity}>
      {capacity}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}>
            {types}
          </select>
        </div>
        {/* end select type   */}

        {/* select capacity */}
        <div className="form-group">
          <label htmlFor="capacity">room type</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}>
            {capacities}
          </select>
        </div>
        {/* end select capacity   */}
      </form>
    </section>
  );
}
