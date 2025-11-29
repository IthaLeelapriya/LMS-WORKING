import React, { useState } from 'react';
import './ViewBadgesEarned.css';

const ViewBadgesEarned = ({ badges = [], onClose }) => {
  const [selectedBadge, setSelectedBadge] = useState(null);

  const badgeDetails = {
    'Web Fundamentals': {
      icon: '🌐',
      description: 'Mastered the basics of web development including HTML, CSS, and JavaScript fundamentals.',
      earnedDate: '2025-10-15',
      progress: 100,
      requirement: 'Complete Web Fundamentals course',
      rarity: 'Common',
      color: '#2d6a86'
    },
    'JavaScript Basics': {
      icon: '⚡',
      description: 'Demonstrated proficiency in JavaScript fundamentals, variables, functions, and DOM manipulation.',
      earnedDate: '2025-10-22',
      progress: 100,
      requirement: 'Score 80% or higher in JavaScript quiz',
      rarity: 'Common',
      color: '#f0ad4e'
    },
    'React Expert': {
      icon: '⚛️',
      description: 'Advanced knowledge of React including hooks, state management, and component architecture.',
      earnedDate: '2025-11-10',
      progress: 100,
      requirement: 'Complete React Advanced course',
      rarity: 'Uncommon',
      color: '#7cb342'
    },
    'Data Structures Master': {
      icon: '🏗️',
      description: 'Expert understanding of data structures including arrays, linked lists, trees, and graphs.',
      earnedDate: '2025-11-18',
      progress: 100,
      requirement: 'Complete Data Structures course with 90%+ score',
      rarity: 'Rare',
      color: '#d9534f'
    },
    'Learning Streak 7 Days': {
      icon: '🔥',
      description: 'Maintained a consistent learning streak for 7 consecutive days without missing a day.',
      earnedDate: '2025-11-29',
      progress: 100,
      requirement: 'Study for 7 consecutive days',
      rarity: 'Common',
      color: '#ff6b6b'
    },
    'First Assignment Submitted': {
      icon: '✍️',
      description: 'Completed and submitted your first assignment on the platform.',
      earnedDate: '2025-10-05',
      progress: 100,
      requirement: 'Submit your first assignment',
      rarity: 'Common',
      color: '#5cb85c'
    }
  };

  const allBadges = [
    'Web Fundamentals',
    'JavaScript Basics',
    'React Expert',
    'Data Structures Master',
    'Learning Streak 7 Days',
    'First Assignment Submitted'
  ];

  return (
    <div className="badges-wrapper">
      <div className="badges-card">
        <div className="badges-header">
          <h2>🏆 Badges Earned</h2>
          <button className="close-btn" onClick={onClose}>Back</button>
        </div>

        {selectedBadge ? (
          // Badge Detail View
          <div className="badge-detail">
            <button className="back-btn" onClick={() => setSelectedBadge(null)}>← Back to Badges</button>
            
            <div className="badge-detail-content">
              <div className="badge-detail-icon">{badgeDetails[selectedBadge].icon}</div>
              <h3>{selectedBadge}</h3>
              
              <div className="badge-meta">
                <div className="meta-item">
                  <span className="meta-label">Earned Date:</span>
                  <span className="meta-value">{badgeDetails[selectedBadge].earnedDate}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Rarity:</span>
                  <span className={`rarity ${badgeDetails[selectedBadge].rarity.toLowerCase()}`}>
                    {badgeDetails[selectedBadge].rarity}
                  </span>
                </div>
              </div>

              <div className="badge-description">
                <h4>Description</h4>
                <p>{badgeDetails[selectedBadge].description}</p>
              </div>

              <div className="badge-requirement">
                <h4>Requirement</h4>
                <p>{badgeDetails[selectedBadge].requirement}</p>
              </div>

              <div className="badge-progress">
                <h4>Achievement Progress</h4>
                <div className="progress-bar-detail">
                  <div className="progress-fill-detail" style={{ width: '100%' }}>100%</div>
                </div>
              </div>

              <button className="btn-share">📤 Share Badge</button>
            </div>
          </div>
        ) : (
          // Badges Grid View
          <>
            <div className="badges-stats">
              <div className="stat-item">
                <div className="stat-number">{allBadges.length}</div>
                <div className="stat-label">Badges Earned</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">85%</div>
                <div className="stat-label">Completion Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">12 / 20</div>
                <div className="stat-label">Total Available</div>
              </div>
            </div>

            <div className="badges-grid">
              {allBadges.map((badge) => (
                <div
                  key={badge}
                  className="badge-card"
                  onClick={() => setSelectedBadge(badge)}
                  style={{ borderTopColor: badgeDetails[badge].color }}
                >
                  <div className="badge-icon" style={{ color: badgeDetails[badge].color }}>
                    {badgeDetails[badge].icon}
                  </div>
                  <div className="badge-title">{badge}</div>
                  <div className="badge-rarity">{badgeDetails[badge].rarity}</div>
                  <div className="badge-date">{badgeDetails[badge].earnedDate}</div>
                </div>
              ))}
            </div>

            <div className="badges-footer">
              <h3>🎯 Keep Learning!</h3>
              <p>Earn more badges by completing courses, maintaining streaks, and achieving high scores. You've earned 6 out of 20 available badges. Keep up the great work!</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ViewBadgesEarned;
