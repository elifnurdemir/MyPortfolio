import React from 'react';
import { Typography, Button } from '@mui/material';
import Navbar from './navbar';
import Home from './home' // Navbar bileşenini içe aktar

function App() {
  return (
    <>
      <Navbar /> {/* Navbar'ı burada çağırıyoruz */}
      <Home />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        
      </div>
    </>
  );
}

export default App;
