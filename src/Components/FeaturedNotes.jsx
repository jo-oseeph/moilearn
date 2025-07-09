import React from 'react';
import { Star, Eye, Download } from 'lucide-react';
import './FeaturedNotes.css';

const FeaturedNotes = () => {
  const featuredNotes = [
    {
      id: 1,
      title: "Advanced Calculus Integration Methods",
      school: "School of Engineering",
      year: "Year 3",
      subject: "Mathematics",
      rating: 4.8,
      downloads: 234,
      color: "green"
    },
    {
      id: 2,
      title: "Organic Chemistry Mechanisms",
      school: "School of Science",
      year: "Year 2",
      subject: "Chemistry",
      rating: 4.6,
      downloads: 189,
      color: "green"
    },
    {
      id: 3,
      title: "Software Engineering Design Patterns",
      school: "School of Engineering",
      year: "Year 4",
      subject: "Computer Science",
      rating: 4.9,
      downloads: 312,
      color: "green"
    }
 
  ];

  const handlePreview = (noteId) => {
    console.log('Preview note:', noteId);
  };

  const handleDownload = (noteId) => {
    console.log('Download note:', noteId);
  };

  return (
    <div className="featured-notes-container">
      <div className="featured-notes-header">
        <h2>Featured Notes</h2>
        <button className="see-all-btn">See All</button>
      </div>
      
      <div className="featured-notes-grid">
        {featuredNotes.map((note) => (
          <div key={note.id} className="featured-note-card">
            <div className="note-card-content">
              <div className="note-header">
                <h3 className="note-title">{note.title}</h3>
                <div className="note-rating">
                  <Star className="star-icon" fill="currentColor" />
                  <span>{note.rating}</span>
                </div>
              </div>
              
              <div className="note-info">
                <p className="note-school">{note.school} • {note.year}</p>
                <span className="note-subject">{note.subject}</span>
              </div>
              
              <div className="note-footer">
                <div className="note-downloads">
                  <span>{note.downloads} downloads</span>
                </div>
                <div className="note-actions">
                  <button 
                    className="preview-btn"
                    onClick={() => handlePreview(note.id)}
                  >
                    <Eye className="action-icon" />
                    Preview
                  </button>
                  <button 
                    className="download-btn"
                    onClick={() => handleDownload(note.id)}
                  >
                    <Download className="action-icon" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedNotes;