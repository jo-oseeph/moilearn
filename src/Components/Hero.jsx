import React from 'react';
import { BookOpen, Users } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Animated background elements */}
      <div className="background-elements">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
        <div className="bg-orb bg-orb-3"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Share Knowledge,
            <br />
            <span className="hero-title-accent">Excel Together</span>
          </h1>
          
          <p className="hero-subtitle">
            Connect with fellow Moi University students, share notes, and build a collaborative learning community that empowers everyone to succeed academically.
          </p>
          
          <div className="hero-buttons">
            <button className="hero-btn hero-btn-primary">
              <BookOpen className="hero-btn-icon" />
              <span>Start Sharing Notes</span>
            </button>
            
            <button className="hero-btn hero-btn-secondary">
              <Users className="hero-btn-icon" />
              <span>Join Community</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="floating-element floating-element-1"></div>
      <div className="floating-element floating-element-2"></div>
      <div className="floating-element floating-element-3"></div>
    </div>
  );
};

export default Hero;