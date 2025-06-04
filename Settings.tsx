import React, { useState } from 'react';
import Layout from '../layout/Layout';

const Settings: React.FC = () => {
  const [activeSection, setActiveSection] = useState('account');
  
  const renderSettingsContent = () => {
    switch (activeSection) {
      case 'account':
        return (
          <div className="settings-section">
            <h2 className="section-title">Account Settings</h2>
            
            <div className="photo-upload">
              <div className="photo-preview">JD</div>
              <button className="upload-btn">Change Profile Photo</button>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input type="text" className="form-input" defaultValue="John" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-input" defaultValue="Doe" />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" defaultValue="john.doe@example.com" />
            </div>
            
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-input" defaultValue="+1 (555) 123-4567" />
            </div>
            
            <div className="form-group">
              <label className="form-label">Job Title</label>
              <input type="text" className="form-input" defaultValue="Account Manager" />
            </div>
            
            <div className="form-group">
              <label className="form-label">Company/Organization</label>
              <input type="text" className="form-input" defaultValue="Acme Corporation" />
            </div>
            
            <div className="form-group">
              <label className="form-label">Time Zone</label>
              <select className="form-select">
                <option value="utc-8">Pacific Time (UTC-8)</option>
                <option value="utc-7">Mountain Time (UTC-7)</option>
                <option value="utc-6">Central Time (UTC-6)</option>
                <option value="utc-5" selected>Eastern Time (UTC-5)</option>
                <option value="utc+0">UTC</option>
                <option value="utc+1">Central European Time (UTC+1)</option>
                <option value="utc+8">China Standard Time (UTC+8)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Language</label>
              <select className="form-select">
                <option value="en" selected>English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="zh">Chinese</option>
                <option value="ja">Japanese</option>
              </select>
            </div>
          </div>
        );
      
      case 'notifications':
        return (
          <div className="settings-section">
            <h2 className="section-title">Notification Settings</h2>
            
            <div className="setting-item">
              <div className="setting-info">
                <div className="setting-title">Email Notifications</div>
                <div className="setting-description">Receive important updates and reminders via email</div>
              </div>
              <div className="setting-control">
                <label className="toggle-switch">
                  <input type="checkbox" checked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="setting-item">
              <div className="setting-info">
                <div className="setting-title">Push Notifications</div>
                <div className="setting-description">Receive notifications in your browser</div>
              </div>
              <div className="setting-control">
                <label className="toggle-switch">
                  <input type="checkbox" checked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="setting-item">
              <div className="setting-info">
                <div className="setting-title">Reminder Notifications</div>
                <div className="setting-description">Get notified about upcoming reminders</div>
              </div>
              <div className="setting-control">
                <label className="toggle-switch">
                  <input type="checkbox" checked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="setting-item">
              <div className="setting-info">
                <div className="setting-title">Event Notifications</div>
                <div className="setting-description">Get notified about upcoming events</div>
              </div>
              <div className="setting-control">
                <label className="toggle-switch">
                  <input type="checkbox" checked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="setting-item">
              <div className="setting-info">
                <div className="setting-title">Birthday Notifications</div>
                <div className="setting-description">Get notified about contact birthdays</div>
              </div>
              <div className="setting-control">
                <label className="toggle-switch">
                  <input type="checkbox" checked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="setting-item">
              <div className="setting-info">
                <div className="setting-title">Notification Timing</div>
                <div className="setting-description">When to send reminder notifications</div>
              </div>
              <div className="setting-control" style={{ minWidth: '150px' }}>
                <select className="form-select">
                  <option value="day">1 day before</option>
                  <option value="week" selected>1 week before</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
            </div>
          </div>
        );
      
      case 'privacy':
        return (
          <div className="settings-section">
            <h2 className="section-title">Privacy & Security</h2>
            
            <div className="setting-item">
              <div className="setting-info">
                <div className="setting-title">Two-Factor Authentication</div>
                <div className="setting-description">Add an extra layer of security to your account</div>
              </div>
              <div className="setting-control">
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="setting-item">
              <div className="setting-info">
                <div className="setting-title">Data Encryption</div>
                <div className="setting-description">Encrypt your contact data for additional security</div>
              </div>
              <div className="setting-control">
                <label className="toggle-switch">
                  <input type="checkbox" checked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Change Password</label>
              <input type="password" className="form-input" placeholder="Current password" />
              <input type="password" className="form-input mt-2" placeholder="New password" />
              <input type="password" className="form-input mt-2" placeholder="Confirm new password" />
              <button className="change-password-btn mt-2">Update Password</button>
            </div>
            
            <div className="danger-zone">
              <div className="danger-title">Danger Zone</div>
              <p>Once you delete your account, there is no going back. Please be certain.</p>
              <div className="danger-btn">Delete Account</div>
            </div>
          </div>
        );
      
      case 'integrations':
        return (
          <div className="settings-section">
            <h2 className="section-title">Connected Accounts</h2>
            
            <div className="integration-item">
              <div className="integration-icon linkedin-icon"></div>
              <div className="integration-info">
                <div className="integration-title">LinkedIn</div>
                <div className="integration-status integration-connected">Connected as John Doe</div>
              </div>
              <button className="integration-btn disconnect-btn">Disconnect</button>
            </div>
            
            <div className="integration-item">
              <div className="integration-icon google-icon"></div>
              <div className="integration-info">
                <div className="integration-title">Google</div>
                <div className="integration-status">Not connected</div>
              </div>
              <button className="integration-btn connect-btn">Connect</button>
            </div>
            
            <div className="integration-item">
              <div className="integration-icon outlook-icon"></div>
              <div className="integration-info">
                <div className="integration-title">Microsoft Outlook</div>
                <div className="integration-status">Not connected</div>
              </div>
              <button className="integration-btn connect-btn">Connect</button>
            </div>
            
            <div className="integration-item">
              <div className="integration-icon twitter-icon"></div>
              <div className="integration-info">
                <div className="integration-title">Twitter</div>
                <div className="integration-status">Not connected</div>
              </div>
              <button className="integration-btn connect-btn">Connect</button>
            </div>
            
            <div className="integration-item">
              <div className="integration-icon calendar-icon"></div>
              <div className="integration-info">
                <div className="integration-title">Calendar</div>
                <div className="integration-status integration-connected">Connected to Google Calendar</div>
              </div>
              <button className="integration-btn disconnect-btn">Disconnect</button>
            </div>
          </div>
        );
      
      case 'export':
        return (
          <div className="settings-section">
            <h2 className="section-title">Data Export</h2>
            
            <div className="export-options">
              <div className="export-option">
                <div className="export-icon"></div>
                <div className="export-info">
                  <div className="export-title">Export All Data</div>
                  <div className="export-description">Download all your contacts, events, and reminders</div>
                </div>
                <button className="export-btn">Export</button>
              </div>
              
              <div className="export-option">
                <div className="export-icon"></div>
                <div className="export-info">
                  <div className="export-title">Export Contacts</div>
                  <div className="export-description">Download your contacts as CSV or vCard</div>
                </div>
                <button className="export-btn">Export</button>
              </div>
              
              <div className="export-option">
                <div className="export-icon"></div>
                <div className="export-info">
                  <div className="export-title">Export Events</div>
                  <div className="export-description">Download your events as iCal</div>
                </div>
                <button className="export-btn">Export</button>
              </div>
              
              <div className="export-option">
                <div className="export-icon"></div>
                <div className="export-info">
                  <div className="export-title">Export Reminders</div>
                  <div className="export-description">Download your reminders as CSV</div>
                </div>
                <button className="export-btn">Export</button>
              </div>
            </div>
          </div>
        );
      
      case 'help':
        return (
          <div className="settings-section">
            <h2 className="section-title">Help & Support</h2>
            
            <div className="help-options">
              <div className="help-option">
                <div className="help-icon"></div>
                <div className="help-title">Documentation</div>
                <div className="help-description">Read guides and tutorials on how to use Clarify.ai</div>
                <a href="#" className="help-link">View Documentation</a>
              </div>
              
              <div className="help-option">
                <div className="help-icon"></div>
                <div className="help-title">FAQs</div>
                <div className="help-description">Find answers to commonly asked questions</div>
                <a href="#" className="help-link">View FAQs</a>
              </div>
              
              <div className="help-option">
                <div className="help-icon"></div>
                <div className="help-title">Contact Support</div>
                <div className="help-description">Get help from our support team</div>
                <a href="#" className="help-link">Contact Support</a>
              </div>
              
              <div className="help-option">
                <div className="help-icon"></div>
                <div className="help-title">Feedback</div>
                <div className="help-description">Share your thoughts and suggestions</div>
                <a href="#" className="help-link">Provide Feedback</a>
              </div>
            </div>
            
            <div className="about-section">
              <h3>About Clarify.ai</h3>
              <p>Version 1.0.0</p>
              <p>© 2025 Clarify.ai. All rights reserved.</p>
              <div className="about-links">
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <Layout activePage="settings">
      <div className="header">
        <h1 className="page-title">Settings</h1>
      </div>
      
      <div className="settings-container">
        {/* Settings Sidebar */}
        <div className="settings-sidebar">
          <div className="settings-nav">
            <div 
              className={`settings-nav-item ${activeSection === 'account' ? 'active' : ''}`}
              onClick={() => setActiveSection('account')}
            >
              <div className="settings-nav-icon account-icon"></div>
              Account
            </div>
            
            <div 
              className={`settings-nav-item ${activeSection === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveSection('notifications')}
            >
              <div className="settings-nav-icon notifications-icon"></div>
              Notifications
            </div>
            
            <div 
              className={`settings-nav-item ${activeSection === 'privacy' ? 'active' : ''}`}
              onClick={() => setActiveSection('privacy')}
            >
              <div className="settings-nav-icon privacy-icon"></div>
              Privacy & Security
            </div>
            
            <div 
              className={`settings-nav-item ${activeSection === 'integrations' ? 'active' : ''}`}
              onClick={() => setActiveSection('integrations')}
            >
              <div className="settings-nav-icon integrations-icon"></div>
              Integrations
            </div>
            
            <div 
              className={`settings-nav-item ${activeSection === 'export' ? 'active' : ''}`}
              onClick={() => setActiveSection('export')}
            >
              <div className="settings-nav-icon export-icon"></div>
              Data Export
            </div>
            
            <div 
              className={`settings-nav-item ${activeSection === 'help' ? 'active' : ''}`}
              onClick={() => setActiveSection('help')}
            >
              <div className="settings-nav-icon help-icon"></div>
              Help & Support
            </div>
          </div>
        </div>
        
        {/* Settings Content */}
        <div className="settings-content">
          {renderSettingsContent()}
          
          {activeSection !== 'help' && (
            <button className="save-btn">
              <div className="save-icon"></div>
              Save Changes
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
