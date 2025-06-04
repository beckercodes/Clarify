import React from 'react';
import Layout from '../layout/Layout';
import { useParams } from 'react-router-dom';

const ContactProfile: React.FC = () => {
  const { id } = useParams();
  
  // Mock data for the contact profile
  const contact = {
    id: id,
    name: 'Sarah Anderson',
    initials: 'SA',
    title: 'VP of Finance',
    company: 'Goldman Sachs',
    email: 'sarah.anderson@example.com',
    phone: '(212) 555-1234',
    location: 'New York, NY',
    birthday: 'June 4, 1985',
    linkedin: 'linkedin.com/in/sarahanderson',
    twitter: '@sarahanderson',
    website: 'sarahanderson.com',
    tags: ['Finance', 'VIP', 'NYC'],
    notes: 'Met at Financial Technology Conference in 2024. Interested in investment opportunities in AI startups. Follow up about potential partnership.',
    lastContact: 'May 28, 2025',
    connectionStrength: 'Strong',
    mutualConnections: [
      { id: '2', name: 'Michael Johnson', company: 'Microsoft' },
      { id: '3', name: 'Emily Williams', company: 'JP Morgan' }
    ],
    timeline: [
      { date: 'May 28, 2025', type: 'note', content: 'Discussed potential investment in AI startup' },
      { date: 'April 15, 2025', type: 'meeting', content: 'Coffee meeting at Starbucks' },
      { date: 'March 3, 2025', type: 'email', content: 'Sent follow-up email about conference' },
      { date: 'February 20, 2025', type: 'event', content: 'Met at Financial Technology Conference' }
    ]
  };

  return (
    <Layout activePage="contacts">
      <div className="header">
        <a href="/search" className="back-button">
          <div className="back-icon"></div>
          Back to Contacts
        </a>
        
        <div className="header-actions">
          <button className="edit-btn">
            <div className="edit-icon"></div>
            Edit
          </button>
          <div className="more-options">
            <div className="more-icon"></div>
          </div>
        </div>
      </div>
      
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">{contact.initials}</div>
          <div className="profile-info">
            <h1 className="profile-name">{contact.name}</h1>
            <div className="profile-title">{contact.title}</div>
            <div className="profile-company">{contact.company}</div>
            <div className="profile-tags">
              {contact.tags.map((tag, index) => (
                <div key={index} className="profile-tag">{tag}</div>
              ))}
            </div>
          </div>
          <div className="connection-strength">
            <div className="strength-label">Connection Strength</div>
            <div className="strength-meter strong">
              <div className="strength-bar"></div>
              <div className="strength-bar"></div>
              <div className="strength-bar"></div>
            </div>
            <div className="strength-text">Strong</div>
          </div>
        </div>
        
        <div className="profile-grid">
          <div className="profile-card contact-details-card">
            <h2 className="card-title">Contact Details</h2>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon email-icon"></div>
                <div className="contact-label">Email</div>
                <div className="contact-value">{contact.email}</div>
              </div>
              <div className="contact-item">
                <div className="contact-icon phone-icon"></div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">{contact.phone}</div>
              </div>
              <div className="contact-item">
                <div className="contact-icon location-icon"></div>
                <div className="contact-label">Location</div>
                <div className="contact-value">{contact.location}</div>
              </div>
              <div className="contact-item">
                <div className="contact-icon birthday-icon"></div>
                <div className="contact-label">Birthday</div>
                <div className="contact-value">{contact.birthday}</div>
              </div>
              <div className="contact-item">
                <div className="contact-icon linkedin-icon"></div>
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value">{contact.linkedin}</div>
              </div>
              <div className="contact-item">
                <div className="contact-icon twitter-icon"></div>
                <div className="contact-label">Twitter</div>
                <div className="contact-value">{contact.twitter}</div>
              </div>
              <div className="contact-item">
                <div className="contact-icon website-icon"></div>
                <div className="contact-label">Website</div>
                <div className="contact-value">{contact.website}</div>
              </div>
            </div>
          </div>
          
          <div className="profile-card notes-card">
            <div className="card-header">
              <h2 className="card-title">Notes</h2>
              <button className="add-note-btn">
                <div className="add-icon"></div>
                Add Note
              </button>
            </div>
            <div className="notes-content">
              <p>{contact.notes}</p>
            </div>
          </div>
          
          <div className="profile-card mutual-connections-card">
            <div className="card-header">
              <h2 className="card-title">Mutual Connections</h2>
              <a href="/network" className="view-all">View in Network</a>
            </div>
            <div className="mutual-connections-list">
              {contact.mutualConnections.map((connection, index) => (
                <div key={index} className="mutual-connection">
                  <div className="connection-avatar">{connection.name.split(' ').map(n => n[0]).join('')}</div>
                  <div className="connection-info">
                    <div className="connection-name">{connection.name}</div>
                    <div className="connection-company">{connection.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="profile-card timeline-card">
            <h2 className="card-title">Timeline</h2>
            <div className="timeline">
              {contact.timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className={`timeline-icon ${item.type}-icon`}>
                    <div className="timeline-icon-inner"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-date">{item.date}</div>
                    <div className="timeline-text">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="profile-card reminders-card">
            <div className="card-header">
              <h2 className="card-title">Reminders</h2>
              <button className="add-reminder-btn">
                <div className="add-icon"></div>
                Add Reminder
              </button>
            </div>
            <div className="reminders-list">
              <div className="reminder-item">
                <div className="reminder-icon followup-icon">
                  <div className="reminder-icon-inner"></div>
                </div>
                <div className="reminder-content">
                  <div className="reminder-title">Follow up about AI investment</div>
                  <div className="reminder-date">June 15, 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactProfile;
