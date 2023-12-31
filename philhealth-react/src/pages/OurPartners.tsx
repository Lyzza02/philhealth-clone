import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import '../App.css';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';
import { Partner, getPartners } from '../services/partners';
import { Box, Columns } from 'react-bulma-components';
import InfoContent from '../components/InfoContent';
import localImage from '../pictures/partners_header.png'

const appStyle = {
  backgroundColor: '#FDFD97'
}

function OurPartners() {
  const [partners, setPartners] = useState<Array<Partner>>([]);

  useEffect(() => {
    getPartners().then((partners) => {
      setPartners(partners);
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
          <img src={localImage} alt="" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </div>

      <div style={{ marginTop: '60px', marginBottom: '60px' }}>
        <Columns>
          {partners.map((partners, index) => (
            <Columns.Column key={index} size={"one-quarter"} className="has-text-centered">
              <InfoContent title={partners.title} body={partners.body} />
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

export default OurPartners;