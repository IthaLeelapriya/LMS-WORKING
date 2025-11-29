import React, { useState } from 'react';
import './ViewEnrolledStudents.css';

const ViewEnrolledStudents = ({ students = [], onClose }) => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="students-wrapper">
      <div className="students-card">
        <div className="students-header">
          <h2>👥 Enrolled Students</h2>
          <button className="close-btn" onClick={onClose}>Back</button>
        </div>

        <div className="students-controls">
          <input
            className="search-input"
            placeholder="Search by name or email..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <div className="count">Showing {filtered.length} of {students.length}</div>
        </div>

        <div className="students-grid">
          <div className="students-list">
            {filtered.length === 0 ? (
              <p className="no-students">No students match your search.</p>
            ) : (
              filtered.map(s => (
                <div key={s.id} className={`student-item ${selected && selected.id === s.id ? 'selected' : ''}`} onClick={() => setSelected(s)}>
                  <div className="student-avatar">{s.name.split(' ').map(n => n[0]).slice(0,2).join('')}</div>
                  <div className="student-info">
                    <div className="student-name">{s.name}</div>
                    <div className="student-email">{s.email}</div>
                    <div className="student-progress">Progress: {s.progress}%</div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="student-detail-panel">
            {selected ? (
              <div className="student-detail">
                <h3>{selected.name}</h3>
                <div className="detail-row"><strong>Email:</strong> {selected.email}</div>
                <div className="detail-row"><strong>Enrolled On:</strong> {selected.enrolledDate}</div>
                <div className="detail-row"><strong>Progress:</strong> {selected.progress}%</div>
                <div className="detail-row"><strong>Last Active:</strong> {selected.lastActive}</div>
                <div className="detail-actions">
                  <button className="action-btn primary">View Submissions</button>
                  <button className="action-btn">Message Student</button>
                  <button className="action-btn">Remove / Unenroll</button>
                </div>
              </div>
            ) : (
              <div className="student-placeholder">Select a student to see details.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEnrolledStudents;
