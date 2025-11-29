import React, { useState } from 'react';
import './ContentManagement.css';

const ContentManagement = ({ onClose }) => {
  const [contents, setContents] = useState([
    {
      id: 1,
      title: 'Introduction to React',
      type: 'Video',
      category: 'Technology',
      uploadDate: '2025-11-20',
      size: '245 MB',
      views: 1250,
      status: 'Published',
      thumbnail: '🎥'
    },
    {
      id: 2,
      title: 'Python Basics',
      type: 'Article',
      category: 'Development',
      uploadDate: '2025-11-18',
      size: '1.2 MB',
      views: 890,
      status: 'Published',
      thumbnail: '📄'
    },
    {
      id: 3,
      title: 'Web Design Tips',
      type: 'PDF',
      category: 'Design',
      uploadDate: '2025-11-15',
      size: '5.8 MB',
      views: 450,
      status: 'Draft',
      thumbnail: '📕'
    }
  ]);

  const [showUploadForm, setShowUploadForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [saveMessage, setSaveMessage] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    type: 'Video',
    category: 'Technology',
    description: '',
    file: null,
    status: 'Draft'
  });

  const contentTypes = ['Video', 'Article', 'PDF', 'Document', 'Presentation', 'Audio'];
  const categories = ['Technology', 'Science', 'Business', 'Development', 'Design', 'Health', 'Education'];
  const statuses = ['Draft', 'Published', 'Archived'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      file: e.target.files[0]
    }));
  };

  const handleAddContent = () => {
    if (!formData.title.trim()) {
      alert('Please enter a content title.');
      return;
    }
    if (!formData.file && !editingId) {
      alert('Please select a file to upload.');
      return;
    }

    if (editingId) {
      // Update existing content
      setContents(contents.map(c =>
        c.id === editingId
          ? {
              ...c,
              title: formData.title,
              type: formData.type,
              category: formData.category,
              status: formData.status
            }
          : c
      ));
      setSaveMessage('Content updated successfully!');
      setEditingId(null);
    } else {
      // Add new content
      const newContent = {
        id: Math.max(...contents.map(c => c.id), 0) + 1,
        title: formData.title,
        type: formData.type,
        category: formData.category,
        uploadDate: new Date().toISOString().split('T')[0],
        size: formData.file ? `${(formData.file.size / 1024 / 1024).toFixed(2)} MB` : '0 MB',
        views: 0,
        status: formData.status,
        thumbnail: getThumbnaileEmoji(formData.type)
      };
      setContents([newContent, ...contents]);
      setSaveMessage('Content uploaded successfully!');
    }

    // Reset form
    setFormData({
      title: '',
      type: 'Video',
      category: 'Technology',
      description: '',
      file: null,
      status: 'Draft'
    });
    setShowUploadForm(false);

    setTimeout(() => setSaveMessage(''), 2000);
  };

  const handleEditContent = (id) => {
    const content = contents.find(c => c.id === id);
    setFormData({
      title: content.title,
      type: content.type,
      category: content.category,
      description: '',
      file: null,
      status: content.status
    });
    setEditingId(id);
    setShowUploadForm(true);
  };

  const handleDeleteContent = (id) => {
    if (window.confirm('Are you sure you want to delete this content? This action cannot be undone.')) {
      setContents(contents.filter(c => c.id !== id));
      setSaveMessage('Content deleted successfully!');
      setTimeout(() => setSaveMessage(''), 2000);
    }
  };

  const handleCancelEdit = () => {
    setFormData({
      title: '',
      type: 'Video',
      category: 'Technology',
      description: '',
      file: null,
      status: 'Draft'
    });
    setEditingId(null);
    setShowUploadForm(false);
  };

  const getThumbnaileEmoji = (type) => {
    const emojis = {
      Video: '🎥',
      Article: '📄',
      PDF: '📕',
      Document: '📗',
      Presentation: '📊',
      Audio: '🎵'
    };
    return emojis[type] || '📦';
  };

  const filteredContents = contents.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || content.status === filterStatus;
    const matchesType = filterType === 'All' || content.type === filterType;
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="content-management-overlay">
      <div className="content-management-container">
        {/* Header */}
        <div className="cm-header">
          <h2>📂 Content Management</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Main Content */}
        <div className="cm-content">
          {showUploadForm ? (
            // Upload Form
            <div className="upload-form-section">
              <h3>{editingId ? 'Edit Content' : 'Upload New Content'}</h3>
              
              <div className="form-group">
                <label htmlFor="title">Content Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter content title"
                  maxLength="100"
                  className="form-input"
                />
                <small>{formData.title.length}/100 characters</small>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="type">Content Type *</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    {contentTypes.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="category">Category *</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    {statuses.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your content"
                  rows="4"
                  className="form-textarea"
                />
              </div>

              {!editingId && (
                <div className="form-group">
                  <label htmlFor="file">Upload File *</label>
                  <div className="file-upload-area">
                    <input
                      type="file"
                      id="file"
                      onChange={handleFileChange}
                      className="file-input"
                    />
                    <div className="file-info">
                      {formData.file ? (
                        <>
                          <p>✅ {formData.file.name}</p>
                          <p className="file-size">{(formData.file.size / 1024 / 1024).toFixed(2)} MB</p>
                        </>
                      ) : (
                        <>
                          <p>📁 Click to select file or drag and drop</p>
                          <p className="file-hint">Supported: MP4, PDF, DOCX, PPTX, MP3</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="form-actions">
                <button className="btn btn-primary" onClick={handleAddContent}>
                  {editingId ? '✏️ Update Content' : '📤 Upload Content'}
                </button>
                <button className="btn btn-cancel" onClick={handleCancelEdit}>
                  ✕ Cancel
                </button>
              </div>
            </div>
          ) : (
            // Content List View
            <>
              {/* Toolbar */}
              <div className="cm-toolbar">
                <button className="btn btn-primary-sm" onClick={() => { setShowUploadForm(true); setEditingId(null); }}>
                  ➕ Upload New Content
                </button>
                
                <div className="search-bar">
                  <input
                    type="text"
                    placeholder="🔍 Search content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>

                <div className="filters">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="filter-select"
                  >
                    <option value="All">All Status</option>
                    {statuses.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>

                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="filter-select"
                  >
                    <option value="All">All Types</option>
                    {contentTypes.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Stats */}
              <div className="cm-stats">
                <div className="stat-card">
                  <span className="stat-icon">📦</span>
                  <div>
                    <p className="stat-label">Total Contents</p>
                    <p className="stat-value">{contents.length}</p>
                  </div>
                </div>
                <div className="stat-card">
                  <span className="stat-icon">✅</span>
                  <div>
                    <p className="stat-label">Published</p>
                    <p className="stat-value">{contents.filter(c => c.status === 'Published').length}</p>
                  </div>
                </div>
                <div className="stat-card">
                  <span className="stat-icon">📝</span>
                  <div>
                    <p className="stat-label">Drafts</p>
                    <p className="stat-value">{contents.filter(c => c.status === 'Draft').length}</p>
                  </div>
                </div>
                <div className="stat-card">
                  <span className="stat-icon">👁️</span>
                  <div>
                    <p className="stat-label">Total Views</p>
                    <p className="stat-value">{contents.reduce((sum, c) => sum + c.views, 0).toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Content Table */}
              {filteredContents.length > 0 ? (
                <div className="content-table-wrapper">
                  <table className="content-table">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Upload Date</th>
                        <th>Size</th>
                        <th>Views</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredContents.map(content => (
                        <tr key={content.id} className={`status-${content.status.toLowerCase()}`}>
                          <td>
                            <div className="content-title">
                              <span className="thumbnail">{content.thumbnail}</span>
                              <span>{content.title}</span>
                            </div>
                          </td>
                          <td>{content.type}</td>
                          <td>{content.category}</td>
                          <td>
                            <span className={`status-badge status-${content.status.toLowerCase()}`}>
                              {content.status}
                            </span>
                          </td>
                          <td>{content.uploadDate}</td>
                          <td>{content.size}</td>
                          <td className="views-count">{content.views.toLocaleString()}</td>
                          <td>
                            <div className="action-buttons">
                              <button 
                                className="btn-action btn-edit" 
                                onClick={() => handleEditContent(content.id)}
                                title="Edit"
                              >
                                ✏️
                              </button>
                              <button 
                                className="btn-action btn-delete" 
                                onClick={() => handleDeleteContent(content.id)}
                                title="Delete"
                              >
                                🗑️
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="empty-state">
                  <p className="empty-icon">📭</p>
                  <p>No content found matching your filters.</p>
                  <button className="btn btn-primary" onClick={() => { setShowUploadForm(true); setEditingId(null); }}>
                    ➕ Upload Your First Content
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {saveMessage && <div className="save-notification">{saveMessage}</div>}
    </div>
  );
};

export default ContentManagement;
