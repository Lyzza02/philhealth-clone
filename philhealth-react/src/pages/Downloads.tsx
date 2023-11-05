import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';
import { Box, Columns } from 'react-bulma-components';
import localImage from '../pictures/downloads.png';
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
    <div className="App" style={appStyle}>
      <div>
        <Header />
      </div>

      <div>
        <Box>
          <img src={localImage} alt="" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </div>

      <div className="downloads-container" style={{ marginTop: '60px' }}>
        <Columns className="is-desktop">
          {downloads.slice(0, 3).map((download, index) => (
            <Columns.Column key={index} className="has-text-centered">
              <InfoContent title={download.title} body={download.body} />
            </Columns.Column>
          ))}
        </Columns>
      </div>

      <div className="downloads-container" style={{ marginTop: '15px', marginBottom: '60px' }}>
        <Columns className="is-desktop">
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
