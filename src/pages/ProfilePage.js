import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUser(currentUser);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(u => (u.email === user.email ? user : u));
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('currentUser', JSON.stringify(user));
    alert('Profile updated successfully');
  };

  return (
    <Container className="container">
      <Typography variant="h4" component="h1" gutterBottom>
        Profile
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          className="form-field"
          label="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          className="form-field"
          label="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
          fullWidth
          required
          disabled
        />
        <TextField
          className="form-field"
          label="Password"
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
          fullWidth
          required
        />
        <Button className="submit-button" type="submit" variant="contained" color="primary">
          Save
        </Button>
      </form>
    </Container>
  );
};

export default ProfilePage;
