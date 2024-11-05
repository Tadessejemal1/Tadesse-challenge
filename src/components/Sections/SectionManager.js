// src/components/SectionManager.js
import React, { useState } from 'react';
import Section from './Section';
import { useAuth } from '../../context/AuthContext';

const SectionManager = () => {
  const { user } = useAuth();
  const [sections, setSections] = useState([]);

  const addSection = (title) => {
    if (user && user.role === 'Author') {
      setSections([...sections, { id: Date.now(), title, subsections: [] }]);
    }
  };

  const addSubsection = (parentId, title) => {
    const addSubsectionRecursive = (sections) => {
      return sections.map((section) => {
        if (section.id === parentId) {
          return {
            ...section,
            subsections: [
              ...section.subsections,
              { id: Date.now(), title, subsections: [] }
            ]
          };
        }
        return {
          ...section,
          subsections: addSubsectionRecursive(section.subsections)
        };
      });
    };
    setSections(addSubsectionRecursive(sections));
  };

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Manage Sections</h2>
      {user?.role === 'Author' && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="New Section Title"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                addSection(e.target.value);
                e.target.value = '';
              }
            }}
            className="border p-2 rounded w-full mb-2"
          />
        </div>
      )}

      {/* Display sections with appropriate permissions */}
      {sections.map((section) => (
        <Section
          key={section.id}
          section={section}
          onAddSubsection={user?.role === 'Author' ? addSubsection : null}
          isEditable={user?.role === 'Author' || user?.role === 'Collaborator'}
        />
      ))}
    </div>
  );
};

export default SectionManager;
