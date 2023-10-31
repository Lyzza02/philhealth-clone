import React from 'react';
import logo from './logo.svg';
import '../App.css';

const appStyle = {
  backgroundImage:"url('https://www.philhealth.gov.ph/images/bg_green.jpg')"
}

function AboutUs() {
  return (
    <div className="App"
    style={appStyle}>
      <div>
        Header
      </div>
      <div>
        Navigation bar
      </div>

      <div>
        Footer
      </div>

    </div>
  );
}

export default AboutUs;
