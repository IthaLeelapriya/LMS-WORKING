import React from 'react';
import './AccessRecordedLectures.css';

const AccessRecordedLectures = ({ lectures = [], onClose }) => {
  return (
    <div className="lectures-wrapper">
      <div className="lectures-card">
        <div className="lectures-header">
          <h2>📹 Recorded Lectures</h2>
          <button className="close-btn" onClick={onClose}>Back</button>
        </div>

        {lectures.length === 0 ? (
          <p className="no-lectures">No recorded lectures available.</p>
        ) : (
          <ul className="lectures-list">
            {lectures.map((lecture) => (
              <li key={lecture.id} className="lecture-item">
                <div className="lecture-content">
                  <div className="lecture-title">{lecture.title}</div>
                  <div className="lecture-course">{lecture.course}</div>
                  <div className="lecture-date">Uploaded: {lecture.uploadDate}</div>
                  <div className="lecture-duration">Duration: {lecture.duration}</div>
                </div>
                <div className="lecture-actions">
                  <button className="action-btn primary">▶ Watch</button>
                  <button className="action-btn secondary">⬇ Download</button>
                  <button className="action-btn secondary">📝 Notes</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AccessRecordedLectures;
