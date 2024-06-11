import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.jpg';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" className="app-bar">
      <Toolbar className="toolbar">
        <Box display="flex" alignItems="center" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Acme Corp Logo" className="logo" />
          <Typography variant="h6" className="company-name">
            Acme Corp
          </Typography>
        </Box>
        <Box ml="auto">
          <Button color="inherit" className="header-button" onClick={() => navigate('/')}>Home</Button>
          <Button color="inherit" className="header-button" onClick={() => navigate('/register')}>Register</Button>
          <Button color="inherit" className="header-button" onClick={() => navigate('/login')}>Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
