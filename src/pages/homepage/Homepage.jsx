import React from 'react';
import './Homepage.css'; // Don't forget to create this CSS file for styling
import Bhagwanji from './Bhagwanji.png';
import Navbar from '../../components/Navbar';
const Homepage = () => {
    const topUsersData = {count:316314331,users:14983}
  return (
    <div>
        <Navbar></Navbar>
    <div className="homepage-container">
       
      <div className="image-container">
        <img src={Bhagwanji} alt="Your Image" className="homepage-image" />
      </div>
      <div className="text-container">
        
        <p>This is an endeavour to please Bhagwan Swaminarayan by typing “Swaminarayan” mahamantra online.</p><br/>
        <p className='ltext'>Total <span>{topUsersData.count.toLocaleString()}</span> mantralekhan
by <span>{topUsersData.users.toLocaleString()}</span> registered users on this site
and counting...</p>
        <button className="homepage-button">Learn More</button>
      </div>
    </div>
    </div>
  );
};

export default Homepage;