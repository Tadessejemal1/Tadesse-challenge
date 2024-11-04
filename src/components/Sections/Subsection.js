// src/components/Sections/Subsection.js
import React from 'react';

const Subsection = ({ subsection }) => {
  return (
    <div className="ml-4 mt-2 border-l pl-2">
      <h3 className="font-medium">{subsection.title}</h3>
      <p>{subsection.content}</p>
    </div>
  );
};

export default Subsection;