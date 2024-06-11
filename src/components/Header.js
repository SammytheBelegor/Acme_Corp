import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import logo from '../img/logo.jpg';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <img 
          src={logo} 
          alt="Acme Corp Logo" 
          style={{ 
            marginRight: 16, 
            height: 50, 
            width: 50, 
            borderRadius: '50%', 
            objectFit: 'cover' 
          }} 
        />
        <Typography variant="h6">
          Acme Corp
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
