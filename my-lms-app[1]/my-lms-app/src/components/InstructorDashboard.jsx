import React from 'react';
import './Dashboard.css';

const InstructorDashboard = ({ onOpenEnrolled }) => {

  const openEnrolledHandler = () => {
    const sampleStudents = [
      { id: 1, name: 'Aisha Khan', email: 'aisha.khan@example.com', progress: 78, enrolledDate: '2025-09-12', lastActive: '2025-11-28' },
      { id: 2, name: 'Michael Brown', email: 'michael.brown@example.com', progress: 54, enrolledDate: '2025-09-30', lastActive: '2025-11-25' },
      { id: 3, name: 'Sofia Martinez', email: 'sofia.martinez@example.com', progress: 92, enrolledDate: '2025-10-05', lastActive: '2025-11-29' },
      { id: 4, name: 'Liam Johnson', email: 'liam.johnson@example.com', progress: 66, enrolledDate: '2025-10-20', lastActive: '2025-11-27' },
      { id: 5, name: 'Emma Wilson', email: 'emma.wilson@example.com', progress: 82, enrolledDate: '2025-11-02', lastActive: '2025-11-29' }
    ];

    if (onOpenEnrolled) onOpenEnrolled(sampleStudents);
  };
  return (
    <div className="dashboard-section instructor-dashboard">
      <h2>Your Teaching & Course Management Portal 📝</h2>
      <p>This portal provides a complete suite of tools to help you manage your courses, engage with students, and analyze performance.</p>

      <div className="dashboard-grid">
        {/* 1. Course Management Card */}
        <div className="dashboard-card">
          <h3>Course Management</h3>
          <p>Create, edit, and organize all your course content. Effortlessly add new modules, lessons, and materials.</p>
          <div className="card-actions">
            <button className="action-btn">➕ Create New Course</button>
            <button className="action-btn">📚 Upload Course Materials</button>
            <button className="action-btn">🧩 Organize Modules</button>
            <button className="action-btn">🔄 Duplicate Course</button>
          </div>
        </div>

        {/* 2. Student Management Card */}
        <div className="dashboard-card">
          <h3>Student Management</h3>
          <p>Oversee your student roster, track individual progress, and manage enrollments efficiently.</p>
          <div className="card-actions">
            <button className="action-btn" onClick={openEnrolledHandler}>👥 View Enrolled Students</button>
            <button className="action-btn">📈 Track Student Progress</button>
            <button className="action-btn">✅ Approve Enrollments</button>
            <button className="action-btn">💬 Send Messages</button>
          </div>
        </div>

        {/* 3. Assessment & Grading Card */}
        <div className="dashboard-card">
          <h3>Assessment & Grading</h3>
          <p>Streamline your assessment workflow with tools for creating quizzes and grading submissions.</p>
          <div className="card-actions">
            <button className="action-btn">✍️ Create Quizzes & Assignments</button>
            <button className="action-btn">📊 Grade Submissions</button>
            <button className="action-btn">🧾 Download Grade Reports</button>
            <button className="action-btn">🔁 Allow Reattempts</button>
          </div>
        </div>

        {/* 4. Communication & Interaction Card */}
        <div className="dashboard-card">
          <h3>Communication & Interaction</h3>
          <p>Engage with your students through discussion forums and post important announcements.</p>
          <div className="card-actions">
            <button className="action-btn">💬 Manage Discussion Forums</button>
            <button className="action-btn">🎥 Schedule Live Class</button>
            <button className="action-btn">🔔 Post Announcement</button>
          </div>
        </div>

        {/* 5. Analytics & Insights Card */}
        <div className="dashboard-card">
          <h3>Analytics & Insights</h3>
          <p>Gain valuable insights into course engagement, student performance, and other key metrics.</p>
          <div className="card-actions">
            <button className="action-btn">📈 Course Engagement Analytics</button>
            <button className="action-btn">🎯 Student Performance Analytics</button>
            <button className="action-btn">💰 Revenue Tracking</button>
          </div>
        </div>

        {/* 6. Profile & Settings Card */}
        <div className="dashboard-card">
          <h3>Profile & Settings</h3>
          <p>Manage your professional profile, update account settings, and control your payment information.</p>
          <div className="card-actions">
            <button className="action-btn">🧑‍🏫 Edit Instructor Profile</button>
            <button className="action-btn">⚙️ Account Settings</button>
            <button className="action-btn">💳 Payment Settings</button>
          </div>
        </div>

        {/* 7. Advanced Features Card */}
        <div className="dashboard-card">
          <h3>Advanced Features</h3>
          <p>Leverage powerful tools to enhance your courses and provide a better learning experience.</p>
          <div className="card-actions">
            <button className="action-btn">🧾 Issue Certificates</button>
            <button className="action-btn">🌐 Course Localization</button>
            <button className="action-btn">🤖 AI Course Assistant</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;