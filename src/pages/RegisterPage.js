import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      if (users.find(user => user.email === formData.email)) {
        setErrorMessage('User with this email already exists');
        return;
      }
      users.push(formData);
      localStorage.setItem('users', JSON.stringify(users));
      setSuccessMessage('Registration successful!');
      setErrorMessage('');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <Container className="container">
      <Typography variant="h4" component="h1" gutterBottom>
        Register
      </Typography>
      {successMessage && <Typography variant="body1" style={{ color: 'green' }}>{successMessage}</Typography>}
      {errorMessage && <Typography variant="body1" style={{ color: 'red' }}>{errorMessage}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          className="form-field"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          className="form-field"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          error={!!errors.email}
          helperText={errors.email}
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
          error={!!errors.password}
          helperText={errors.password}
        />
        <TextField
          className="form-field"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          fullWidth
          required
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
        />
        <Button className="submit-button" type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
      <Typography variant="body2" align="center" style={{ marginTop: 16 }}>
        Already have an account? <Link href="#" onClick={() => navigate('/login')}>Login</Link>
      </Typography>
    </Container>
  );
};

export default RegisterPage;
