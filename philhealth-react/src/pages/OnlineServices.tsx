import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';
import { Box } from 'react-bulma-components';

const appStyle = {
  backgroundImage: "url('https://www.philhealth.gov.ph/images/bg_green.jpg')"
}

function OnlineServices() {
  return (
    <div className="App"
      style={appStyle}>
      <div>
        <Header />
      </div>

      <div>
        <Box>
          <img src="https://www.philhealth.gov.ph/images/thankyou_bnnr01.jpg" alt="" style={{ width: '100%', height: 'auto' }}/>
        </Box>
      </div>
      
      <div>
        {/* Insert Contents here */}
      </div>

      <div>
        <FooterSection />
      </div>

    </div>
  );
}

export default OnlineServices;
