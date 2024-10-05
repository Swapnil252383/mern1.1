import React, { useState } from 'react';
import axios from 'axios';
import './Feedback.css';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/feedback', {
        name,
        email,
        rating,
        message,
      });
      alert(response.data);
      setName('');
      setEmail('');
      setMessage('');
      setRating(0);
    } catch (error) {
      alert('Error submitting feedback: ' + error.message);
    }
  };

  return (
    <div className="feedback-container">
      <h1>We Value Your Feedback</h1>
      <p>Let us know how we can improve our services!</p>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="rating-container">
          <label>Rate Us:</label>
          <select value={rating} onChange={(e) => setRating(e.target.value)} required>
            <option value="" disabled>Select Rating</option>
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
        <textarea
          placeholder="Your Feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
