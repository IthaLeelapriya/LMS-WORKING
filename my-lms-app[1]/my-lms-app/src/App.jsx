import React, { useState } from 'react';
import './App.css';

// Import all components
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import AdminDashboard from './components/AdminDashboard';
import InstructorDashboard from './components/InstructorDashboard';
import StudentDashboard from './components/StudentDashboard';
import ContentCreatorDashboard from './components/ContentCreatorDashboard';
import UpcomingAssignments from './components/UpcomingAssignments';
import AccessRecordedLectures from './components/AccessRecordedLectures';
import DiscussionForum from './components/DiscussionForum';
import OverallProgressGraph from './components/OverallProgressGraph';
import ViewBadgesEarned from './components/ViewBadgesEarned';
import ViewEnrolledStudents from './components/ViewEnrolledStudents';

function App() {
  const [userRole, setUserRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [showUpcoming, setShowUpcoming] = useState(false);
  const [upcomingAssignments, setUpcomingAssignments] = useState([]);
  const [showLectures, setShowLectures] = useState(false);
  const [recordedLectures, setRecordedLectures] = useState([]);
  const [showProgress, setShowProgress] = useState(false);
  const [progressData, setProgressData] = useState({});
  const [showForum, setShowForum] = useState(false);
  const [forumThreads, setForumThreads] = useState([]);
  const [showBadges, setShowBadges] = useState(false);
  const [badges, setBadges] = useState([]);
  const [showEnrolled, setShowEnrolled] = useState(false);
  const [enrolledStudents, setEnrolledStudents] = useState([]);

  const handleLogin = (role) => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUserRole(null);
    setIsLoggedIn(false);
  };

  const handleRegisterClick = () => {
    setShowRegistration(true);
  };

  const handleRegistrationComplete = () => {
    setShowRegistration(false);
  };

  const handleBackToLogin = () => {
    setShowRegistration(false);
  };

  const openUpcoming = (assignments = []) => {
    setUpcomingAssignments(assignments);
    setShowUpcoming(true);
  };

  const closeUpcoming = () => setShowUpcoming(false);

  const openLectures = (lectures = []) => {
    setRecordedLectures(lectures);
    setShowLectures(true);
  };

  const closeLectures = () => setShowLectures(false);

  const openProgress = (data = {}) => {
    setProgressData(data);
    setShowProgress(true);
  };

  const closeProgress = () => setShowProgress(false);

  const openBadges = (badgeList = []) => {
    setBadges(badgeList);
    setShowBadges(true);
  };

  const closeBadges = () => setShowBadges(false);

  const openForum = (threads = []) => {
    setForumThreads(threads);
    setShowForum(true);
  };

  const openEnrolled = (students = []) => {
    setEnrolledStudents(students);
    setShowEnrolled(true);
  };

  const closeEnrolled = () => setShowEnrolled(false);

  const closeForum = () => setShowForum(false);

  const renderDashboard = () => {
    switch (userRole) {
      case 'Admin':
        return <AdminDashboard />;
      case 'Instructor':
        return <InstructorDashboard />;
      case 'Student':
        return <StudentDashboard />;
      case 'Content Creator':
        return <ContentCreatorDashboard />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      {showRegistration ? (
        <RegistrationPage onRegistrationComplete={handleRegistrationComplete} onBackToLogin={handleBackToLogin} />
      ) : !isLoggedIn ? (
        <LoginPage onLogin={handleLogin} onRegisterClick={handleRegisterClick} />
      ) : (
        <>
          <header className="header">
            <div className="logo">LMS<span>.</span></div>
            <h1>Empower Your Learning Journey</h1>
            <p>A comprehensive platform for online education tailored to your needs.</p>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </header>

          <main className="dashboard-main">
            {showUpcoming ? (
              <UpcomingAssignments assignments={upcomingAssignments} onClose={closeUpcoming} />
            ) : showLectures ? (
              <AccessRecordedLectures lectures={recordedLectures} onClose={closeLectures} />
            ) : showForum ? (
              <DiscussionForum threads={forumThreads} onClose={closeForum} />
            ) : showProgress ? (
              <OverallProgressGraph progressData={progressData} onClose={closeProgress} />
            ) : showBadges ? (
              <ViewBadgesEarned badges={badges} onClose={closeBadges} />
            ) : showEnrolled ? (
              <ViewEnrolledStudents students={enrolledStudents} onClose={closeEnrolled} />
            ) : (
              // pass handlers to dashboards that may need them
              React.cloneElement(renderDashboard(), { onOpenUpcoming: openUpcoming, onOpenLectures: openLectures, onOpenForum: openForum, onOpenProgress: openProgress, onOpenBadges: openBadges, onOpenEnrolled: openEnrolled })
            )}
          </main>
          
          <footer className="footer">
            <p>© {new Date().getFullYear()} LMS. All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;