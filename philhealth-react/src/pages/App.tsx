import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';
import ImageCarousel from '../components/ImageCarousel';

const appStyle = {
  backgroundImage: "url('https://www.philhealth.gov.ph/images/bg_green.jpg')"
}

function App() {
  return (
    <div className="App"
      style={appStyle}>
      <div>
        <Header />
      </div>

      <div>
        <ImageCarousel/>
      </div>

      <div>
        <div>
          Article Section
        </div>

        <div>
          Links
        </div>
      </div>

      <div>
        <FooterSection />
      </div>

    </div>
  );
}

export default App;
