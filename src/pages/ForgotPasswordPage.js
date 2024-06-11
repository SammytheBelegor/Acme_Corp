import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email);
    if (user) {
      setMessage('A password recovery email has been sent to your email address.');
    } else {
      setMessage('Email not found.');
    }
  };

  return (
    <Container className="container">
      <Typography variant="h4" component="h1" gutterBottom>
        Forgot Password
      </Typography>
      {message && <Typography variant="body1" style={{ color: message.includes('not found') ? 'red' : 'green' }}>{message}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          className="form-field"
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          fullWidth
          required
        />
        <Button className="submit-button" type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Button
          className="submit-button"
          variant="contained"
          color="secondary"
          onClick={() => navigate('/login')}
          style={{ marginTop: '10px' }}
        >
          Back to Login
        </Button>
      </form>
    </Container>
  );
};

export default ForgotPasswordPage;
