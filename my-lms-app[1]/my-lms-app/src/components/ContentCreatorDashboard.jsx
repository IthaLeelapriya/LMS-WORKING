import React from 'react';
import './Dashboard.css';

const ContentCreatorDashboard = () => {
  return (
    <div className="dashboard-section content-creator-dashboard">
      <h2>Content Development & Curation Center ✍️</h2>
      <p>As a **Content Creator**, your mission is to build and maintain high-quality educational content for the platform.</p>

      <div className="dashboard-grid full-grid">
        {/* 1. Overview / Home Card */}
        <div className="dashboard-card overview-card creator-overview">
          <h3>Overview & Quick Actions</h3>
          <p className="sub-description">A quick summary of your content's performance and recent activities.</p>
          <div className="overview-content">
            <div className="analytics-summary">
              <h4>Creator Analytics Summary</h4>
              <p>📊 **Views:** 12,450 | 👍 **Likes:** 1,890 | 💬 **Comments:** 560</p>
              <p>💰 **Earnings:** $1,250 (This Month)</p>
            </div>
            <div className="recent-activity">
              <h4>Recent Activity</h4>
              <p>🔔 New comment on "Intro to AI"</p>
              <p>🔔 Your course "Web Dev Basics" has been approved</p>
            </div>
          </div>
          <div className="card-actions quick-actions">
            <button className="action-btn">➕ Upload New Content</button>
            <button className="action-btn">📝 Draft New Article</button>
            <button className="action-btn">🎥 Record New Video</button>
          </div>
        </div>

        {/* 2. Content Management Card */}
        <div className="dashboard-card">
          <h3>Content Management</h3>
          <p>Manage all your creations, from articles and videos to full courses.</p>
          <div className="card-actions">
            <button className="action-btn">📂 View My Creations</button>
            <button className="action-btn">🌐 Publish / Unpublish Content</button>
            <button className="action-btn">📊 Track Engagement</button>
            <button className="action-btn">🧩 Manage Content Types</button>
          </div>
        </div>

        {/* 3. Create Content Card */}
        <div className="dashboard-card">
          <h3>Create Content</h3>
          <p>Use our powerful tools to create and format new educational content.</p>
          <div className="card-actions">
            <button className="action-btn">🖼️ Upload Files & Media</button>
            <button className="action-btn">✍️ Write a New Article</button>
            <button className="action-btn">🔧 Set Difficulty Level</button>
            <button className="action-btn">⏳ Save as Draft</button>
          </div>
        </div>
        
        {/* 4. Collaboration Card */}
        <div className="dashboard-card">
          <h3>Collaboration</h3>
          <p>Work with co-creators, invite editors, and collaborate on shared drafts.</p>
          <div className="card-actions">
            <button className="action-btn">👥 Invite Co-creators</button>
            <button className="action-btn">💬 View Comments & Suggestions</button>
            <button className="action-btn">🤝 Manage Team Projects</button>
          </div>
        </div>

        {/* 5. Analytics & Insights Card */}
        <div className="dashboard-card">
          <h3>Analytics & Insights</h3>
          <p>Dive deep into your content's performance with detailed analytics.</p>
          <div className="card-actions">
            <button className="action-btn">📊 Performance Dashboard</button>
            <button className="action-btn">🧭 Top Performing Content</button>
            <button className="action-btn">🧾 Download Analytics Reports</button>
          </div>
        </div>

        {/* 6. Interaction & Feedback Card */}
        <div className="dashboard-card">
          <h3>Interaction & Feedback</h3>
          <p>Respond to comments, view ratings, and get feedback from your learners.</p>
          <div className="card-actions">
            <button className="action-btn">💭 View Comments & Discussions</button>
            <button className="action-btn">⭐ View Ratings & Reviews</button>
            <button className="action-btn">🎯 Respond to Questions</button>
          </div>
        </div>

        {/* 7. Monetization Card */}
        <div className="dashboard-card">
          <h3>Monetization</h3>
          <p>Set pricing, view revenue reports, and manage your earnings.</p>
          <div className="card-actions">
            <button className="action-btn">💰 Set Course Pricing</button>
            <button className="action-btn">🧾 View Revenue Reports</button>
            <button className="action-btn">💳 Payment Payout Settings</button>
            <button className="action-btn">🎫 Manage Promotions</button>
          </div>
        </div>

        {/* 8. Gamification & Rewards Card */}
        <div className="dashboard-card">
          <h3>Gamification & Rewards</h3>
          <p>Track your creator rank, earn badges, and celebrate milestones.</p>
          <div className="card-actions">
            <button className="action-btn">🏅 View Creator Rank</button>
            <button className="action-btn">🎖️ View Achievement Badges</button>
            <button className="action-btn">📘 View Milestones</button>
          </div>
        </div>

        {/* 9. Creator Settings Card */}
        <div className="dashboard-card">
          <h3>Creator Settings</h3>
          <p>Customize your profile, manage social links, and control your privacy.</p>
          <div className="card-actions">
            <button className="action-btn">🧑‍🎨 Profile Customization</button>
            <button className="action-btn">🔒 Privacy Controls</button>
            <button className="action-btn">💡 AI Assistant Toggle</button>
          </div>
        </div>

        {/* 10. Tools & Utilities Card */}
        <div className="dashboard-card">
          <h3>Tools & Utilities</h3>
          <p>Access powerful tools to help you create better content more efficiently.</p>
          <div className="card-actions">
            <button className="action-btn">🤖 AI Content Assistant</button>
            <button className="action-btn">📘 Content Templates</button>
            <button className="action-btn">🧰 Bulk Upload Manager</button>
            <button className="action-btn">🗂️ Cloud File Manager</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCreatorDashboard;