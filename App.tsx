import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages
import Dashboard from './components/pages/Dashboard';
import ContactProfile from './components/pages/ContactProfile';
import NetworkVisualization from './components/pages/NetworkVisualization';
import AddEditContact from './components/pages/AddEditContact';
import Onboarding from './components/pages/Onboarding';
import Reminders from './components/pages/Reminders';
import Events from './components/pages/Events';
import Settings from './components/pages/Settings';
import SearchFilter from './components/pages/SearchFilter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contact/:id" element={<ContactProfile />} />
        <Route path="/network" element={<NetworkVisualization />} />
        <Route path="/contact/add" element={<AddEditContact />} />
        <Route path="/contact/edit/:id" element={<AddEditContact />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/events" element={<Events />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/search" element={<SearchFilter />} />
      </Routes>
    </Router>
  );
}

export default App;
