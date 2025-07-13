import React from 'react';
import SectionHeader from './SectionHeader';
import './AboutComponents.css';

const credits = new Array(28).fill({ name: 'Name', role: 'Role' });

const CreditsSection = () => (
  <section className="credits-section">
    <SectionHeader title="Website Credits" iconType="diagonal" />
    <div className="credits-grid">
      {credits.map((credit, index) => (
        <div className="credit-item" key={index}>
          {credit.name} : {credit.role}
        </div>
      ))}
    </div>
  </section>
);

export default CreditsSection;
