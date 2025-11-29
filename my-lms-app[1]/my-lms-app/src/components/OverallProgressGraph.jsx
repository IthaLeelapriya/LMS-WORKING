import React, { useEffect, useRef } from 'react';
import './OverallProgressGraph.css';

const OverallProgressGraph = ({ progressData = {}, onClose }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, width, height);
    
    // Draw grid
    ctx.strokeStyle = '#eef2f6';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 10; i++) {
      const y = (height * i) / 10;
      ctx.beginPath();
      ctx.moveTo(50, y);
      ctx.lineTo(width - 30, y);
      ctx.stroke();
    }
    
    // Data points
    const data = [65, 70, 68, 75, 78, 80, 82, 85, 88, 90];
    const points = data.length;
    const xStep = (width - 80) / (points - 1);
    const yMax = 100;
    
    // Draw line chart
    ctx.strokeStyle = '#2d6a86';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    data.forEach((value, index) => {
      const x = 50 + index * xStep;
      const y = height - 40 - (value / yMax) * (height - 80);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    
    // Draw points
    ctx.fillStyle = '#2d6a86';
    data.forEach((value, index) => {
      const x = 50 + index * xStep;
      const y = height - 40 - (value / yMax) * (height - 80);
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Draw axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(50, height - 40);
    ctx.lineTo(width - 30, height - 40);
    ctx.stroke();
    
    // Y-axis labels
    ctx.fillStyle = '#666';
    ctx.font = '12px Arial';
    ctx.textAlign = 'right';
    for (let i = 0; i <= 10; i++) {
      const y = height - 40 - (i * (height - 80)) / 10;
      const value = i * 10;
      ctx.fillText(value + '%', 45, y + 4);
    }
    
    // X-axis labels
    ctx.textAlign = 'center';
    ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'].forEach((label, index) => {
      const x = 50 + index * xStep;
      ctx.fillText(label, x, height - 20);
    });
    
  }, []);

  const defaultData = progressData || {
    webDev: 85,
    dataStructures: 78,
    uxDesign: 92,
    avgScore: 85,
    completionRate: 78,
  };

  return (
    <div className="progress-wrapper">
      <div className="progress-card">
        <div className="progress-header">
          <h2>📊 Overall Progress Graph</h2>
          <button className="close-btn" onClick={onClose}>Back</button>
        </div>

        {/* Summary Stats */}
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-label">Average Score</div>
            <div className="stat-value">{defaultData.avgScore}%</div>
          </div>
          <div className="stat-box">
            <div className="stat-label">Completion Rate</div>
            <div className="stat-value">{defaultData.completionRate}%</div>
          </div>
          <div className="stat-box">
            <div className="stat-label">Streak</div>
            <div className="stat-value">7 Days 🔥</div>
          </div>
          <div className="stat-box">
            <div className="stat-label">Rank</div>
            <div className="stat-value">#5</div>
          </div>
        </div>

        {/* Main Progress Chart */}
        <div className="chart-container">
          <h3>Weekly Progress Trend</h3>
          <canvas ref={canvasRef} width={800} height={400}></canvas>
        </div>

        {/* Course-wise Progress */}
        <div className="course-progress">
          <h3>Progress by Course</h3>
          <div className="course-items">
            <div className="course-item">
              <div className="course-name">Web Development</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${defaultData.webDev}%`, background: '#2d6a86' }}></div>
              </div>
              <div className="progress-value">{defaultData.webDev}%</div>
            </div>
            
            <div className="course-item">
              <div className="course-name">Data Structures & Algorithms</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${defaultData.dataStructures}%`, background: '#7cb342' }}></div>
              </div>
              <div className="progress-value">{defaultData.dataStructures}%</div>
            </div>
            
            <div className="course-item">
              <div className="course-name">UX Design</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${defaultData.uxDesign}%`, background: '#ff6b6b' }}></div>
              </div>
              <div className="progress-value">{defaultData.uxDesign}%</div>
            </div>
          </div>
        </div>

        {/* Performance Insights */}
        <div className="insights">
          <h3>📈 Performance Insights</h3>
          <ul className="insights-list">
            <li>✅ Excellent progress in UX Design with 92% completion</li>
            <li>✅ Consistent weekly improvement in Web Development</li>
            <li>⚠️ Data Structures needs focus - consider reviewing fundamentals</li>
            <li>✅ 7-day learning streak maintained - keep it up!</li>
            <li>💡 Recommendation: Allocate more time to challenging topics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OverallProgressGraph;
