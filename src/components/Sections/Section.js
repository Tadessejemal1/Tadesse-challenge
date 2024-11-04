// src/components/Sections/Section.js
import React, { useState } from 'react';
import Subsection from './Subsection';

const Section = ({ section }) => {
  // Initialize state for subsections
  const [subsections, setSubsections] = useState([]);

  // Check if the section prop is undefined and handle accordingly
  if (!section) {
    return <div>No section available</div>; // Handle undefined section
  }

  const addSubsection = () => {
    const newSubsection = { id: Date.now(), title: '', content: '' };
    setSubsections([...subsections, newSubsection]);
  };

  return (
    <div className="mb-4 border p-4 rounded bg-gray-50">
      <h2 className="font-semibold text-xl">{section.title}</h2>
      <button onClick={addSubsection} className="mt-2 bg-green-500 text-white p-1 rounded">
        Add Subsection
      </button>
      {subsections.map((subsection) => (
        <Subsection key={subsection.id} subsection={subsection} />
      ))}
    </div>
  );
};

export default Section;
