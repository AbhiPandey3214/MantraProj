import React from 'react'
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Bottom from '../../components/bottom/Bottom';
const EditProfile = () => {
    const [profilePicture, setProfilePicture] = useState(null);

  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
    
      setProfilePicture(URL.createObjectURL(file));
    }
  };
  return (
    <div>
    <div>
      <Navbar></Navbar>
    </div>
  <div className='middle'>
    <h1 >Edit Profile</h1>
    </div>
  <div className="top-users-page">
    
    <div className="top-users-container">
    <input type="file" accept="image/*" onChange={handleFileChange} />

{/* Display uploaded image */}
{profilePicture && (
  <div>
    <p>Preview:</p>
    <img src={profilePicture} alt="Profile" style={{ maxWidth: '200px' }} />
  </div>
)}
      <div className="top-users-content">
       
       
        <div className="top-users-list">
       
          
        </div>
        
      </div>
    </div>
    
    <div className='middle'>
      <button className='button'>Start Mantralekhan</button>
    </div>
  </div>
  
   <div className='topusers-bottom'>
    <Bottom/>
   </div>
 </div>
);
};

export default EditProfile