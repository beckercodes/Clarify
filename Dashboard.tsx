import React from 'react';
import Layout from '../layout/Layout';

const Dashboard: React.FC = () => {
  return (
    <Layout activePage="dashboard">
      <div className="header">
        <h1 className="page-title">Dashboard</h1>
        <div className="search-bar">
          <div className="search-icon"></div>
          <input type="text" className="search-input" placeholder="Search contacts, companies, or notes..." />
        </div>
        <button className="add-contact-btn">
          <div className="add-icon"></div>
          Add Contact
        </button>
      </div>
      
      <div className="dashboard-grid">
        <div className="dashboard-card stats-card">
          <h2 className="card-title">Network Overview</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">248</div>
              <div className="stat-label">Total Contacts</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">12</div>
              <div className="stat-label">New This Month</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">36</div>
              <div className="stat-label">Need Follow-up</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">5</div>
              <div className="stat-label">Upcoming Events</div>
            </div>
          </div>
        </div>
        
        <div className="dashboard-card reminders-card">
          <div className="card-header">
            <h2 className="card-title">Upcoming Reminders</h2>
            <a href="/reminders" className="view-all">View All</a>
          </div>
          <div className="reminders-list">
            <div className="reminder-item">
              <div className="reminder-icon birthday-icon">
                <div className="reminder-icon-inner"></div>
              </div>
              <div className="reminder-content">
                <div className="reminder-title">Sarah Anderson's Birthday</div>
                <div className="reminder-date">Tomorrow, June 4, 2025</div>
              </div>
            </div>
            <div className="reminder-item">
              <div className="reminder-icon meeting-icon">
                <div className="reminder-icon-inner"></div>
              </div>
              <div className="reminder-content">
                <div className="reminder-title">Meeting with Michael Johnson</div>
                <div className="reminder-date">June 4, 2025, 2:00 PM</div>
              </div>
            </div>
            <div className="reminder-item">
              <div className="reminder-icon followup-icon">
                <div className="reminder-icon-inner"></div>
              </div>
              <div className="reminder-content">
                <div className="reminder-title">Follow up with Emily Williams</div>
                <div className="reminder-date">June 5, 2025</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="dashboard-card recent-contacts-card">
          <div className="card-header">
            <h2 className="card-title">Recent Contacts</h2>
            <a href="/search" className="view-all">View All</a>
          </div>
          <div className="contacts-list">
            <div className="contact-item">
              <div className="contact-avatar">SA</div>
              <div className="contact-info">
                <div className="contact-name">Sarah Anderson</div>
                <div className="contact-company">Goldman Sachs</div>
              </div>
              <div className="contact-date">2 days ago</div>
            </div>
            <div className="contact-item">
              <div className="contact-avatar">MJ</div>
              <div className="contact-info">
                <div className="contact-name">Michael Johnson</div>
                <div className="contact-company">Microsoft</div>
              </div>
              <div className="contact-date">3 days ago</div>
            </div>
            <div className="contact-item">
              <div className="contact-avatar">EW</div>
              <div className="contact-info">
                <div className="contact-name">Emily Williams</div>
                <div className="contact-company">JP Morgan</div>
              </div>
              <div className="contact-date">5 days ago</div>
            </div>
            <div className="contact-item">
              <div className="contact-avatar">RB</div>
              <div className="contact-info">
                <div className="contact-name">Robert Brown</div>
                <div className="contact-company">Apple</div>
              </div>
              <div className="contact-date">1 week ago</div>
            </div>
          </div>
        </div>
        
        <div className="dashboard-card activity-card">
          <div className="card-header">
            <h2 className="card-title">Recent Activity</h2>
          </div>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon add-icon">
                <div className="activity-icon-inner"></div>
              </div>
              <div className="activity-content">
                <div className="activity-text">You added <span className="highlight">Emily Williams</span> to your network</div>
                <div className="activity-date">Today, 10:30 AM</div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon note-icon">
                <div className="activity-icon-inner"></div>
              </div>
              <div className="activity-content">
                <div className="activity-text">You added a note to <span className="highlight">Michael Johnson</span></div>
                <div className="activity-date">Yesterday, 3:45 PM</div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon event-icon">
                <div className="activity-icon-inner"></div>
              </div>
              <div className="activity-content">
                <div className="activity-text">You created an event: <span className="highlight">Financial Technology Conference</span></div>
                <div className="activity-date">May 30, 2025</div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon update-icon">
                <div className="activity-icon-inner"></div>
              </div>
              <div className="activity-content">
                <div className="activity-text">You updated <span className="highlight">Sarah Anderson's</span> contact information</div>
                <div className="activity-date">May 28, 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
