import React from 'react';
import { AppBar, Box, Button, CssBaseline, Toolbar, Typography } from '@mui/material';
import Navbar from './navbar';

function Home () {
    <Navbar />
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Ana Sayfa İçeriği */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: '#f4f4f4',
          p: 3,
          height: '50vh',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="body1">
          This is a simple homepage made using MUI. You can showcase your projects, blogs, or any
          other information here.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
