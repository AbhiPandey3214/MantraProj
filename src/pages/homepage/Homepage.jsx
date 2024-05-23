import React from 'react';
import './Homepage.css'; 
import Bottom from '../../components/Bottom/Bottom';
import Bhagwanji from '../../assets/Bhagwanji.png';
import Navbar from '../../components/Navbar/Navbar';
import FooterWithLinks from '../../components/FooterWithLinks/FooterWithLinks';
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
   <div>
    <FooterWithLinks/>
   </div>
   <div>
    <Bottom/>
   </div>
    </div>
  );
};

export default Homepage;
