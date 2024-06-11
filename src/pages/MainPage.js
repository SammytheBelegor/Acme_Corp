import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Box, Avatar } from '@mui/material';
import './MainPage.css';
import teamImage from '../img/team.jpg'; // Add a team image if available

const teamMembers = [
  { name: 'John Doe', role: 'CEO', description: 'Leading the company with vision and passion.', avatar: '/img/john.jpg' },
  { name: 'Jane Smith', role: 'CTO', description: 'Innovating and driving technology forward.', avatar: '/img/jane.jpg' },
  { name: 'Alice Johnson', role: 'COO', description: 'Ensuring operational excellence and efficiency.', avatar: '/img/alice.jpg' },
];

const MainPage = () => {
  return (
    <Container className="main-page-container">
      <Box className="intro-section">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Acme Corp
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          A fast-growing startup developing innovative supply chain management software.
        </Typography>
        <img src={teamImage} alt="Acme Corp Team" className="team-image" />
      </Box>

      <Box className="team-section">
        <Typography variant="h4" component="h2" gutterBottom>
          Meet Our Team
        </Typography>
        <Grid container spacing={3}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="team-card">
                <CardContent>
                  <Avatar src={member.avatar} alt={member.name} className="team-avatar" />
                  <Typography variant="h6" component="h3">
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {member.role}
                  </Typography>
                  <Typography variant="body2">
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className="task-section">
        <Typography variant="h4" component="h2" gutterBottom>
          Internship Test Assignment
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Task:</strong> The Senior Front-End Developer at Acme Corp is looking for an intern to help with the development of new features for the web application. As part of your test assignment, you will need to complete the following tasks:
        </Typography>
        <Typography variant="body1" paragraph>
          1. Develop a user registration page:<br />
          - Create a user registration page layout using modern UI/UX libraries (React, Vue.js, Angular, etc.).<br />
          - Implement a registration form with fields for entering name, email, password, and password confirmation.<br />
          - Add form validation to check the correctness of the entered data.<br />
          - Implement sending form data to the server for user registration.<br />
          - Display a message about successful registration or error.
        </Typography>
        <Typography variant="body1" paragraph>
          2. Develop a user login page:<br />
          - Create a user login page layout using modern UI/UX libraries.<br />
          - Implement a login form with fields for entering email and password.<br />
          - Add a password recovery feature.<br />
          - Implement user authentication on the server.<br />
          - Redirect the user to the main page after successful authorization.
        </Typography>
        <Typography variant="body1" paragraph>
          3. Develop a user profile page:<br />
          - Create a user profile page layout using modern UI/UX libraries.<br />
          - Display user information (name, email, registration date).<br />
          - Add the ability to edit user information.<br />
          - Implement saving changes on the server.
        </Typography>
      </Box>
    </Container>
  );
};

export default MainPage;
