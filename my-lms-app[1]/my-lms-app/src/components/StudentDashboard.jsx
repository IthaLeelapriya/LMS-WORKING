import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const StudentDashboard = ({ onOpenUpcoming, onOpenLectures, onOpenForum, onOpenProgress, onOpenBadges }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // This useEffect hook simulates fetching data from a backend.
  // In a real application, this would make API calls to your server.
  useEffect(() => {
    const fetchData = () => {
      // Dummy data to show all the new features
      const studentData = {
        progress: {
          webDev: 75,
          dataStructures: 50,
          uxDesign: 90
        },
        currentCourses: [
          { id: 1, title: 'Introduction to Web Development', progress: 75, instructor: 'Jane Doe' },
          { id: 2, title: 'Data Structures and Algorithms', progress: 50, instructor: 'John Smith' },
        ],
        upcoming: {
          assignments: [{ id: 101, title: 'React Project', dueDate: '2025-10-20' }],
          classes: [{ id: 201, title: 'Live Q&A', time: '10/15, 2 PM' }],
        },
        recordedLectures: [
          { id: 1, title: 'Introduction to React Hooks', course: 'Web Development', uploadDate: '2025-11-20', duration: '45 min' },
          { id: 2, title: 'State Management with Redux', course: 'Web Development', uploadDate: '2025-11-18', duration: '52 min' },
          { id: 3, title: 'Algorithm Basics: Sorting', course: 'Data Structures', uploadDate: '2025-11-15', duration: '38 min' },
        ],
        forumThreads: [
          { id: 1, title: 'How to improve React performance?', author: 'Alice', date: '2025-11-22', replies: 5, views: 42, body: 'I am working on a large React application and facing performance issues. Any tips?' },
          { id: 2, title: 'Best practices for data structure implementation', author: 'Bob', date: '2025-11-20', replies: 3, views: 28, body: 'Looking for advice on implementing efficient data structures for competitive programming.' },
          { id: 3, title: 'Debugging JavaScript code efficiently', author: 'Charlie', date: '2025-11-19', replies: 8, views: 56, body: 'Share your debugging strategies and tools you use daily.' },
        ],
        badges: ['Web Fundamentals', 'JavaScript Basics'],
        leaderboardRank: 5,
        streak: 7
      };

      setTimeout(() => {
        setData(studentData);
        setLoading(false);
      }, 1000); // Simulate network delay
    };

    fetchData();
  }, []);

  const handleFileUpload = (e) => {
    // This is where you would handle the file upload logic
    const file = e.target.files[0];
    if (file) {
      alert(`File "${file.name}" selected for upload.`);
      // Implement API call to upload the file to your backend
    }
  };

  if (loading) {
    return (
      <div className="dashboard-section student-dashboard loading">
        <h2>Loading your dashboard...</h2>
        <p>Please wait a moment while we fetch your data.</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="dashboard-section student-dashboard error">
        <h2>Failed to load data</h2>
        <p>There was an issue connecting to the server. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="dashboard-section student-dashboard">
      <h2>Your Academic Progress & Resources 🎓</h2>
      <p>Welcome! Your dashboard is your central hub for all your learning activities.</p>

      <div className="dashboard-grid full-grid">
        {/* 1. Dashboard Overview */}
        <div className="dashboard-card overview-card">
          <h3>Dashboard Overview</h3>
          <p className="sub-description">A quick glance at your progress and upcoming activities.</p>
          <div className="overview-content">
            <div className="progress-bar-container">
              <h4>Learning Progress</h4>
              {Object.entries(data.progress).map(([course, value]) => (
                <div key={course} className="progress-bar-item">
                  <span>{course.toUpperCase()}</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="quick-info">
              <h4>Upcoming</h4>
              <p>🗓️ **Today's Schedule:** {data.upcoming.classes[0].title} at {data.upcoming.classes[0].time}</p>
              <p>⏰ **Deadline:** {data.upcoming.assignments[0].title} on {data.upcoming.assignments[0].dueDate}</p>
            </div>
          </div>
        </div>

        {/* 2. My Courses Card */}
        <div className="dashboard-card">
          <h3>My Courses</h3>
          <p>Access your enrolled courses, continue learning, and download materials.</p>
          <div className="card-actions">
            <button className="action-btn">🎯 View Enrolled Courses</button>
            <button className="action-btn">🚀 Continue Learning</button>
            <button className="action-btn">💡 View Course Details</button>
            <button className="action-btn">🌟 Rate or Review a Course</button>
            <button className="action-btn">📦 Download Course Materials</button>
          </div>
        </div>

        {/* 3. Assignments / Quizzes Card */}
        <div className="dashboard-card">
          <h3>Assignments / Quizzes</h3>
          <p>Manage your assignments, view grades, and submit your work.</p>
          <div className="card-actions">
            <button className="action-btn" onClick={() => onOpenUpcoming && onOpenUpcoming(data.upcoming.assignments)}>🧠 View Upcoming Assignments</button>
            <button className="action-btn">✅ View Grades / Feedback</button>
            <button className="action-btn">📄 View Submission History</button>
            <label className="action-btn upload-btn">
              <input type="file" style={{ display: 'none' }} onChange={handleFileUpload} />
              ✍️ Submit Assignments
            </label>
          </div>
        </div>
        
        {/* 4. Learning Activities Card */}
        <div className="dashboard-card">
          <h3>Learning Activities</h3>
          <p>Access live classes, recorded lectures, and take notes within your lessons.</p>
          <div className="card-actions">
            <button className="action-btn" onClick={() => onOpenLectures && onOpenLectures(data.recordedLectures)}>🖥️ Access Recorded Lectures</button>
            <button className="action-btn">🎥 Join Live Classes</button>
            <button className="action-btn">📒 Take Notes Inside Lessons</button>
            <button className="action-btn">⭐ Bookmark Lessons</button>
          </div>
        </div>

        {/* 5. Communication & Interaction Card */}
        <div className="dashboard-card">
          <h3>Communication & Interaction</h3>
          <p>Connect with your peers and instructors through various communication channels.</p>
          <div className="card-actions">
            <button className="action-btn" onClick={() => onOpenForum && onOpenForum(data.forumThreads)}>💭 Discussion Forum</button>
            <button className="action-btn">🧑‍🏫 Chat with Instructor</button>
            <button className="action-btn">👥 Group Projects</button>
            <button className="action-btn">📨 In-app Messaging</button>
          </div>
        </div>

        {/* 6. Performance & Analytics Card */}
        <div className="dashboard-card">
          <h3>Performance & Analytics</h3>
          <p>Visualize your progress with detailed graphs and charts of your scores.</p>
          <div className="card-actions">
            <button className="action-btn" onClick={() => onOpenProgress && onOpenProgress({ webDev: data.progress.webDev, dataStructures: data.progress.dataStructures, uxDesign: data.progress.uxDesign, avgScore: 85, completionRate: 78 })}>🔢 Overall Progress Graph</button>
            <button className="action-btn">📊 Quiz & Assignment Scores</button>
            <button className="action-btn">🧾 Download Progress Report</button>
          </div>
        </div>

        {/* 7. Rewards & Gamification Card */}
        <div className="dashboard-card">
          <h3>Rewards & Gamification</h3>
          <p>Earn badges, track your learning streak, and climb the leaderboard.</p>
          <div className="card-actions">
            <button className="action-btn" onClick={() => onOpenBadges && onOpenBadges(data.badges)}>🏆 View Badges Earned</button>
            <button className="action-btn">🎖️ View Leaderboard</button>
            <button className="action-btn">🎯 Learning Streak Tracker ({data.streak} Days!)</button>
          </div>
        </div>

        {/* 8. Profile & Settings Card */}
        <div className="dashboard-card">
          <h3>Profile & Settings</h3>
          <p>Manage your personal profile, notification preferences, and account settings.</p>
          <div className="card-actions">
            <button className="action-btn">🧑‍🎓 Edit Profile</button>
            <button className="action-btn">🔒 Change Password</button>
            <button className="action-btn">🎨 Theme Preferences</button>
          </div>
        </div>

        {/* 9. Support & Help Card */}
        <div className="dashboard-card">
          <h3>Support & Help</h3>
          <p>Find answers to common questions and get in touch with our support team.</p>
          <div className="card-actions">
            <button className="action-btn">❓ FAQ Section</button>
            <button className="action-btn">💬 Raise Support Ticket</button>
            <button className="action-btn">📞 Contact Instructor</button>
          </div>
        </div>
        
        {/* 10. Advanced / Optional Features Card */}
        <div className="dashboard-card">
          <h3>Advanced Features</h3>
          <p>Unlock powerful tools to enhance your studies and streamline your learning.</p>
          <div className="card-actions">
            <button className="action-btn">🤖 AI Study Assistant</button>
            <button className="action-btn">🧭 Learning Path Recommendation</button>
            <button className="action-btn">📅 Personal Study Planner</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentDashboard;