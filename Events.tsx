import React, { useState } from 'react';
import Layout from '../layout/Layout';

const Events: React.FC = () => {
  const [activeView, setActiveView] = useState('calendar');
  const selectedDate = new Date();
  
  // Mock data for events
  const events = [
    {
      id: '1',
      title: 'Financial Technology Conference',
      date: 'June 15-17, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Javits Center, New York, NY',
      description: 'Annual conference for financial technology innovations and networking.',
      attendees: [
        { id: '2', name: 'Sarah Anderson', company: 'Goldman Sachs' },
        { id: '3', name: 'Michael Johnson', company: 'Microsoft' },
        { id: '4', name: 'Emily Williams', company: 'JP Morgan' }
      ]
    },
    {
      id: '2',
      title: 'Coffee with Michael Johnson',
      date: 'June 4, 2025',
      time: '2:00 PM - 3:00 PM',
      location: 'Starbucks, 123 Tech Ave, Seattle, WA',
      description: 'Discuss potential collaboration on AI project.',
      attendees: [
        { id: '3', name: 'Michael Johnson', company: 'Microsoft' }
      ]
    },
    {
      id: '3',
      title: 'Quarterly Investment Review',
      date: 'June 10, 2025',
      time: '10:00 AM - 11:30 AM',
      location: 'Goldman Sachs HQ, New York, NY',
      description: 'Review investment portfolio performance and discuss new opportunities.',
      attendees: [
        { id: '2', name: 'Sarah Anderson', company: 'Goldman Sachs' },
        { id: '4', name: 'Emily Williams', company: 'JP Morgan' }
      ]
    },
    {
      id: '4',
      title: 'Tech Startup Pitch Night',
      date: 'June 20, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'Innovation Hub, San Francisco, CA',
      description: 'Networking event with presentations from emerging tech startups.',
      attendees: [
        { id: '5', name: 'Robert Brown', company: 'Apple' },
        { id: '6', name: 'Jennifer Davis', company: 'Google' },
        { id: '7', name: 'William Miller', company: 'Amazon' }
      ]
    }
  ];

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    
    // Get first day of month and total days in month
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Previous month days to show
    const prevMonthDays = firstDay === 0 ? 6 : firstDay - 1;
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    const days = [];
    
    // Add previous month days
    for (let i = prevMonthDays - 1; i >= 0; i--) {
      days.push({
        date: daysInPrevMonth - i,
        currentMonth: false,
        hasEvents: false
      });
    }
    
    // Add current month days
    for (let i = 1; i <= daysInMonth; i++) {
      // Check if day has events
      const hasEvents = events.some(event => {
        const eventDate = new Date(event.date.split('-')[0].trim());
        return eventDate.getDate() === i && 
               eventDate.getMonth() === month && 
               eventDate.getFullYear() === year;
      });
      
      days.push({
        date: i,
        currentMonth: true,
        hasEvents,
        isToday: new Date().getDate() === i && 
                 new Date().getMonth() === month && 
                 new Date().getFullYear() === year
      });
    }
    
    // Add next month days to complete grid
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: i,
        currentMonth: false,
        hasEvents: false
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <Layout activePage="events">
      <div className="header">
        <h1 className="page-title">Events</h1>
        <button className="add-event-btn">
          <div className="add-icon"></div>
          Add Event
        </button>
      </div>
      
      <div className="view-toggle">
        <button 
          className={`view-btn ${activeView === 'calendar' ? 'active' : ''}`}
          onClick={() => setActiveView('calendar')}
        >
          <div className="calendar-icon"></div>
          Calendar
        </button>
        <button 
          className={`view-btn ${activeView === 'list' ? 'active' : ''}`}
          onClick={() => setActiveView('list')}
        >
          <div className="list-icon"></div>
          List
        </button>
      </div>
      
      {activeView === 'calendar' ? (
        <div className="calendar-view">
          <div className="calendar-header">
            <div className="month-navigation">
              <button className="prev-month-btn">
                <div className="prev-icon"></div>
              </button>
              <div className="current-month">
                {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
              </div>
              <button className="next-month-btn">
                <div className="next-icon"></div>
              </button>
            </div>
            <button className="today-btn">Today</button>
          </div>
          
          <div className="calendar-grid">
            <div className="weekdays">
              <div className="weekday">Mon</div>
              <div className="weekday">Tue</div>
              <div className="weekday">Wed</div>
              <div className="weekday">Thu</div>
              <div className="weekday">Fri</div>
              <div className="weekday">Sat</div>
              <div className="weekday">Sun</div>
            </div>
            
            <div className="days">
              {calendarDays.map((day, index) => (
                <div 
                  key={index} 
                  className={`day ${!day.currentMonth ? 'other-month' : ''} ${day.isToday ? 'today' : ''}`}
                >
                  <div className="day-number">{day.date}</div>
                  {day.hasEvents && (
                    <div className="day-events-indicator"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="selected-day-events">
            <h3 className="selected-date">June 4, 2025</h3>
            <div className="day-events">
              <div className="event-item">
                <div className="event-time">2:00 PM - 3:00 PM</div>
                <div className="event-details">
                  <div className="event-title">Coffee with Michael Johnson</div>
                  <div className="event-location">Starbucks, 123 Tech Ave, Seattle, WA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="list-view">
          <div className="events-list">
            {events.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-header">
                  <div className="event-date-time">
                    <div className="event-date">{event.date}</div>
                    <div className="event-time">{event.time}</div>
                  </div>
                  <div className="event-actions">
                    <button className="edit-btn">
                      <div className="edit-icon"></div>
                    </button>
                    <button className="delete-btn">
                      <div className="delete-icon"></div>
                    </button>
                  </div>
                </div>
                
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-location">
                    <div className="location-icon"></div>
                    {event.location}
                  </div>
                  <p className="event-description">{event.description}</p>
                </div>
                
                <div className="event-attendees">
                  <h4 className="attendees-title">Attendees</h4>
                  <div className="attendees-list">
                    {event.attendees.map((attendee, index) => (
                      <a key={index} href={`/contact/${attendee.id}`} className="attendee-item">
                        <div className="attendee-avatar">
                          {attendee.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="attendee-info">
                          <div className="attendee-name">{attendee.name}</div>
                          <div className="attendee-company">{attendee.company}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="events-sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">Filter Events</h3>
              <div className="filter-options">
                <div className="filter-option">
                  <input type="checkbox" id="filter-all-events" checked />
                  <label htmlFor="filter-all-events">All Events</label>
                </div>
                <div className="filter-option">
                  <input type="checkbox" id="filter-meetings" />
                  <label htmlFor="filter-meetings">Meetings</label>
                </div>
                <div className="filter-option">
                  <input type="checkbox" id="filter-conferences" />
                  <label htmlFor="filter-conferences">Conferences</label>
                </div>
                <div className="filter-option">
                  <input type="checkbox" id="filter-networking" />
                  <label htmlFor="filter-networking">Networking</label>
                </div>
              </div>
            </div>
            
            <div className="sidebar-section">
              <h3 className="sidebar-title">Time Period</h3>
              <div className="filter-options">
                <div className="filter-option">
                  <input type="radio" id="period-all-events" name="period" checked />
                  <label htmlFor="period-all-events">All Upcoming</label>
                </div>
                <div className="filter-option">
                  <input type="radio" id="period-today-events" name="period" />
                  <label htmlFor="period-today-events">Today</label>
                </div>
                <div className="filter-option">
                  <input type="radio" id="period-week-events" name="period" />
                  <label htmlFor="period-week-events">This Week</label>
                </div>
                <div className="filter-option">
                  <input type="radio" id="period-month-events" name="period" />
                  <label htmlFor="period-month-events">This Month</label>
                </div>
              </div>
            </div>
            
            <div className="sidebar-section">
              <h3 className="sidebar-title">Quick Add Event</h3>
              <div className="quick-add-form">
                <div className="form-group">
                  <label className="form-label">Event Title</label>
                  <input type="text" className="form-input" placeholder="Enter event title" />
                </div>
                <div className="form-group">
                  <label className="form-label">Date</label>
                  <input type="date" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Time</label>
                  <div className="time-inputs">
                    <input type="time" className="form-input" />
                    <span>to</span>
                    <input type="time" className="form-input" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Location</label>
                  <input type="text" className="form-input" placeholder="Enter location" />
                </div>
                <button className="add-btn">Add Event</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Events;
