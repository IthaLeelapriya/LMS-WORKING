import React, { useState } from 'react';
import './DiscussionForum.css';

const DiscussionForum = ({ threads = [], onClose }) => {
  const [showNewThread, setShowNewThread] = useState(false);
  const [newThreadTitle, setNewThreadTitle] = useState('');
  const [newThreadBody, setNewThreadBody] = useState('');
  const [selectedThread, setSelectedThread] = useState(null);

  const handlePostThread = () => {
    if (newThreadTitle.trim() && newThreadBody.trim()) {
      // In a real app, this would be sent to the backend
      alert(`Thread posted: ${newThreadTitle}`);
      setNewThreadTitle('');
      setNewThreadBody('');
      setShowNewThread(false);
    }
  };

  const handleReply = () => {
    alert('Reply posted successfully!');
    setSelectedThread(null);
  };

  return (
    <div className="forum-wrapper">
      <div className="forum-card">
        <div className="forum-header">
          <h2>💬 Discussion Forum</h2>
          <button className="close-btn" onClick={onClose}>Back</button>
        </div>

        {selectedThread ? (
          // Thread detail view
          <div className="thread-detail">
            <button className="back-thread-btn" onClick={() => setSelectedThread(null)}>← Back to Threads</button>
            <div className="thread-title-detail">{selectedThread.title}</div>
            <div className="thread-meta">
              <span>Posted by <strong>{selectedThread.author}</strong></span>
              <span>{selectedThread.date}</span>
              <span>{selectedThread.replies} replies</span>
            </div>
            <div className="thread-body">{selectedThread.body}</div>

            <div className="replies-section">
              <h4>Replies</h4>
              {selectedThread.replies === 0 ? (
                <p className="no-replies">No replies yet. Be the first to reply!</p>
              ) : (
                <ul className="replies-list">
                  {[1, 2].map((i) => (
                    <li key={i} className="reply-item">
                      <div className="reply-author">User {i}</div>
                      <div className="reply-text">This is a sample reply to the discussion thread.</div>
                    </li>
                  ))}
                </ul>
              )}
              <div className="reply-form">
                <textarea placeholder="Write your reply..." rows="3"></textarea>
                <button className="btn-post-reply" onClick={handleReply}>Post Reply</button>
              </div>
            </div>
          </div>
        ) : showNewThread ? (
          // New thread form
          <div className="new-thread-form">
            <button className="back-btn" onClick={() => setShowNewThread(false)}>← Back</button>
            <h3>Create New Thread</h3>
            <input
              type="text"
              placeholder="Thread Title"
              value={newThreadTitle}
              onChange={(e) => setNewThreadTitle(e.target.value)}
              className="input-title"
            />
            <textarea
              placeholder="Describe your question or topic..."
              value={newThreadBody}
              onChange={(e) => setNewThreadBody(e.target.value)}
              className="input-body"
              rows="6"
            ></textarea>
            <button className="btn-post-thread" onClick={handlePostThread}>Post Thread</button>
          </div>
        ) : (
          // Threads list view
          <>
            <button className="btn-new-thread" onClick={() => setShowNewThread(true)}>+ New Thread</button>
            {threads.length === 0 ? (
              <p className="no-threads">No discussion threads yet.</p>
            ) : (
              <ul className="threads-list">
                {threads.map((thread) => (
                  <li key={thread.id} className="thread-item" onClick={() => setSelectedThread(thread)}>
                    <div className="thread-info">
                      <div className="thread-item-title">{thread.title}</div>
                      <div className="thread-item-meta">
                        <span>by <strong>{thread.author}</strong></span>
                        <span>{thread.date}</span>
                      </div>
                    </div>
                    <div className="thread-stats">
                      <span className="badge">{thread.replies} replies</span>
                      <span className="badge views">{thread.views} views</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DiscussionForum;
