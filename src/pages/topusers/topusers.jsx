import React, { useState,useEffect,setError } from 'react';
import './topusers.css'; 
import Bottom from '../../components/bottom/Bottom';
import Navbar from '../../components/navbar/Navbar';
import defaultUserImage from './download.png'; 

const TopUsersPage = () => {
  const [topUsersWeek,setTopUsersWeek]=useState([]);
  const [topUsersToday,setTopUsersToday]=useState([]);
  const [topUsersMonth,setTopUsersMonth]=useState([]);
  const [topUsersAllTime,setTopUsersAllTime]=useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const weekResponse = await fetch('http://localhost:8080/api/v1/mantralekhan/week');
      const allTimeResponse = await fetch('http://localhost:8080/api/v1/mantralekhan/alltime');
      const monthResponse = await fetch('http://localhost:8080/api/v1/mantralekhan/month');
     // const response = await fetch('http://localhost:8080/api/v1/mantralekhan/week');
      if (!weekResponse.ok ||!allTimeResponse.ok ) {
        throw new Error('Failed to fetch data');
      }
      if(!monthResponse.ok)
      {
        throw new Error('Failed to fetch data');
      }
      const weekjsonData = await weekResponse.json();
      const allTimejsonData = await allTimeResponse.json();
      const monthjsonData = await monthResponse.json();
      setTopUsersWeek(weekjsonData.data);
      setTopUsersAllTime(allTimejsonData.data);
      setTopUsersMonth(monthjsonData.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const [activeTab, setActiveTab] = useState('today');

  // Dummy data for demonstration
  const topUsersData = {
    today: [
      { id: 1, name: 'User 1', score: 100, mantraCount: 250 },
      { id: 2, name: 'User 2', score: 90, mantraCount: 200 },
      { id: 3, name: 'User 3', score: 80, mantraCount: 180 }
    ],
    week: topUsersWeek,
    month: topUsersMonth,
    allTime:topUsersAllTime
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
            {topUsersData[activeTab].slice(0,9).map((user, index) => (
              <div key={index} className="user-card">
                <div className="user-info">
                  <div className="serial-number">{index + 1}.</div> {/* Serial number */}
                  <div>
                 
                    <img src={user.avatar} alt="User" className="user-image" />
                  </div>
                  <div>
                    <h3 className='user-name'>{user.fullName}</h3>
                    
                    <p>Total Mantralekhan: {user.totalCount}</p>
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
