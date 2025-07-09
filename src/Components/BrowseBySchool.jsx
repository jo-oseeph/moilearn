import React from 'react';
import { Users, Beaker, Calculator, Building, GraduationCap, Palette } from 'lucide-react';
import './BrowseBySchool.css';

const BrowseBySchool = () => {
  const schools = [
    {
      id: 1,
      name: "Engineering",
      notesCount: 342,
      icon: Calculator,
      color: "#4a9960"
    },
    {
      id: 2,
      name: "Science",
      notesCount: 298,
      icon: Beaker,
      color: "#4a9960"
    },
    {
      id: 3,
      name: "Business",
      notesCount: 186,
      icon: Building,
      color: "#4a9960"
    },
    {
      id: 4,
      name: "Education",
      notesCount: 124,
      icon: GraduationCap,
      color: "#4a9960"
    },
    {
      id: 5,
      name: "Arts",
      notesCount: 89,
      icon: Palette,
      color: "#4a9960"
    },
    {
      id: 6,
      name: "Social Sciences",
      notesCount: 156,
      icon: Users,
      color: "#4a9960"
    }
  ];

  const handleSchoolClick = (schoolId) => {
    console.log('Navigate to school:', schoolId);
  };

  return (
    <div className="browse-by-school-container">
      <div className="browse-by-school-header">
        <h2>Browse by School</h2>
        <button className="view-all-btn">View All</button>
      </div>
      
      <div className="schools-grid">
        {schools.map((school) => {
          const IconComponent = school.icon;
          return (
            <div 
              key={school.id} 
              className="school-card"
              onClick={() => handleSchoolClick(school.id)}
            >
              <div className="school-icon-container">
                <IconComponent className="school-icon" />
              </div>
              <h3 className="school-name">{school.name}</h3>
              <p className="school-notes-count">{school.notesCount} notes</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrowseBySchool;