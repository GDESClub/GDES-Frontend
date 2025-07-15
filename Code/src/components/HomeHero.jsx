import React from 'react';
import './HomeHero.css';

function HomeHero() {
  return (
    <section className="home-hero">
      <h1 className="hero-title">GDes IITG</h1>
      <p className="hero-description">
        GDes – the Game Design and Development Club of IIT Guwahati.
        Lorem ipsum lorem ipsum lalala lalala lorem ipsum docodo lorem ipsum lalala...
      </p>
      <a href="#readmore" className="hero-readmore">Read more...</a>
    </section>
  );
}

export default HomeHero;
