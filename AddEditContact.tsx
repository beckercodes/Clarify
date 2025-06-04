import React, { useState } from 'react';
import Layout from '../layout/Layout';
import { useParams, useNavigate } from 'react-router-dom';

interface ContactData {
  id?: string;
  firstName: string;
  lastName: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  birthday: string;
  linkedin: string;
  twitter: string;
  website: string;
  tags: string[];
  notes: string;
}

const AddEditContact: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;
  
  // Mock data for editing
  const initialContact: ContactData = isEditing ? {
    id: id,
    firstName: 'Sarah',
    lastName: 'Anderson',
    title: 'VP of Finance',
    company: 'Goldman Sachs',
    email: 'sarah.anderson@example.com',
    phone: '(212) 555-1234',
    location: 'New York, NY',
    birthday: '1985-06-04',
    linkedin: 'linkedin.com/in/sarahanderson',
    twitter: '@sarahanderson',
    website: 'sarahanderson.com',
    tags: ['Finance', 'VIP', 'NYC'],
    notes: 'Met at Financial Technology Conference in 2024. Interested in investment opportunities in AI startups. Follow up about potential partnership.',
  } : {
    firstName: '',
    lastName: '',
    title: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    birthday: '',
    linkedin: '',
    twitter: '',
    website: '',
    tags: [],
    notes: '',
  };
  
  const [contact, setContact] = useState<ContactData>(initialContact);
  const [tagInput, setTagInput] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContact(prev => ({ ...prev, [name]: value }));
  };
  
  const handleAddTag = () => {
    if (tagInput.trim() && !contact.tags.includes(tagInput.trim())) {
      setContact(prev => ({ ...prev, tags: [...prev.tags, tagInput.trim()] }));
      setTagInput('');
    }
  };
  
  const handleRemoveTag = (tag: string) => {
    setContact(prev => ({ ...prev, tags: prev.tags.filter(t => t !== tag) }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save the contact to a database
    console.log('Saving contact:', contact);
    navigate('/search');
  };

  return (
    <Layout activePage="contacts">
      <div className="header">
        <a href="/search" className="back-button">
          <div className="back-icon"></div>
          Back to Contacts
        </a>
        <h1 className="page-title">{isEditing ? 'Edit Contact' : 'Add New Contact'}</h1>
      </div>
      
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h2 className="section-title">Basic Information</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name*</label>
                <input 
                  type="text" 
                  className="form-input" 
                  name="firstName" 
                  value={contact.firstName} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Last Name*</label>
                <input 
                  type="text" 
                  className="form-input" 
                  name="lastName" 
                  value={contact.lastName} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Job Title</label>
                <input 
                  type="text" 
                  className="form-input" 
                  name="title" 
                  value={contact.title} 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Company/Organization</label>
                <input 
                  type="text" 
                  className="form-input" 
                  name="company" 
                  value={contact.company} 
                  onChange={handleChange} 
                />
              </div>
            </div>
          </div>
          
          <div className="form-section">
            <h2 className="section-title">Contact Details</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-input" 
                  name="email" 
                  value={contact.email} 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input 
                  type="tel" 
                  className="form-input" 
                  name="phone" 
                  value={contact.phone} 
                  onChange={handleChange} 
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Location</label>
              <input 
                type="text" 
                className="form-input" 
                name="location" 
                value={contact.location} 
                onChange={handleChange} 
                placeholder="City, State, Country" 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Birthday</label>
              <input 
                type="date" 
                className="form-input" 
                name="birthday" 
                value={contact.birthday} 
                onChange={handleChange} 
              />
            </div>
          </div>
          
          <div className="form-section">
            <h2 className="section-title">Social Profiles</h2>
            
            <div className="form-group">
              <label className="form-label">LinkedIn</label>
              <input 
                type="text" 
                className="form-input" 
                name="linkedin" 
                value={contact.linkedin} 
                onChange={handleChange} 
                placeholder="linkedin.com/in/username" 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Twitter</label>
              <input 
                type="text" 
                className="form-input" 
                name="twitter" 
                value={contact.twitter} 
                onChange={handleChange} 
                placeholder="@username" 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Website</label>
              <input 
                type="text" 
                className="form-input" 
                name="website" 
                value={contact.website} 
                onChange={handleChange} 
                placeholder="example.com" 
              />
            </div>
          </div>
          
          <div className="form-section">
            <h2 className="section-title">Tags</h2>
            
            <div className="tags-input-container">
              <div className="tags-display">
                {contact.tags.map((tag, index) => (
                  <div key={index} className="tag-item">
                    {tag}
                    <span className="tag-remove" onClick={() => handleRemoveTag(tag)}>×</span>
                  </div>
                ))}
              </div>
              
              <div className="tag-input-row">
                <input 
                  type="text" 
                  className="form-input tag-input" 
                  value={tagInput} 
                  onChange={(e) => setTagInput(e.target.value)} 
                  placeholder="Add a tag" 
                />
                <button type="button" className="add-tag-btn" onClick={handleAddTag}>Add</button>
              </div>
            </div>
          </div>
          
          <div className="form-section">
            <h2 className="section-title">Notes</h2>
            
            <div className="form-group">
              <textarea 
                className="form-textarea" 
                name="notes" 
                value={contact.notes} 
                onChange={handleChange} 
                rows={4} 
                placeholder="Add notes about this contact..." 
              ></textarea>
            </div>
          </div>
          
          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={() => navigate('/search')}>Cancel</button>
            <button type="submit" className="save-btn">Save Contact</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddEditContact;
