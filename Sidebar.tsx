import React from 'react';

interface SidebarProps {
  activePage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage }) => {
  return (
    <div className="sidebar">
      <div className="logo">Clarify.ai</div>
      
      <a href="/" className={`nav-item ${activePage === 'dashboard' ? 'active' : ''}`}>
        <div className="nav-icon dashboard-icon"></div>
        Dashboard
      </a>
      
      <a href="/search" className={`nav-item ${activePage === 'contacts' ? 'active' : ''}`}>
        <div className="nav-icon contacts-icon"></div>
        Contacts
      </a>
      
      <a href="/network" className={`nav-item ${activePage === 'network' ? 'active' : ''}`}>
        <div className="nav-icon network-icon"></div>
        Network
      </a>
      
      <a href="/events" className={`nav-item ${activePage === 'events' ? 'active' : ''}`}>
        <div className="nav-icon events-icon"></div>
        Events
      </a>
      
      <a href="/reminders" className={`nav-item ${activePage === 'reminders' ? 'active' : ''}`}>
        <div className="nav-icon reminders-icon"></div>
        Reminders
      </a>
      
      <a href="/settings" className={`nav-item ${activePage === 'settings' ? 'active' : ''}`}>
        <div className="nav-icon settings-icon"></div>
        Settings
      </a>
      
      <div className="user-profile">
        <div className="avatar">JD</div>
        <div className="user-info">
          <div className="user-name">John Doe</div>
          <div className="user-role">Account Manager</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
