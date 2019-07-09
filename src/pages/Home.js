import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <Hero>
      <Banner title="Luxurious rooms" subtitle="Deluxe rooms starting at $299">
        <Link to="/rooms" className="btn btn-primary">
          Our rooms
        </Link>
      </Banner>
    </Hero>
  );
};

export default Home;
