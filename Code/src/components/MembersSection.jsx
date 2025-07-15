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
          <svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg" className='member-box'>
            <path d="M74.7041 0.5L117.5 43.2959V117.5H0.5V0.5H74.7041Z" stroke="#A8A2FF" />
          </svg>
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
