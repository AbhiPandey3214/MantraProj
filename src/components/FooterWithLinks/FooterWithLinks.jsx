import React from 'react'
import './FooterWithLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../../components/navbar/Navbar';
const FooterWithLinks = () => {
  return (
    <div>
    
    <div className="footer-main-div">

        <div className= "footer-left-div ">
        <p>This is an endeavour to please Bhagwan Swaminarayan by typing “Swaminarayan” mahamantra online.narayan by typing “Swaminarayan” mahamantra online.</p>
        <a className='linktag' href="">Top Users</a>
        <a className='linktag' href="">Bhagwan Swaminarayan</a>
        <a className='linktag' href="">Frequently Asked Questions</a>
        <a className='linktag' href="">Testimonials</a>
        </div>
       
      
        <div className= "footer-right-div ">
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        <p>Stay In Touch</p>
        </div>
        
    
    </div>
    </div>
  );
}

export default FooterWithLinks