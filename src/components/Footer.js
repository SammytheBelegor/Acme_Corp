import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import './Footer.css';

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Container>
        <Typography variant="body1">Contact Us</Typography>
        <Typography variant="body2">Email: contact@acmecorp.com</Typography>
        <Typography variant="body2">Phone: +1 (555) 123-4567</Typography>
        <Typography variant="body2">Address: 123 Acme Street, Innovation City, CA 90210</Typography>
        <Typography variant="body2">LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/company/acmecorp</a></Typography>
        <Typography variant="body2">Twitter: <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">@AcmeCorp</a></Typography>
      </Container>
    </Box>
  );
};

export default Footer;
