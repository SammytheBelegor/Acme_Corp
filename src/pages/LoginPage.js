import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === formData.email && u.password === formData.password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      onLogin();
      navigate('/profile');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <Container className="container">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      {errorMessage && <Typography variant="body1" style={{ color: 'red' }}>{errorMessage}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          className="form-field"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          className="form-field"
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          required
        />
        <Button className="submit-button" type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
