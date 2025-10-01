import React from 'react';
import SectionHeader from './SectionHeader';
import './AboutComponents.css';

const AboutSection = () => (
  <section className="about-section">
    <SectionHeader title="About GDES" iconType="L" />
    <p>
      GDES is the official Game Design and Development Club of IIT Guwahati. We are a passionate community of students dedicated to exploring the art and science of creating interactive experiences. From coding and art to narrative design and sound engineering, we embrace all facets of game development. Our mission is to foster a collaborative environment where members can learn, create, and share their passion for games. Whether you're a seasoned developer or just starting, GDES is the place to level up your skills.
    </p>
  </section>
);

export default AboutSection;
