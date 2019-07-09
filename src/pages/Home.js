import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Home = () => {
  return (
    <Fragment>
      <Hero>
        <Banner
          title="Luxurious rooms"
          subtitle="Deluxe rooms starting at $299">
          <Link to="/rooms" className="btn btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </Fragment>
  );
};

export default Home;
