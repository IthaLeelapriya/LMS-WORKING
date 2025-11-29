import React from 'react';
import './UpcomingAssignments.css';

const UpcomingAssignments = ({ assignments = [], onClose }) => {
  return (
    <div className="upcoming-wrapper">
      <div className="upcoming-card">
        <div className="upcoming-header">
          <h2>Upcoming Assignments</h2>
          <button className="close-btn" onClick={onClose}>Back</button>
        </div>

        {assignments.length === 0 ? (
          <p className="no-assign">No upcoming assignments.</p>
        ) : (
          <ul className="assignment-list">
            {assignments.map((a) => (
              <li key={a.id} className="assignment-item">
                <div className="assignment-main">
                  <div className="assignment-title">{a.title}</div>
                  <div className="assignment-meta">Due: {a.dueDate}</div>
                </div>
                <div className="assignment-actions">
                  <button className="action-btn small">View Details</button>
                  <button className="action-btn small">Submit</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UpcomingAssignments;
