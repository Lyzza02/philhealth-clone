import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';

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
        {/* Insert Contents here */}
      </div>

      <div>
        <FooterSection />
      </div>

    </div>
  );
}

export default OnlineServices;
