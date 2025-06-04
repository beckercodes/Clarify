import React, { useState } from 'react';
import Layout from '../layout/Layout';

const Reminders: React.FC = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  // Mock data for reminders
  const reminders = {
    upcoming: [
      {
        id: '1',
        type: 'birthday',
        title: "Sarah Anderson's Birthday",
        date: 'Tomorrow, June 4, 2025',
        contact: { id: '2', name: 'Sarah Anderson', company: 'Goldman Sachs' }
      },
      {
        id: '2',
        type: 'meeting',
        title: 'Meeting with Michael Johnson',
        date: 'June 4, 2025, 2:00 PM',
        contact: { id: '3', name: 'Michael Johnson', company: 'Microsoft' }
      },
      {
        id: '3',
        type: 'followup',
        title: 'Follow up with Emily Williams',
        date: 'June 5, 2025',
        contact: { id: '4', name: 'Emily Williams', company: 'JP Morgan' }
      },
      {
        id: '4',
        type: 'birthday',
        title: "Robert Brown's Birthday",
        date: 'June 10, 2025',
        contact: { id: '5', name: 'Robert Brown', company: 'Apple' }
      },
      {
        id: '5',
        type: 'followup',
        title: 'Follow up about AI investment',
        date: 'June 15, 2025',
        contact: { id: '2', name: 'Sarah Anderson', company: 'Goldman Sachs' }
      }
    ],
    completed: [
      {
        id: '6',
        type: 'meeting',
        title: 'Coffee with Jennifer Davis',
        date: 'May 28, 2025',
        contact: { id: '6', name: 'Jennifer Davis', company: 'Google' }
      },
      {
        id: '7',
        type: 'followup',
        title: 'Send proposal to William Miller',
        date: 'May 25, 2025',
        contact: { id: '7', name: 'William Miller', company: 'Amazon' }
      },
      {
        id: '8',
        type: 'meeting',
        title: 'Lunch with Elizabeth Wilson',
        date: 'May 20, 2025',
        contact: { id: '8', name: 'Elizabeth Wilson', company: 'Facebook' }
      }
    ]
  };

  return (
    <Layout activePage="reminders">
      <div className="header">
        <h1 className="page-title">Reminders</h1>
        <button className="add-reminder-btn">
          <div className="add-icon"></div>
          Add Reminder
        </button>
      </div>
      
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </div>
        <div 
          className={`tab ${activeTab === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          Completed
        </div>
      </div>
      
      <div className="reminders-container">
        <div className="reminders-list">
          {reminders[activeTab as keyof typeof reminders].map((reminder) => (
            <div key={reminder.id} className="reminder-card">
              <div className={`reminder-icon ${reminder.type}-icon`}>
                <div className="reminder-icon-inner"></div>
              </div>
              
              <div className="reminder-content">
                <div className="reminder-title">{reminder.title}</div>
                <div className="reminder-date">{reminder.date}</div>
                <div className="reminder-contact">
                  <a href={`/contact/${reminder.contact.id}`} className="contact-link">
                    {reminder.contact.name} • {reminder.contact.company}
                  </a>
                </div>
              </div>
              
              <div className="reminder-actions">
                {activeTab === 'upcoming' ? (
                  <>
                    <button className="complete-btn">
                      <div className="complete-icon"></div>
                      Complete
                    </button>
                    <button className="edit-btn">
                      <div className="edit-icon"></div>
                    </button>
                  </>
                ) : (
                  <button className="restore-btn">
                    <div className="restore-icon"></div>
                    Restore
                  </button>
                )}
                <button className="delete-btn">
                  <div className="delete-icon"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {activeTab === 'upcoming' && (
          <div className="reminders-sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">Filter By Type</h3>
              <div className="filter-options">
                <div className="filter-option">
                  <input type="checkbox" id="filter-all" checked />
                  <label htmlFor="filter-all">All Types</label>
                </div>
                <div className="filter-option">
                  <input type="checkbox" id="filter-birthday" />
                  <label htmlFor="filter-birthday">Birthdays</label>
                </div>
                <div className="filter-option">
                  <input type="checkbox" id="filter-meeting" />
                  <label htmlFor="filter-meeting">Meetings</label>
                </div>
                <div className="filter-option">
                  <input type="checkbox" id="filter-followup" />
                  <label htmlFor="filter-followup">Follow-ups</label>
                </div>
              </div>
            </div>
            
            <div className="sidebar-section">
              <h3 className="sidebar-title">Time Period</h3>
              <div className="filter-options">
                <div className="filter-option">
                  <input type="radio" id="period-all" name="period" checked />
                  <label htmlFor="period-all">All Upcoming</label>
                </div>
                <div className="filter-option">
                  <input type="radio" id="period-today" name="period" />
                  <label htmlFor="period-today">Today</label>
                </div>
                <div className="filter-option">
                  <input type="radio" id="period-week" name="period" />
                  <label htmlFor="period-week">This Week</label>
                </div>
                <div className="filter-option">
                  <input type="radio" id="period-month" name="period" />
                  <label htmlFor="period-month">This Month</label>
                </div>
              </div>
            </div>
            
            <div className="sidebar-section">
              <h3 className="sidebar-title">Quick Add</h3>
              <div className="quick-add-form">
                <div className="form-group">
                  <label className="form-label">Reminder Type</label>
                  <select className="form-select">
                    <option value="followup">Follow-up</option>
                    <option value="meeting">Meeting</option>
                    <option value="birthday">Birthday</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Contact</label>
                  <select className="form-select">
                    <option value="">Select a contact</option>
                    <option value="2">Sarah Anderson</option>
                    <option value="3">Michael Johnson</option>
                    <option value="4">Emily Williams</option>
                    <option value="5">Robert Brown</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Date</label>
                  <input type="date" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Note</label>
                  <textarea className="form-textarea" rows={3} placeholder="Add a note..."></textarea>
                </div>
                <button className="add-btn">Add Reminder</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Reminders;
