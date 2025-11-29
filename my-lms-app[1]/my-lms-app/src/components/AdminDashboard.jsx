import React from 'react';
import './Dashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard-section admin-dashboard">
      <h2>Platform Management & Oversight 📊</h2>
      <p>As the **Admin**, you have complete control over the platform. Your dashboard is your central hub for managing the entire LMS.</p>

      <div className="dashboard-grid full-grid">
        {/* 1. Dashboard Overview Card */}
        <div className="dashboard-card overview-card admin-overview">
          <h3>Dashboard Overview</h3>
          <p className="sub-description">A high-level summary of key platform metrics and recent activities.</p>
          <div className="overview-content">
            <div className="analytics-summary">
              <h4>Platform Overview</h4>
              <p>👨‍🎓 **Students:** 1,250 | 👩‍🏫 **Instructors:** 50 | 📚 **Courses:** 250</p>
              <p>🔥 **Active Users Today:** 1,024 | 💰 **Total Earnings:** $50,000+</p>
            </div>
            <div className="quick-info">
              <h4>Pending Actions</h4>
              <p>🗓️ **Pending Approvals:** 5 new courses, 2 new creators</p>
              <p>🔔 **Notifications:** 3 new support tickets</p>
            </div>
          </div>
        </div>

        {/* 2. User Management Card */}
        <div className="dashboard-card">
          <h3>User Management</h3>
          <p>Manage all user accounts, including students, instructors, and content creators.</p>
          <div className="card-actions">
            <button className="action-btn">🧑‍🎓 View / Edit Student Accounts</button>
            <button className="action-btn">🧑‍🏫 Approve New Instructors</button>
            <button className="action-btn">🎨 Manage Content Creators</button>
            <button className="action-btn">👥 Manage User Roles</button>
          </div>
        </div>

        {/* 3. Course Management Card */}
        <div className="dashboard-card">
          <h3>Course Management</h3>
          <p>Oversee all courses on the platform, from approval to performance tracking.</p>
          <div className="card-actions">
            <button className="action-btn">📦 Approve / Reject New Courses</button>
            <button className="action-btn">❌ Remove Inappropriate Courses</button>
            <button className="action-btn">📘 Categorize Courses</button>
            <button className="action-btn">📈 Track Course Performance</button>
          </div>
        </div>
        
        {/* 4. Communication Management Card */}
        <div className="dashboard-card">
          <h3>Communication Management</h3>
          <p>Communicate with your user base and moderate platform interactions.</p>
          <div className="card-actions">
            <button className="action-btn">📢 Post Platform-Wide Announcements</button>
            <button className="action-btn">💌 Send Bulk Messages</button>
            <button className="action-btn">🧠 Handle Support Tickets</button>
            <button className="action-btn">🚨 Moderate Comments / Reports</button>
          </div>
        </div>

        {/* 5. Revenue & Payments Card */}
        <div className="dashboard-card">
          <h3>Revenue & Payments</h3>
          <p>Manage all financial aspects, including earnings, payouts, and reports.</p>
          <div className="card-actions">
            <button className="action-btn">💳 Track Total Earnings</button>
            <button className="action-btn">🧾 Manage Instructor Payouts</button>
            <button className="action-btn">💸 View Revenue Split Reports</button>
            <button className="action-btn">🏷️ Manage Discounts & Coupons</button>
          </div>
        </div>

        {/* 6. Analytics & Insights Card */}
        <div className="dashboard-card">
          <h3>Analytics & Insights</h3>
          <p>Get in-depth insights into platform usage, user behavior, and content trends.</p>
          <div className="card-actions">
            <button className="action-btn">📊 View Overall Platform Analytics</button>
            <button className="action-btn">📈 View Top Performing Courses</button>
            <button className="action-btn">🧭 View User Engagement Metrics</button>
            <button className="action-btn">🧾 Export Reports for Review</button>
          </div>
        </div>
        
        {/* 7. Platform Settings Card */}
        <div className="dashboard-card">
          <h3>Platform Settings</h3>
          <p>Configure core settings, from user roles to integrations and branding.</p>
          <div className="card-actions">
            <button className="action-btn">🌐 Manage Site Branding</button>
            <button className="action-btn">🔒 Manage Authentication Settings</button>
            <button className="action-btn">📅 Maintenance Mode Toggle</button>
            <button className="action-btn">🧰 Integration Management</button>
          </div>
        </div>

        {/* 8. Verification & Approval Card */}
        <div className="dashboard-card">
          <h3>Verification & Approval Center</h3>
          <p>Review and approve new courses, creators, and content for quality and compliance.</p>
          <div className="card-actions">
            <button className="action-btn">✅ Course Approval Requests</button>
            <button className="action-btn">🪪 Instructor Verification</button>
            <button className="action-btn">🪪 Content Review</button>
            <button className="action-btn">🧠 Review AI-Flagged Issues</button>
          </div>
        </div>

        {/* 9. AI & Automation Tools Card */}
        <div className="dashboard-card">
          <h3>AI & Automation Tools</h3>
          <p>Leverage AI for smart insights, content moderation, and report generation.</p>
          <div className="card-actions">
            <button className="action-btn">🤖 AI Dashboard Insights</button>
            <button className="action-btn">🧾 Generate Automatic Reports</button>
            <button className="action-btn">🧩 AI-based Content Moderation</button>
          </div>
        </div>

        {/* 10. Reports & Auditing Card */}
        <div className="dashboard-card">
          <h3>Reports & Auditing</h3>
          <p>Generate comprehensive reports and maintain an audit trail for all platform activity.</p>
          <div className="card-actions">
            <button className="action-btn">📘 Generate User Activity Logs</button>
            <button className="action-btn">🧾 View Payment & Revenue Records</button>
            <button className="action-btn">🔐 View Security & Access Logs</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;