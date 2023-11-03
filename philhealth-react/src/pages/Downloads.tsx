import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import '../App.css';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';
import { Box, Columns } from 'react-bulma-components';
import localImage  from '../pictures/downloads.png'; // Import the local image
import InfoContent from '../components/InfoContent';
import { Download, getDownloads } from '../services/downloads';

const appStyle = {
  backgroundImage: "url('https://www.philhealth.gov.ph/images/bg_green.jpg')"
}

function Downloads() {

  const [downloads, setDownloads] = useState<Array<Download>>([]);

  useEffect(() => {
    getDownloads().then((downloads) => {
      setDownloads(downloads);
    });
  }, []);

  
  return (
    <div className="App"
      style={appStyle}>
      <div>
        <Header />
      </div>

      <div>
        <Box>
          <img src={localImage} alt="" style={{ width: '100%', height: 'auto' }}/>
        </Box>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Columns>
          {downloads.slice(0, 3).map((download, index) => (
            <Columns.Column key={index} className="has-text-centered">
                <InfoContent title={download.title} body={download.body} />
            </Columns.Column>
          ))}
        </Columns>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Columns>
          {downloads.slice(3).map((download, index) => (
            <Columns.Column key={index} className="has-text-centered">
                <InfoContent title={download.title} body={download.body} />
            </Columns.Column>
          ))}
        </Columns>
      </div>


      <div>
        <FooterSection />
      </div>

    </div>
  );
}

export default Downloads;