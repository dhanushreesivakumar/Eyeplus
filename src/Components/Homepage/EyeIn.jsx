// src/Components/EyetestAtHome.js

import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';
import './EyetestAtHome.css';

function EyeIn() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

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
          To book an appointment, please fill out the form below:
        </Typography>
        <form className="eyetest-form" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Preferred Date"
            name="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
          <TextField
            label="Preferred Time"
            name="preferredTime"
            type="time"
            value={formData.preferredTime}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Book Appointment
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default EyeIn;
