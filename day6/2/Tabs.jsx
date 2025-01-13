// Tabs.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const TabNavigation = () => {
  const location = useLocation();
  const currentTab = location.pathname.split('/')[2]; // Extract tab from URL

  const tabs = ['overview', 'orders', 'settings'];

  return (
    <div className="tabs-navigation">
      {tabs.map((tab) => (
        <Link
          key={tab}
          to={`/profile/${tab}`}
          className={`tab-link ${currentTab === tab ? 'active' : ''}`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </Link>
      ))}
    </div>
  );
};

export const TabContent = ({ tab }) => {
  const contentMap = {
    overview: (
      <div>
        <h2>Profile Overview</h2>
        <p>Welcome back, John Doe! Here’s a quick look at your profile.</p>
        <section>
          <h3>Personal Details</h3>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Phone:</strong> (555) 123-4567</p>
        </section>
        <section>
          <h3>Account Status</h3>
          <p><strong>Status:</strong> Active</p>
          <p><strong>Member since:</strong> January 2021</p>
        </section>
      </div>
    ),
    orders: (
      <div>
        <h2>Your Orders</h2>
        <p>Here’s a list of your recent orders. Click on an order ID to view more details.</p>
        <ul>
          <li>
            <strong>Order ID:</strong> #12345
            <br />
            <strong>Date:</strong> January 5, 2025
            <br />
            <strong>Status:</strong> Shipped
            <br />
            <button>View Details</button>
          </li>
          <li>
            <strong>Order ID:</strong> #12346
            <br />
            <strong>Date:</strong> January 2, 2025
            <br />
            <strong>Status:</strong> Delivered
            <br />
            <button>View Details</button>
          </li>
          <li>
            <strong>Order ID:</strong> #12347
            <br />
            <strong>Date:</strong> December 30, 2024
            <br />
            <strong>Status:</strong> Pending
            <br />
            <button>View Details</button>
          </li>
        </ul>
      </div>
    ),
    settings: (
      <div>
        <h2>Account Settings</h2>
        <p>Manage your account settings below.</p>
        <section>
          <h3>Password Change</h3>
          <form>
            <label>
              Current Password:
              <input type="password" placeholder="Enter your current password" />
            </label>
            <br />
            <label>
              New Password:
              <input type="password" placeholder="Enter a new password" />
            </label>
            <br />
            <label>
              Confirm New Password:
              <input type="password" placeholder="Confirm your new password" />
            </label>
            <br />
            <button type="submit">Change Password</button>
          </form>
        </section>
        <section>
          <h3>Email Notifications</h3>
          <form>
            <label>
              <input type="checkbox" checked />
              Receive marketing emails
            </label>
            <br />
            <label>
              <input type="checkbox" />
              Receive order updates
            </label>
            <br />
            <button type="submit">Save Preferences</button>
          </form>
        </section>
        <section>
          <h3>Delete Account</h3>
          <p>If you wish to delete your account, please proceed below. This action is permanent.</p>
          <button style={{ backgroundColor: 'red', color: 'white' }}>Delete Account</button>
        </section>
      </div>
    ),
  };

  return <div className="tab-content">{contentMap[tab]}</div>;
};
