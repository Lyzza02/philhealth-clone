import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';
import { Box } from 'react-bulma-components';
import localImage  from '../pictures/fast-time.png'; // Import the local image

const appStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh',
  width: '100vw',
};

const headingStyle: React.CSSProperties = {
  fontSize: '36px', // Adjust the font size as needed
};

const textStyle: React.CSSProperties = {
  fontSize: '20px', // Adjust the font size as needed
};

function SiteMap() {
  return (
    <div>
      <div>
        <Header />
      </div>
      
      <div style={appStyle}>
        <img src={localImage} alt="Local Image" />
        <h1 style={headingStyle}>Coming soon!</h1>
        <p style={textStyle}>This site is currently under construction.</p>
      </div>

      <div>
        <FooterSection />
      </div>
    </div>
  );
}

export default SiteMap;
