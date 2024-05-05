// FeedbackModal.js
import React, { useState } from 'react';
import './FeedbackModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const InviteAFriend = ({ isModalOpenInvite,closeModalInvite }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Feedback submitted:', { name, email, comments });
    setName('');
    setEmail('');
    setComments('');
    closeModalInvite();
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 '>
      <div className="modal-background" onClick={closeModalInvite}></div>
      <div className="modal-content">
        <div className="box">
        <button className="modal-close" aria-label="close" onClick={closeModalInvite}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h2 className="title">Invite A Friend</h2>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Comments</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Your feedback/comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={closeModalInvite}
      ></button>
    </div>
  );
};

export default InviteAFriend;
