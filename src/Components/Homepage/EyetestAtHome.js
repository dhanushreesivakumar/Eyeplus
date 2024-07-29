import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import './EyetestAtHome.css';

function EyetestAtHome() {
  return (
    <Container className="eyetest-container">
      <Box className="eyetest-content">
        <Typography variant="h2" gutterBottom>
          Eyetest at Home
        </Typography>
        <Typography variant="body1" gutterBottom>
          Experience the convenience of an eyetest at the comfort of your home. Our professional optometrists will visit you and provide a comprehensive eye examination using the latest technology.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Why choose our home eyetest service:
        </Typography>
        <ul>
          <li>Comprehensive eye exams by certified optometrists.</li>
          <li>State-of-the-art equipment.</li>
          <li>Convenience of testing at your preferred location.</li>
          <li>Personalized service and consultation.</li>
        </ul>
        <Typography variant="body1" gutterBottom>
          To book an appointment, please contact us at [contact information].
        </Typography>
      </Box>
    </Container>
  );
}

export default EyetestAtHome;
