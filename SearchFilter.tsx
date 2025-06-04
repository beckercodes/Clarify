import React, { useState } from 'react';
import Layout from '../layout/Layout';

const SearchFilter: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(true);
  
  // Mock data for search results
  const searchResults = [
    {
      id: '2',
      name: 'Sarah Anderson',
      initials: 'SA',
      title: 'VP of Finance',
      company: 'Goldman Sachs',
      email: 'sarah.anderson@example.com',
      phone: '(212) 555-1234',
      location: 'New York, NY',
      tags: ['Finance', 'VIP']
    },
    {
      id: '3',
      name: 'Michael Johnson',
      initials: 'MJ',
      title: 'CTO',
      company: 'Microsoft',
      email: 'michael.johnson@example.com',
      phone: '(425) 555-6789',
      location: 'Seattle, WA',
      tags: ['Technology', 'Client']
    },
    {
      id: '4',
      name: 'Emily Williams',
      initials: 'EW',
      title: 'Investment Analyst',
      company: 'JP Morgan',
      email: 'emily.williams@example.com',
      phone: '(212) 555-9876',
      location: 'New York, NY',
      tags: ['Finance', 'Prospect']
    },
    {
      id: '5',
      name: 'Robert Brown',
      initials: 'RB',
      title: 'Product Manager',
      company: 'Apple',
      email: 'robert.brown@example.com',
      phone: '(408) 555-4321',
      location: 'Cupertino, CA',
      tags: ['Technology', 'Partner']
    }
  ];

  return (
    <Layout activePage="contacts">
      <div className="header">
        <h1 className="page-title">Search & Filter</h1>
      </div>
      
      <div className="search-container">
        {/* Search Bar */}
        <div className="search-bar-container">
          <div className="search-icon"></div>
          <input type="text" className="search-input" placeholder="Search contacts, companies, or notes..." />
          <div className="voice-search-icon"></div>
        </div>
        
        {/* Filter Bar */}
        <div className="filter-bar">
          <div 
            className={`filter-item ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Contacts
          </div>
          <div 
            className={`filter-item ${activeFilter === 'recent' ? 'active' : ''}`}
            onClick={() => setActiveFilter('recent')}
          >
            Recent
          </div>
          <div 
            className={`filter-item ${activeFilter === 'favorites' ? 'active' : ''}`}
            onClick={() => setActiveFilter('favorites')}
          >
            Favorites
          </div>
          
          <div className="filter-dropdown">
            <div className="filter-dropdown-btn">
              Industry
              <div className="dropdown-icon"></div>
            </div>
            <div className="filter-dropdown-content">
              <div className="dropdown-item">Finance</div>
              <div className="dropdown-item">Technology</div>
              <div className="dropdown-item">Healthcare</div>
              <div className="dropdown-item">Education</div>
              <div className="dropdown-item">Real Estate</div>
            </div>
          </div>
          
          <div className="filter-dropdown">
            <div className="filter-dropdown-btn">
              Location
              <div className="dropdown-icon"></div>
            </div>
            <div className="filter-dropdown-content">
              <div className="dropdown-item">New York</div>
              <div className="dropdown-item">San Francisco</div>
              <div className="dropdown-item">Chicago</div>
              <div className="dropdown-item">Los Angeles</div>
              <div className="dropdown-item">Boston</div>
            </div>
          </div>
          
          <div className="filter-dropdown">
            <div className="filter-dropdown-btn">
              Tags
              <div className="dropdown-icon"></div>
            </div>
            <div className="filter-dropdown-content">
              <div className="dropdown-item">VIP</div>
              <div className="dropdown-item">Client</div>
              <div className="dropdown-item">Prospect</div>
              <div className="dropdown-item">Partner</div>
              <div className="dropdown-item">Vendor</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Advanced Filters */}
      <div className="advanced-filters">
        <div className="advanced-filters-header">
          <h2 className="advanced-filters-title">Advanced Filters</h2>
          <div 
            className="toggle-filters"
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          >
            {showAdvancedFilters ? 'Hide Filters' : 'Show Filters'}
            <div className="toggle-icon"></div>
          </div>
        </div>
        
        {showAdvancedFilters && (
          <>
            <div className="filters-grid">
              <div className="filter-group">
                <label className="filter-label">Name</label>
                <input type="text" className="filter-input" placeholder="Enter name" />
              </div>
              
              <div className="filter-group">
                <label className="filter-label">Company</label>
                <input type="text" className="filter-input" placeholder="Enter company name" />
              </div>
              
              <div className="filter-group">
                <label className="filter-label">Job Title</label>
                <input type="text" className="filter-input" placeholder="Enter job title" />
              </div>
              
              <div className="filter-group">
                <label className="filter-label">Industry</label>
                <select className="filter-select">
                  <option value="">Select industry</option>
                  <option value="finance">Finance</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="real-estate">Real Estate</option>
                </select>
              </div>
              
              <div className="filter-group">
                <label className="filter-label">Location</label>
                <input type="text" className="filter-input" placeholder="City, State, or Country" />
              </div>
              
              <div className="filter-group">
                <label className="filter-label">Last Contact Date</label>
                <div className="range-container">
                  <input type="date" className="filter-input range-input" />
                  <span className="range-separator">to</span>
                  <input type="date" className="filter-input range-input" />
                </div>
              </div>
              
              <div className="filter-group">
                <label className="filter-label">Tags</label>
                <div className="checkbox-group">
                  <div className="checkbox-item">
                    <input type="checkbox" className="checkbox-input" id="tag-vip" />
                    <label htmlFor="tag-vip">VIP</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="checkbox" className="checkbox-input" id="tag-client" />
                    <label htmlFor="tag-client">Client</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="checkbox" className="checkbox-input" id="tag-prospect" />
                    <label htmlFor="tag-prospect">Prospect</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="checkbox" className="checkbox-input" id="tag-partner" />
                    <label htmlFor="tag-partner">Partner</label>
                  </div>
                </div>
              </div>
              
              <div className="filter-group">
                <label className="filter-label">Connection Strength</label>
                <select className="filter-select">
                  <option value="">Any</option>
                  <option value="strong">Strong</option>
                  <option value="medium">Medium</option>
                  <option value="weak">Weak</option>
                </select>
              </div>
            </div>
            
            <div className="filter-actions">
              <button className="reset-btn">Reset Filters</button>
              <button className="apply-btn">Apply Filters</button>
            </div>
          </>
        )}
      </div>
      
      {/* Search Results */}
      <div className="search-results">
        <div className="results-header">
          <div className="results-count">{searchResults.length} contacts found</div>
          
          <div className="sort-dropdown">
            <div className="sort-btn">
              <div className="sort-icon"></div>
              Sort by: Name (A-Z)
            </div>
            <div className="sort-dropdown-content">
              <div className="dropdown-item">Name (A-Z)</div>
              <div className="dropdown-item">Name (Z-A)</div>
              <div className="dropdown-item">Company (A-Z)</div>
              <div className="dropdown-item">Recently Added</div>
              <div className="dropdown-item">Last Contact Date</div>
            </div>
          </div>
        </div>
        
        <div className="results-grid">
          {searchResults.map(contact => (
            <div key={contact.id} className="contact-card">
              <div className="contact-header">
                <div className="contact-avatar">{contact.initials}</div>
                <div className="contact-info">
                  <div className="contact-name">{contact.name}</div>
                  <div className="contact-title">{contact.title}</div>
                  <div className="contact-company">{contact.company}</div>
                </div>
              </div>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon email-icon"></div>
                  <div className="contact-text">{contact.email}</div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon phone-icon"></div>
                  <div className="contact-text">{contact.phone}</div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon location-icon"></div>
                  <div className="contact-text">{contact.location}</div>
                </div>
                
                <div className="contact-tags">
                  {contact.tags.map((tag, index) => (
                    <div key={index} className="contact-tag">{tag}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="pagination">
          <div className="pagination-arrow">
            <div className="arrow-icon prev-icon"></div>
          </div>
          <div className="pagination-item active">1</div>
          <div className="pagination-item">2</div>
          <div className="pagination-item">3</div>
          <div className="pagination-item">4</div>
          <div className="pagination-item">5</div>
          <div className="pagination-arrow">
            <div className="arrow-icon next-icon"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchFilter;
