// src/components/Syllabus.js
import React from 'react';
import './Syllabus.css';

const syllabusData = {
  beginner: {
    title: 'Beginner',
    description: 'Introduction to algorithms, data structures, and basic problem-solving techniques.',
    iconLink: 'https://example.com/icon-beginner'
  },
  intermediate: {
    title: 'Intermediate',
    description: 'Advanced data structures, algorithmic strategies, and dynamic programming.',
    iconLink: 'https://example.com/icon-intermediate'
  },
  advanced: {
    title: 'Advanced',
    description: 'Complex algorithms, graph theory, and optimization techniques.',
    iconLink: 'https://example.com/icon-advanced'
  }
};

const SyllabusCard = ({ title, description, iconLink }) => (
  <div className="syllabus-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={iconLink} target="_blank" rel="noopener noreferrer" className="icon-link">
      <img src={iconLink} alt={`${title} icon`} className="icon" />
    </a>
  </div>
);

const Syllabus = () => {
  return (
    <div className="syllabus">
      <h2>Syllabus</h2>
      {Object.values(syllabusData).map((item, index) => (
        <SyllabusCard
          key={index}
          title={item.title}
          description={item.description}
          iconLink={item.iconLink}
        />
      ))}
    </div>
  );
};

export default Syllabus;
