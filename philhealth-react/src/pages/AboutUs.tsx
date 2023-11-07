import React from 'react';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';
import { Box, Card, Columns, Content, Heading, Image } from 'react-bulma-components';
import localImage from '../pictures/contacts.png';
import TableAccordion from '../components/TableAccordion';

const appStyle: React.CSSProperties = {
  backgroundColor: '#FDFD97',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

const cardStyle: React.CSSProperties = {
  width: '80%',
  margin: 'auto',
  height: '120px',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', 
  alignItems: 'center'
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '26px',
  fontWeight: 'bold',
  margin: '20px 0',
  textAlign: 'center',
  color: '#329900',
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
        <p style={{fontSize: '20px'}}>
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
                <Heading size={5}>Agency's Mandate And Functions</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={3}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={5}>Vision, Mission, Core Values</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={3}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={5}>Board Of Directors</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={3}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={5}>Executive Officers</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>
        </Columns>

        <Columns>
          <Columns.Column size={4}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={5}>Organizational Structure</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={4}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={5}>Visual Brand Identity Elements</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={4}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={5}>ISO Certification</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>
        </Columns>
      </div>

      <div>
        <TableAccordion/>
      </div>

      <div style={{ marginTop: '40px', marginBottom: '100px' }}>
        <h3 style={sectionTitleStyle}>Other Documents</h3>

        <Columns>
          <Columns.Column size={4}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={5}>PhilHealth STUDIES</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={4}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={5}>Annual Reports</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={4}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={5}>Stats and Carts</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>
        </Columns>

        <Columns>
          <Columns.Column size={4}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={5}>PhilHealth Strategic Plan for 2021-2023</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={4}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={5}>Forum Materials</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={4}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={5} style={{marginBottom:'10px'}}>PhilHealth Corporate Data Dictionary</Heading>
                <Content>As of October 5, 2022</Content>
              </Card.Content>
            </Card>
          </Columns.Column>
        </Columns>

        <Columns>
          <Columns.Column size={4}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={5} style={{marginBottom:'10px'}}>National Health Data Repository Framework</Heading>
                <Content>As of March 28, 2022</Content>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={4}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={5}>Annual Procurement Plan</Heading>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={4}>
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={5}>Privacy Notices</Heading>
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
