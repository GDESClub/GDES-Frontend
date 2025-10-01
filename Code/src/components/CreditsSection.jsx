import React from 'react';
import SectionHeader from './SectionHeader';
import './AboutComponents.css';

const credits = [
    { name: 'QuantumDuck', role: 'Lead Developer' },
    { name: 'DarkKnight', role: 'UI/UX Design' },
    { name: 'LaserFalcon', role: 'Backend Engineer' },
    { name: 'FrostHex', role: 'Frontend Dev' },
    { name: 'IronPhantom', role: 'QA Tester' },
];

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
