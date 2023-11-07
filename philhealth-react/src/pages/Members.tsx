import React from 'react';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';
import { Box } from 'react-bulma-components';
import localImage from '../pictures/members.png';

const appStyle = {
  backgroundColor: '#FDFD97'
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column' as 'column', // Specify the type explicitly
  alignItems: 'center',
  padding: '20px',
};

const boxContainerStyle = {
  display: 'flex', // Set display to flex to make boxes appear side by side
  justifyContent: 'space-between', // Distribute space between boxes
};

const boxStyle = {
  flex: 1, // Each box takes up an equal portion of available space
  maxWidth: '700px',
  margin: '10px',
  background: 'white',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  borderRadius: '8px',
};

const h3Style = {
  fontWeight: 'bold',
  fontSize: '1.5rem', // Adjust the font size as needed
  borderBottom: '1.5px solid #000'
};

const mobileBoxStyle = {
  width: '95%', // Adjust this value as needed
};

function Members() {
  return (
    <div className="App" style={appStyle}>
      <div>
        <Header />
      </div>

      <div>
        <Box>
          <img
            src={localImage}
            alt=""
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </div>

      <div style={containerStyle}>
        <Box style={{ ...boxStyle, ...mobileBoxStyle }}>
          <h3 style={h3Style}>Direct Contributors</h3>
          <ul style={{ marginTop: '15px' }}>
            <li style={{ marginLeft: '20px', textAlign: 'left' }}>Employees with formal employment</li>
            <li style={{ marginLeft: '20px', textAlign: 'left' }}>Kasambahays</li>
            <li style={{ marginLeft: '20px', textAlign: 'left' }}>Self-earning individuals; Professional practitioners</li>
            <li style={{ marginLeft: '20px', textAlign: 'left' }}>Overseas Filipino Workers</li>
            <li style={{ marginLeft: '20px', textAlign: 'left' }}>Filipinos living abroad and those with dual citizenship</li>
            <li style={{ marginLeft: '20px', textAlign: 'left' }}>Lifetime members</li>
            <li style={{ marginLeft: '20px', textAlign: 'left' }}>All Filipinos aged 21 years and above with the capacity to pay</li>
          </ul>
        </Box>

        <Box style={{ ...boxStyle, ...mobileBoxStyle }}>
          <h3 style={h3Style}>Indirect Contributors</h3>
          <ul style={{ marginTop: '15px' }}>
            <li style={{ marginLeft: '20px', textAlign: 'left' }}>Indigents identified by the DSWD</li>
            <li style={{ marginLeft: '20px', textAlign: 'left' }}>Beneficiaries of Pantawid Pamilyang Pilipino Program</li>
            <li style={{ marginLeft: '20px', textAlign: 'left' }}>Senior citizens</li>
            <li style={{ marginLeft: '20px', textAlign: 'left' }}>Persons with a disability</li>
            <li style={{ marginLeft: '20px', textAlign: 'left' }}>Sangguniang Kabataan officials</li>
            <li style={{ marginLeft: '20px', textAlign: 'left' }}>Previously identified at the point-of-service / sponsored by LGUs</li>
            <li style={{ marginLeft: '20px', textAlign: 'left' }}>Filipinos aged 21 years old and above without the capacity to pay premiums</li>
          </ul>
        </Box>
      </div>

      <div>
        <FooterSection />
      </div>
    </div>
  );
}

export default Members;
