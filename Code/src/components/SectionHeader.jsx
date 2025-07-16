import React from 'react';
import './SectionHeader.css';

const DotIcon = ({ type }) => {

  switch (type) {
    case 'L':
      return (
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8.25003" cy="8.25003" r="7.75003" stroke="#79FFB6" />
          <circle cx="8.25003" cy="24.75" r="7.75003" stroke="#79FFB6" />
          <circle cx="24.75" cy="24.75" r="7.75003" stroke="#79FFB6" />
        </svg>

      );
    case 'flipped-L':
      return (
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24.75" cy="24.75" r="7.75003" transform="rotate(180 24.75 24.75)" stroke="#79FFB6" />
          <circle cx="24.75" cy="8.24997" r="7.75003" transform="rotate(180 24.75 8.24997)" stroke="#79FFB6" />
          <circle cx="8.24997" cy="8.24997" r="7.75003" transform="rotate(180 8.24997 8.24997)" stroke="#79FFB6" />
        </svg>

      );
    case 'diagonal':
      return (
        <svg width="33" height="50" viewBox="0 0 33 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24.75" cy="24.75" r="7.75003" transform="rotate(180 24.75 24.75)" stroke="#79FFB6" />
          <circle cx="24.75" cy="8.24997" r="7.75003" transform="rotate(180 24.75 8.24997)" stroke="#79FFB6" />
          <circle cx="8.25009" cy="8.24997" r="7.75003" transform="rotate(180 8.25009 8.24997)" stroke="#79FFB6" />
          <circle cx="8.24997" cy="25.25" r="7.75003" transform="rotate(180 8.24997 25.25)" stroke="#79FFB6" />
          <circle cx="8.25009" cy="41.25" r="7.75003" transform="rotate(180 8.25009 41.25)" stroke="#79FFB6" />
        </svg>

      );

    case 'triangle':
      return (
        <svg width="33" height="50" viewBox="0 0 33 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24.7501" cy="24.75" r="7.75003" transform="rotate(180 24.7501 24.75)" stroke="#79FFB6" />
          <circle cx="8.25021" cy="8.24997" r="7.75003" transform="rotate(180 8.25021 8.24997)" stroke="#79FFB6" />
          <circle cx="8.25009" cy="25.25" r="7.75003" transform="rotate(180 8.25009 25.25)" stroke="#79FFB6" />
          <circle cx="24.2502" cy="41.25" r="7.75003" transform="rotate(180 24.2502 41.25)" stroke="#79FFB6" />
        </svg>
      );


    default:
      return null;
  }
};


const SectionHeader = ({ title, iconType }) => (
  <div className="section-header">
    <DotIcon type={iconType} />
    <h2>{title}</h2>
  </div>
);

export default SectionHeader;
