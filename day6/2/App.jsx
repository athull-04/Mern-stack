// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { TabContent, TabNavigation } from './Tabs';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="profile-page">
        <TabNavigation />
        <Routes>
          <Route path="/profile/overview" element={<TabContent tab="overview" />} />
          <Route path="/profile/orders" element={<TabContent tab="orders" />} />
          <Route path="/profile/settings" element={<TabContent tab="settings" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
