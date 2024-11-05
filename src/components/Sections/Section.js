// src/components/Section.js
import React, { useState } from 'react';

const Section = ({ section, onAddSubsection, isEditable }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(section?.title || "Untitled Section"); // Fallback title if undefined
  const [newSubsectionTitle, setNewSubsectionTitle] = useState('');

  // Toggle edit mode
  const handleEditTitle = () => {
    setIsEditing(!isEditing);
  };

  // Handle adding a new subsection
  const handleAddSubsection = () => {
    if (newSubsectionTitle.trim() && onAddSubsection) {
      onAddSubsection(section.id, newSubsectionTitle);
      setNewSubsectionTitle(''); // Clear input
    }
  };

  return (
    <div className="ml-4 mt-2 border-l-2 border-gray-300 pl-2">
      <div className="flex items-center">
        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleEditTitle}
            className="border p-1 rounded mr-2"
          />
        ) : (
          <h3 className="text-lg font-semibold">{title}</h3>
        )}
        {isEditable && (
          <button onClick={handleEditTitle} className="ml-2 text-blue-500 hover:underline">
            {isEditing ? 'Save' : 'Edit'}
          </button>
        )}
      </div>

      {/* Render existing subsections */}
      <div className="ml-4">
        {section.subsections?.map((subsection) => (
          <Section
            key={subsection.id}
            section={subsection}
            onAddSubsection={onAddSubsection} // Recursive support for subsections
            isEditable={isEditable} // Allow editing titles based on role
          />
        ))}
      </div>

      {/* Add subsection input (Author-only) */}
      {onAddSubsection && (
        <div className="mt-2">
          <input
            type="text"
            placeholder="New Subsection Title"
            value={newSubsectionTitle}
            onChange={(e) => setNewSubsectionTitle(e.target.value)}
            className="border p-1 mr-2 rounded"
          />
          <button
            onClick={handleAddSubsection}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Subsection
          </button>
        </div>
      )}
    </div>
  );
};

export default Section;
