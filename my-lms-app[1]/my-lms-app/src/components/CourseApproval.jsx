import React, { useState } from 'react';
import './CourseApproval.css';

export default function CourseApproval({ onClose }) {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Advanced React Development',
      instructor: 'John Smith',
      category: 'Web Development',
      description: 'Master advanced React concepts including hooks, context API, and performance optimization.',
      students: 0,
      submittedDate: '2025-11-25',
      duration: '8 weeks',
      level: 'Advanced'
    },
    {
      id: 2,
      title: 'Python Data Science Basics',
      instructor: 'Sarah Johnson',
      category: 'Data Science',
      description: 'Learn the fundamentals of data science using Python, pandas, and matplotlib.',
      students: 0,
      submittedDate: '2025-11-26',
      duration: '6 weeks',
      level: 'Beginner'
    },
    {
      id: 3,
      title: 'Cloud Computing with AWS',
      instructor: 'Mike Davis',
      category: 'Cloud',
      description: 'Comprehensive guide to AWS services and cloud infrastructure management.',
      students: 0,
      submittedDate: '2025-11-27',
      duration: '10 weeks',
      level: 'Intermediate'
    }
  ]);

  const [expandedCourse, setExpandedCourse] = useState(null);
  const [filter, setFilter] = useState('all');

  const approveCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const rejectCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const toggleExpand = (id) => {
    setExpandedCourse(expandedCourse === id ? null : id);
  };

  return (
    <div className="course-approval-container">
      <div className="approval-header">
        <h2>Course Approval Management</h2>
        <button onClick={onClose} className="close-btn">✕</button>
      </div>

      <div className="approval-controls">
        <div className="filter-section">
          <label>Filter by Level:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Courses</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div className="stats">
          <span className="stat-item">
            <strong>{courses.length}</strong> Pending Approval
          </span>
        </div>
      </div>

      <div className="courses-list">
        {courses.length === 0 ? (
          <div className="no-courses">
            <p>No pending courses for approval</p>
          </div>
        ) : (
          courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-header">
                <div className="course-info">
                  <h3>{course.title}</h3>
                  <p className="instructor">
                    <strong>Instructor:</strong> {course.instructor}
                  </p>
                  <div className="course-meta">
                    <span className={`level-badge ${course.level.toLowerCase()}`}>
                      {course.level}
                    </span>
                    <span className="category-badge">{course.category}</span>
                    <span className="duration-badge">{course.duration}</span>
                  </div>
                </div>
                <button 
                  className="expand-btn"
                  onClick={() => toggleExpand(course.id)}
                >
                  {expandedCourse === course.id ? '▼' : '▶'}
                </button>
              </div>

              {expandedCourse === course.id && (
                <div className="course-details">
                  <div className="description">
                    <h4>Description</h4>
                    <p>{course.description}</p>
                  </div>
                  <div className="details-grid">
                    <div className="detail-item">
                      <strong>Submitted Date:</strong>
                      <p>{new Date(course.submittedDate).toLocaleDateString()}</p>
                    </div>
                    <div className="detail-item">
                      <strong>Duration:</strong>
                      <p>{course.duration}</p>
                    </div>
                    <div className="detail-item">
                      <strong>Category:</strong>
                      <p>{course.category}</p>
                    </div>
                    <div className="detail-item">
                      <strong>Difficulty Level:</strong>
                      <p>{course.level}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="course-actions">
                <button 
                  className="approve-btn"
                  onClick={() => approveCourse(course.id)}
                  title="Approve this course"
                >
                  ✓ Approve
                </button>
                <button 
                  className="reject-btn"
                  onClick={() => rejectCourse(course.id)}
                  title="Reject this course"
                >
                  ✕ Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
