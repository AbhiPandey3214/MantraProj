import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './MyPerformance.css'; // Import CSS for styling
import defaultImage from './download.png'; // Import default image
import BarChart from './BarChart';
import Bottom from '../../components/bottom/Bottom';
import { UserMantraData } from './Data';

const MyPerformance = () => {
 
  const [graphData,setGraphData]=useState(
    {
      labels:UserMantraData.map((data)=>data.Date),
      datasets:[{
        label:"Mantralekhan",
        data:UserMantraData.map((data)=>data.mantra_chanted),
        backgroundColor:["rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
        borderWidth: 2,
      }]
    }
  )
  const dummyUserData = {
    firstName: 'Abhi',
    lastName: 'Pandey',
    todayMantralekhan: 100,
    weekMantralekhan: 500,
    totalMantralekhan: 1500
  };

 
  const [userData, setUserData] = useState(dummyUserData);
  const [image, setImage] = useState(null); // For storing the image file
  const [currentDateTime, setCurrentDateTime] = useState(null);

  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  
  const getCurrentDateTime = () => {
    const now = new Date();
    setCurrentDateTime(now);
  };

  useEffect(() => {
    const intervalId = setInterval(getCurrentDateTime, 1000); 
    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div >
      <Navbar></Navbar>
      <div className='middle'>
      <h2>My Performance</h2>
      </div>
      

      <div className="parent">
       <div className='child1'>
          <img src={image ? URL.createObjectURL(image) : defaultImage} alt="Profile" />
          </div>
       
       <div className='child2'>
          <p><strong>Name:</strong> {userData.firstName} {userData.lastName}</p>
          <p><strong>Today's Mantralekhan:</strong> {userData.todayMantralekhan}</p>
          <p><strong>This Week's Mantralekhan:</strong> {userData.weekMantralekhan}</p>
          <p><strong>Total Mantralekhan:</strong> {userData.totalMantralekhan}</p>
          <p><strong>Current Time:</strong> {currentDateTime && currentDateTime.toLocaleString()}</p>
          </div>
         
        
      
    </div>
   <div className='vw-80 chartclass'>
    <BarChart chartData={graphData}></BarChart>
    </div>
    <div>
     <Bottom></Bottom>
    </div>
    </div>
  );
};

export default MyPerformance;
