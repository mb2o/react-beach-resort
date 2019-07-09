import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free cocktails',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo.'
      },
      {
        icon: <FaHiking />,
        title: 'Endless hiking',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo.'
      },

      {
        icon: <FaShuttleVan />,
        title: 'Free shuttlevan',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo.'
      },
      {
        icon: <FaBeer />,
        title: 'Strongest beer',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo.'
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((service, index) => (
            <article key={index} className="service">
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}
