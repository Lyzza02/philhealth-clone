import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';
import { Box } from 'react-bulma-components';

const appStyle = {
  backgroundImage: "url('https://www.philhealth.gov.ph/images/bg_green.jpg')"
}

function Members() {
  const ulStyle = {
    listStyleType: 'disc', // Use 'disc' for bullet points
    paddingLeft: '20px',    // Adjust the padding as needed
  };

  return (
    <div className="App" style={appStyle}>
      <div>
        <Header />
      </div>

      <div>
        <Box>
          <img src="https://www.philhealth.gov.ph/images/thankyou_bnnr01.jpg" alt="" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </div>

      <div style={{marginTop: '20px', background: 'white'}}>
        <div>
          <table style={{width: '100%'}}>
            <thead>
              <tr>
                <th style={{border: '3px solid'}}>Direct Contributors</th>
                <th style={{border: '3px solid'}}>Indirect Contributors</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: 'left', border: '3px solid' }}>
                  <ul style={ulStyle}>
                    <li>Employees with formal employment</li>
                    <li>Kasambahays</li>
                    <li>Self-earning individuals; Professional practitioners</li>
                    <li>Overseas Filipino Workers</li>
                    <li>Filipinos living abroad and those with dual citizenship</li>
                    <li>Lifetime members</li>
                    <li>All Filipinos aged 21 years and above with capacity to pay</li>
                  </ul>
                </td>
                <td style={{ textAlign: 'left', border: '3px solid' }}>
                  <ul style={ulStyle}>
                    <li>Indigents identified by the DSWD</li>
                    <li>Beneficiaries of Pantawid Pamilyang Pilipino Program</li>
                    <li>Senior citizens</li>
                    <li>Persons with disability</li>
                    <li>Sangguniang Kabataan officials</li>
                    <li>Previously identified at point-of-service / sponsored by LGUs</li>
                    <li>Filipinos aged 21 years old and above without capacity to pay premiums</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <FooterSection />
      </div>
    </div>
  );
}

export default Members;
