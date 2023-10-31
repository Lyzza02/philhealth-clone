import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Header from '../components/Header';

const appStyle = {
  backgroundImage:"url('https://www.philhealth.gov.ph/images/bg_green.jpg')"
}

function App() {
  return (
    <div className="App"
    style={appStyle}>
      <div>
        <Header/>
      </div>
      <div>
        Navigation bar
      </div>
      <div>
        Image Carousel
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
        Footer
      </div>

    </div>
  );
}

export default App;
