
import React, { useState } from 'react';
import './Bottom.css';
import FeedbackModal from './FeedbackModal';
import InviteAFriend from './InviteAFriend';

const Bottom = () => {
  const topUsersData = {count:316314331,users:14983}
  const [isModalOpenFeedback, setIsModalOpenFeedback] = useState(false);
  
  const openModalFeedback = () => {
    setIsModalOpenFeedback(true);
  };

  const closeModalFeedback = () => {
    setIsModalOpenFeedback(false);
  };
  const [isModalOpenInvite, setIsModalOpenInvite] = useState(false);
  
  const openModalInvite = () => {
    setIsModalOpenInvite(true);
  };

  const closeModalInvite = () => {
    setIsModalOpenInvite(false);
  };
  return (
    
      <div className="bottom-parent">
       <div className='bottom-child1'>
         
       <p className='bottom-text'>Total <span>{topUsersData.count.toLocaleString()}</span> mantralekhan
by <span>{topUsersData.users.toLocaleString()}</span> registered users on this site
and counting...</p>
</div>
       <div className='bottom-child2'>
        
      <button onClick={openModalFeedback}>Give Feedback</button>
      {isModalOpenFeedback && <FeedbackModal isModalOpenFeedback={isModalOpenFeedback} closeModalFeedback={closeModalFeedback}/>}+
      <button onClick={openModalInvite}>Invite A Friend</button>{isModalOpenInvite && <InviteAFriend isModalOpenInvite={isModalOpenInvite} closeModalInvite={closeModalInvite}/>}
      
    </div>
    
    </div>
    
  );
};

export default Bottom;
