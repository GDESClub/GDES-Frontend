import React from 'react';
import SectionHeader from './SectionHeader';
import './AboutComponents.css';

const members = new Array(12).fill({ name: 'Name', role: 'Member' });
members[0] = { name: 'Name', role: 'Secretary' };

const MembersSection = () => (
  <section className="members-section">
    <SectionHeader title="Our Members" iconType="flipped-L" />
    <div className="member-cards-container">
      {members.map((member, index) => (
        <div className="member-card" key={index}>
          <div className="member-icon" />
          <div className="member-info">
            <p>{member.name}</p>
            <span>{member.role}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default MembersSection;
