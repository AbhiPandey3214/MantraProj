import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import './MyPerformance.css'; // Import CSS for styling
import defaultImage from './download.png'; // Import default image

const MyPerformance = () => {
  // Dummy user data
  const dummyUserData = {
    firstName: 'John',
    lastName: 'Doe',
    todayMantralekhan: 100,
    weekMantralekhan: 500,
    totalMantralekhan: 1500
  };

  // State variables for user information
  const [userData, setUserData] = useState(dummyUserData);
  const [image, setImage] = useState(null); // For storing the image file
  const [currentDateTime, setCurrentDateTime] = useState(null);

  // Function to handle file upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  // Function to get current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    setCurrentDateTime(now);
  };

  useEffect(() => {
    const intervalId = setInterval(getCurrentDateTime, 1000); // Update every second
    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (
    <div className="my-performance">
      <h2>My Performance</h2>

      <div className="user-info ">
        <div className="user-image">
          <img src={image ? URL.createObjectURL(image) : defaultImage} alt="Profile" />
          <Button variant="outline-dark" size='sm' className='btn'>Upload Image</Button>
        </div>
        <div className="user-details m-30">
          <p><strong>Name:</strong> {userData.firstName} {userData.lastName}</p>
          <p><strong>Today's Mantralekhan:</strong> {userData.todayMantralekhan}</p>
          <p><strong>This Week's Mantralekhan:</strong> {userData.weekMantralekhan}</p>
          <p><strong>Total Mantralekhan:</strong> {userData.totalMantralekhan}</p>
          <p><strong>Current Time:</strong> {currentDateTime && currentDateTime.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default MyPerformance;
