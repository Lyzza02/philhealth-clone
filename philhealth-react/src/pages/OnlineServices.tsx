import React from 'react';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';
import { Box, Card, Columns, Content, Heading, Image } from 'react-bulma-components';
import localImage from '../pictures/our_service.png'

const appStyle: React.CSSProperties = {
  backgroundColor: '#FDFD97'
}

const cardStyle = {
  width: '80%',
  margin: 'auto',
  height: '100%', // Adjust the height as needed
  backgroundColor: "#fff"
};

const centeredImageStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '10px'
};

function OnlineServices() {
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

      <div style={{ marginTop: '50px', marginBottom: '80px' }}>
        <h4 style={{ fontSize: '36px', marginBottom:'20px', color:'#329900', fontWeight:'bold' }}>Membership</h4>
        <Columns>
          <Columns.Column size={"half"} className="has-text-centered" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Card style={cardStyle}>
              <Card.Content>
                <div style={centeredImageStyle}>
                  <Image src="https://www.philhealth.gov.ph/services/images/mi.png" size={64} />
                </div>
                <Heading size={4} style={{ marginBottom: '5px' }}>Member Portal</Heading>
                <Content><a href="https://memberinquiry.philhealth.gov.ph/member/">Register/Login</a></Content>
                <Content>Enables members to check on the accuracy of their membership details</Content>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={"half"} className="has-text-centered" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Card style={cardStyle}>
              <Card.Content>
                <div style={centeredImageStyle}>
                  <Image src="https://www.philhealth.gov.ph/services/images/egroup.png" size={64} />
                </div>
                <Heading size={4} style={{ marginBottom: '5px' }}>Electronic Group Enrollment System</Heading>
                <Content><a href="https://egroup03.philhealth.gov.ph/">Login</a></Content>
                <Content>Facilitates registration and billing of Organized Groups.</Content>
              </Card.Content>
            </Card>
          </Columns.Column>
        </Columns>

        <h4 style={{ fontSize: '36px', marginBottom:'20px', color:'#329900', fontWeight:'bold' }}>Benefits</h4>
        <Columns>
          <Columns.Column size={"half"} className="has-text-centered" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Card style={cardStyle}>
              <Card.Content>
                <div style={centeredImageStyle}>
                  <Image src="https://www.philhealth.gov.ph/services/images/acr.png" size={64} />
                </div>
                <Heading size={4} style={{ marginBottom: '5px' }}>Case Rates Search</Heading>
                <Content><a href="https://www.philhealth.gov.ph/services/acr/"> Begin Search </a></Content>
                <Content>Provides members with information on PhilHealth's benefit packages</Content>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={"half"} className="has-text-centered" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Card style={cardStyle}>
              <Card.Content>
                <div style={centeredImageStyle}>
                  <Image src="https://www.philhealth.gov.ph/services/images/cec.png" size={64} />
                </div>
                <Heading size={4} style={{ marginBottom: '5px' }}>Claims Eligibility Checking</Heading>
                <Content> <a href="https://cec.philhealth.gov.ph/"> Login </a></Content>
                <Content>Enables providers to ascertain the benefit availment eligibility of members</Content>
              </Card.Content>
            </Card>
          </Columns.Column>
        </Columns>

        <Columns>
          <Columns.Column size={"one-third"} className="has-text-centered" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4 style={{ fontSize: '36px', marginBottom:'20px', color:'#329900', fontWeight:'bold' }}>Contribution</h4>
            <Card style={cardStyle}>
              <Card.Content>
                <div style={centeredImageStyle}>
                  <Image src="https://www.philhealth.gov.ph/services/images/eprs.png" size={64} />
                </div>
                <Heading size={4} style={{ marginBottom: '5px' }}>Electronic Premium Remittance System</Heading>
                <Content> <a href="https://eprs01.philhealth.gov.ph/"> Login </a>| <a href="https://epoaf.philhealth.gov.ph/employer/"> ePOAF </a></Content>
                <Content>Enables employers to remit their premium contributions online</Content>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={"one-third"} className="has-text-centered" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4 style={{ fontSize: '36px', marginBottom:'20px', color:'#329900', fontWeight:'bold' }}>Collection</h4>
            <Card style={cardStyle}>
              <Card.Content>
                <div style={centeredImageStyle}>
                  <Image src="https://www.philhealth.gov.ph/services/images/ecrs.png" size={64} />
                </div>
                <Heading size={4} style={{ marginBottom: '5px' }}>Electronic Collection Reporting System</Heading>
                <Content> <a href="https://ecrs.philhealth.gov.ph/">Login</a> </Content>
                <Content>Enables PhilHealth Accredited Collecting Agents to submit daily RF2 reports online</Content>
              </Card.Content>
            </Card>
          </Columns.Column>

          <Columns.Column size={"one-third"} className="has-text-centered" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4 style={{ fontSize: '36px', marginBottom:'20px', color:'#329900', fontWeight:'bold' }}>Accreditation</h4>
            <Card style={cardStyle}>
              <Card.Content>
                <div style={centeredImageStyle}>
                  <Image src="	https://www.philhealth.gov.ph/services/images/hci.png" size={64} />
                </div>
                <Heading size={4} style={{ marginBottom: '5px' }}>Health Care Institutions</Heading>
                <Content><a href="https://ihcp.philhealth.gov.ph/">Login</a> | <a href="https://www.philhealth.gov.ph/services/hci/">How to Register</a></Content>
                <Content>Shows the complete list of HCIs including accreditation status</Content>
              </Card.Content>
            </Card>
          </Columns.Column>
        </Columns>
      </div>

      <div>
        <FooterSection />
      </div>

    </div>
  );
}

export default OnlineServices;
