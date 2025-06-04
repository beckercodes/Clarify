import React, { useState } from 'react';

const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  
  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };
  
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="onboarding-step welcome-step">
            <div className="step-icon"></div>
            <h2 className="step-title">Welcome to Clarify.ai</h2>
            <p className="step-description">
              Your personal relationship management assistant. Let's set up your account to help you build and maintain meaningful professional connections.
            </p>
            <div className="step-actions">
              <button className="next-btn" onClick={nextStep}>Get Started</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="onboarding-step profile-step">
            <div className="step-icon"></div>
            <h2 className="step-title">Set Up Your Profile</h2>
            <p className="step-description">
              Tell us a bit about yourself so your contacts can recognize you.
            </p>
            <div className="profile-form">
              <div className="photo-upload">
                <div className="photo-preview">JD</div>
                <button className="upload-btn">Upload Photo</button>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name*</label>
                  <input type="text" className="form-input" defaultValue="John" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name*</label>
                  <input type="text" className="form-input" defaultValue="Doe" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Job Title</label>
                <input type="text" className="form-input" defaultValue="Account Manager" />
              </div>
              <div className="form-group">
                <label className="form-label">Company/Organization</label>
                <input type="text" className="form-input" defaultValue="Acme Corporation" />
              </div>
            </div>
            <div className="step-actions">
              <button className="back-btn" onClick={prevStep}>Back</button>
              <button className="next-btn" onClick={nextStep}>Continue</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="onboarding-step import-step">
            <div className="step-icon"></div>
            <h2 className="step-title">Import Your Contacts</h2>
            <p className="step-description">
              Start building your network by importing contacts from other platforms.
            </p>
            <div className="import-options">
              <div className="import-option">
                <div className="import-icon linkedin-icon"></div>
                <div className="import-label">LinkedIn</div>
                <button className="import-btn">Connect</button>
              </div>
              <div className="import-option">
                <div className="import-icon google-icon"></div>
                <div className="import-label">Google Contacts</div>
                <button className="import-btn">Connect</button>
              </div>
              <div className="import-option">
                <div className="import-icon outlook-icon"></div>
                <div className="import-label">Microsoft Outlook</div>
                <button className="import-btn">Connect</button>
              </div>
              <div className="import-option">
                <div className="import-icon csv-icon"></div>
                <div className="import-label">CSV File</div>
                <button className="import-btn">Upload</button>
              </div>
            </div>
            <div className="skip-option">
              <button className="skip-btn">Skip for now</button>
            </div>
            <div className="step-actions">
              <button className="back-btn" onClick={prevStep}>Back</button>
              <button className="next-btn" onClick={nextStep}>Continue</button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="onboarding-step preferences-step">
            <div className="step-icon"></div>
            <h2 className="step-title">Set Your Preferences</h2>
            <p className="step-description">
              Customize your experience to match your networking style.
            </p>
            <div className="preferences-form">
              <div className="preference-item">
                <div className="preference-info">
                  <div className="preference-title">Reminder Frequency</div>
                  <div className="preference-description">How often should we remind you to follow up with contacts?</div>
                </div>
                <div className="preference-control">
                  <select className="form-select">
                    <option value="weekly">Weekly</option>
                    <option value="biweekly" selected>Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
              </div>
              <div className="preference-item">
                <div className="preference-info">
                  <div className="preference-title">Email Notifications</div>
                  <div className="preference-description">Receive email notifications for important reminders and events</div>
                </div>
                <div className="preference-control">
                  <label className="toggle-switch">
                    <input type="checkbox" checked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
              <div className="preference-item">
                <div className="preference-info">
                  <div className="preference-title">Dark Mode</div>
                  <div className="preference-description">Switch between light and dark themes</div>
                </div>
                <div className="preference-control">
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="step-actions">
              <button className="back-btn" onClick={prevStep}>Back</button>
              <a href="/" className="finish-btn">Finish Setup</a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-header">
        <div className="logo">Clarify.ai</div>
        <div className="progress-container">
          <div className="progress-steps">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div 
                key={index} 
                className={`progress-step ${index + 1 === step ? 'active' : ''} ${index + 1 < step ? 'completed' : ''}`}
              >
                {index + 1 < step ? (
                  <div className="step-check"></div>
                ) : (
                  <div className="step-number">{index + 1}</div>
                )}
              </div>
            ))}
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}></div>
          </div>
        </div>
      </div>
      
      <div className="onboarding-content">
        {renderStep()}
      </div>
    </div>
  );
};

export default Onboarding;
