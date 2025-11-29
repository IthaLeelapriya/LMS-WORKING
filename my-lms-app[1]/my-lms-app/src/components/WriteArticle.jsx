import React, { useState } from 'react';
import './WriteArticle.css';

const WriteArticle = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');
  const [tags, setTags] = useState('');
  const [difficulty, setDifficulty] = useState('Beginner');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState('');
  const [isDraft, setIsDraft] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');

  const categories = [
    'Technology',
    'Science',
    'Business',
    'Health & Wellness',
    'Arts & Design',
    'Education',
    'Development',
    'Other'
  ];

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveArticle = (asDraft = false) => {
    if (!title.trim()) {
      alert('Please enter an article title.');
      return;
    }
    if (!category) {
      alert('Please select a category.');
      return;
    }
    if (!content.trim()) {
      alert('Please write some content for your article.');
      return;
    }
    if (!summary.trim()) {
      alert('Please provide a summary for your article.');
      return;
    }

    const articleData = {
      title,
      category,
      content,
      summary,
      tags: tags.split(',').map(tag => tag.trim()),
      difficulty,
      estimatedTime: estimatedTime || 'Not specified',
      thumbnail: thumbnailPreview,
      createdAt: new Date().toLocaleString(),
      isDraft: asDraft
    };

    setSaveStatus(asDraft ? 'Saved as Draft!' : 'Published Successfully!');
    
    setTimeout(() => {
      setSaveStatus('');
      // Reset form
      setTitle('');
      setCategory('');
      setContent('');
      setSummary('');
      setTags('');
      setDifficulty('Beginner');
      setEstimatedTime('');
      setThumbnail(null);
      setThumbnailPreview('');
      
      if (!asDraft) {
        onClose();
      }
    }, 2000);
  };

  return (
    <div className="write-article-overlay">
      <div className="write-article-container">
        <div className="article-header">
          <h2>✍️ Write a New Article</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="article-content">
          {showPreview ? (
            <div className="article-preview">
              <h2>{title || 'Article Title'}</h2>
              <div className="preview-meta">
                <span className="preview-category">{category}</span>
                <span className="preview-difficulty">{difficulty}</span>
                <span className="preview-time">{estimatedTime} min</span>
              </div>
              {thumbnailPreview && <img src={thumbnailPreview} alt="Thumbnail" className="preview-thumbnail" />}
              <div className="preview-summary">
                <strong>Summary:</strong>
                <p>{summary}</p>
              </div>
              <div className="preview-content">
                <strong>Content:</strong>
                <p>{content}</p>
              </div>
              {tags && (
                <div className="preview-tags">
                  <strong>Tags:</strong>
                  <div className="tag-list">
                    {tags.split(',').map((tag, idx) => (
                      <span key={idx} className="tag">{tag.trim()}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="article-form">
              {/* Title */}
              <div className="form-group">
                <label htmlFor="title">Article Title *</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter an engaging title for your article"
                  maxLength="100"
                  className="form-input"
                />
                <small>{title.length}/100 characters</small>
              </div>

              {/* Category and Difficulty */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="category">Category *</label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-select"
                  >
                    <option value="">Select a category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="difficulty">Difficulty Level</label>
                  <select
                    id="difficulty"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="form-select"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="time">Est. Reading Time (min)</label>
                  <input
                    type="number"
                    id="time"
                    value={estimatedTime}
                    onChange={(e) => setEstimatedTime(e.target.value)}
                    placeholder="5"
                    min="1"
                    max="120"
                    className="form-input"
                  />
                </div>
              </div>

              {/* Thumbnail */}
              <div className="form-group">
                <label htmlFor="thumbnail">Article Thumbnail (Optional)</label>
                <div className="thumbnail-upload">
                  {thumbnailPreview && (
                    <div className="thumbnail-preview">
                      <img src={thumbnailPreview} alt="Thumbnail preview" />
                      <button type="button" onClick={() => { setThumbnail(null); setThumbnailPreview(''); }} className="remove-thumbnail">✕</button>
                    </div>
                  )}
                  <input
                    type="file"
                    id="thumbnail"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                    className="file-input"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="form-group">
                <label htmlFor="summary">Article Summary *</label>
                <textarea
                  id="summary"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="Brief summary of your article (2-3 sentences)"
                  rows="3"
                  maxLength="250"
                  className="form-textarea"
                />
                <small>{summary.length}/250 characters</small>
              </div>

              {/* Main Content */}
              <div className="form-group">
                <label htmlFor="content">Article Content *</label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your article content here. Use clear paragraphs and formatting."
                  rows="12"
                  className="form-textarea large"
                />
                <small>{content.length} characters</small>
              </div>

              {/* Tags */}
              <div className="form-group">
                <label htmlFor="tags">Tags (comma-separated, Optional)</label>
                <input
                  type="text"
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="e.g., react, web development, javascript"
                  className="form-input"
                />
                <small>Separate tags with commas for better discoverability</small>
              </div>
            </div>
          )}
        </div>

        {saveStatus && <div className="save-status-message">{saveStatus}</div>}

        <div className="article-actions">
          <button className="btn btn-secondary" onClick={() => setShowPreview(!showPreview)}>
            {showPreview ? '✏️ Edit' : '👁️ Preview'}
          </button>
          <div className="action-group">
            <button className="btn btn-outline" onClick={() => handleSaveArticle(true)}>
              💾 Save as Draft
            </button>
            <button className="btn btn-primary" onClick={() => handleSaveArticle(false)}>
              ✅ Publish Article
            </button>
            <button className="btn btn-cancel" onClick={onClose}>
              ✕ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteArticle;
