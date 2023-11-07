import React from 'react';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';
import { Box, Card, Columns, Content, Heading, Image } from 'react-bulma-components';
import localImage from '../pictures/contacts.png';

const appStyle: React.CSSProperties = {
  backgroundColor: '#FDFD97',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

const cardStyle: React.CSSProperties = {
  width: '80%',
  margin: 'auto',
  height: '150px',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '20px 0',
  textAlign: 'center',
  color: '#329900',
};

const tableContainerStyle: React.CSSProperties = {
  width: '100%',
  margin: '0 auto', // Center the container horizontally
  backgroundColor: '#F5F5F5',
  border: '1px solid #CCCCCC',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center', // Center the content horizontally
};


const tableStyle: React.CSSProperties = {
  width: '95%',
  borderCollapse: 'collapse',

};

const cellStyle: React.CSSProperties = {
  verticalAlign: 'middle',
  textAlign: 'center',
  padding: '16px', // Increase the padding
  borderBottom: '1px solid #CCCCCC', // Light border at the bottom of each cell
  fontSize: '20px', // Increase the font size
};

const headerCellStyle: React.CSSProperties = {
  ...cellStyle,
  backgroundColor: '#329900', // Green background color for the header cell
  color: 'white', // White text color for the header cell
  fontSize: '28px',
};


function AboutUs() {
  return (
    <div className="App" style={appStyle}>
      <Header />

      <Box>
        <img src={localImage} alt="Contact Us" style={{ width: '100%', height: 'auto' }} />
      </Box>

      <div style={{ padding: '20px' }}>
        <h3 style={sectionTitleStyle}>Our History</h3>
        <p>
          The call to serve the rural indigents echoed since the early '60s when the Philippine Medical Association
          introduced the MARIA Project which prioritized aid to communities in need of medical assistance.
        </p>
      </div>

      <div style={{ marginTop: '40px', marginBottom: '80px' }}>
        <h3 style={sectionTitleStyle}>Comprehensive Organizational Overview</h3>

        <Columns>
          <Columns.Column size={3}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>Agency's Mandate And Functions</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={3}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>Vision, Mission, Core Values</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={3}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>Board Of Directors</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={3}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>Executive Officers</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>
        </Columns>

        <Columns>
          <Columns.Column size={4}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>Organizational Structure</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={4}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>Visual Brand Identity Elements</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={4}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>ISO Certification</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>
        </Columns>
      </div>

      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <colgroup>
            <col style={{ width: '50%' }} />
            <col style={{ width: '50%' }} />
          </colgroup>
          <thead>
            <tr>
              <th colSpan={4} style={headerCellStyle}>Enabling Laws</th>
            </tr>
          </thead>
          <tbody>
            <td>
              <tr style={cellStyle}>R.A. 7875 And IRR</tr>
              <tr style={cellStyle}>R.A. 9241 And IRR</tr>
              <tr style={cellStyle}>R.A. 10606</tr>
              <tr style={cellStyle}>Revised IRR Of The National Health Insurance Act Of 2013 (R.A. 7875 As Amended By R.A. 9241 And 10606)</tr>
            </td>
            <td>
              <tr style={cellStyle}>R.A. 11223 (Universal Health Care Act)</tr>
              <tr style={cellStyle}>UHC-IRR</tr>
              <tr style={cellStyle}>IRR Of R.A. 11228</tr>
              <tr style={cellStyle}>PhilHealth Rules On Administrative Cases (PROAC) Involving Health Care Providers, Members And PhilHealth Employees</tr>
            </td>
          </tbody>
        </table>
      </div>

      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <colgroup>
            <col style={{ width: '50%' }} />
            <col style={{ width: '50%' }} />
          </colgroup>
          <thead>
            <tr>
              <th colSpan={4} style={headerCellStyle}>Medical Literature</th>
            </tr>
          </thead>
          <tbody>
            <td>
              <tr style={cellStyle}>Philippine National Formulary (PNF) Essential Medicines List (EML) (As Of November 2, 2022)</tr>
              <tr style={cellStyle}>HTA Forum (2006)</tr>
              <tr style={cellStyle}>National TB Control Program Manual</tr>
            </td>
            <td>
              <tr style={cellStyle}>Comprehensive And Unified Policy For TB Control</tr>
              <tr style={cellStyle}>Policy Recommendations On Leptospirosis</tr>
            </td>
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '40px', marginBottom: '100px' }}>
        <h3 style={sectionTitleStyle}>Other Documents</h3>

        <Columns>
          <Columns.Column size={3}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>Agency's Mandate And Functions</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={3}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>Vision, Mission, Core Values</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={3}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>Board Of Directors</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={3}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>Executive Officers</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>
        </Columns>

        <Columns>
          <Columns.Column size={4}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>Organizational Structure</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={4}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>Visual Brand Identity Elements</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={4}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>ISO Certification</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>
        </Columns>
      </div>

      <FooterSection />
    </div>
  );
}

export default AboutUs;
