import React, { useState } from 'react';
import './topusers.css'; 
import Bottom from '../../components/bottom/Bottom';
import Navbar from '../../components/navbar/Navbar';
import defaultUserImage from './download.png'; 

const TopUsersPage = () => {
  const [activeTab, setActiveTab] = useState('today');

  // Dummy data for demonstration
  const topUsersData = {
    today: [
      { id: 1, name: 'User 1', score: 100, mantraCount: 250 },
      { id: 2, name: 'User 2', score: 90, mantraCount: 200 },
      { id: 3, name: 'User 3', score: 80, mantraCount: 180 }
    ],
    week: [
      { id: 4, name: 'User 4', score: 300, mantraCount: 600 },
      { id: 5, name: 'User 5', score: 250, mantraCount: 550 },
      { id: 6, name: 'User 6', score: 200, mantraCount: 500 }
    ],
    month: [
      { id: 7, name: 'User 7', score: 600, mantraCount: 1200 },
      { id: 8, name: 'User 8', score: 550, mantraCount: 1100 },
      { id: 9, name: 'User 9', score: 500, mantraCount: 1000 }
    ],
    allTime: [
      { id: 10, name: 'User 10', score: 1200, mantraCount: 2400 },
      { id: 11, name: 'User 11', score: 1100, mantraCount: 2200 },
      { id: 12, name: 'User 12', score: 1000, mantraCount: 2000 }
    ]
  };
  function Separator({ color = "black", height = 1 }) {
    return (
      <hr
        style={{
          backgroundColor: color,
          height: height,
          border: "none"
        }}
      />
    );
  }

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
    <div className='middle'>
      <h1 >Top Users</h1>
      </div>
    <div className="top-users-page">
      
      <div className="top-users-container">
     
        <div className="top-users-content">
         
          <div className="tabs">
            <button className={activeTab === 'today' ? 'active' : ''} onClick={() => handleTabClick('today')}>Today</button>
            <button className={activeTab === 'week' ? 'active' : ''} onClick={() => handleTabClick('week')}>This Week</button>
            <button className={activeTab === 'month' ? 'active' : ''} onClick={() => handleTabClick('month')}>This Month</button>
            <button className={activeTab === 'allTime' ? 'active' : ''} onClick={() => handleTabClick('allTime')}>All Time</button>
          </div>
          <div className="top-users-list">
          <Separator color="yellow" height="1px" />
            {topUsersData[activeTab].map((user, index) => (
              <div key={user.id} className="user-card">
                <div className="user-info">
                  <div className="serial-number">{index + 1}.</div> {/* Serial number */}
                  <div>
                 
                    <img src={defaultUserImage} alt="User" className="user-image" />
                  </div>
                  <div>
                    <h3 className='user-name'>{user.name}</h3>
                    
                    <p>Total Mantralekhan: {user.mantraCount}</p>
                  </div>
                </div>
                <Separator color="yellow" height="1px" />
              </div>
              
            ))}
          </div>
          
        </div>
      </div>
      
      <div className='middle'>
        <button className='button'>Start Mantralekhan</button>
      </div>
    </div>
     
   </div>
  );
};

export default TopUsersPage;
