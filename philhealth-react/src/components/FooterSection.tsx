import { relative } from 'path';
import React, { useState } from 'react';
import { Box, Block, Hero, Footer, Container, Content, Button, Modal, Card } from "react-bulma-components";

function FooterSection() {
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false);

  const toggleDisclaimerModal = () => {
    setShowDisclaimerModal(!showDisclaimerModal);
  };
  return (
    <div>
      <Hero>
        <Hero.Header renderAs="header" />
        <Hero.Body />
        <Hero.Footer>
          <Footer>
            <Container>
              <Content style={{ textAlign: 'center' }}>
                <img
                  style={{ width: '240px', height: 'auto' }}
                  alt="Philhealth logo"
                  src="https://www.philhealth.gov.ph/images/ph_logo0.png"
                />

                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                  <a href="/" style={{ margin: '0 10px' }}>Home</a>
                  <a href="/" style={{ margin: '0 10px' }}>Contact Us</a>
                  <a href="/site-map" style={{ margin: '0 10px' }}>Sitemap</a>
                  <a onClick={toggleDisclaimerModal} style={{ margin: '0 10px' }}>Disclaimer</a>
                  <a href="/" style={{ margin: '0 10px' }}>Privacy Notice</a>
                </div>

                {/* start for the disclaimer modal*/}
                <Modal show={showDisclaimerModal} onClose={toggleDisclaimerModal}>
                  <Modal.Content>
                    <Content>
                      <Card>
                        <Card.Content>
                          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center'}}>Disclaimer</h1>
                          <p style={{ textAlign: 'justify' }}>
                            The PhilHealth Logo, photographs, and information on this website may not be reproduced, copied, or downloaded in any form or by any means, including recording, taping, photocopying, or information storage and retrieval systems, for use in illegal, damaging, or pornographic material.
                          </p>
                          <p style={{ textAlign: 'justify' }}>
                            However, PhilHealth information may be used for educational or informative purposes and may be reproduced, copied, or downloaded without written permission from PhilHealth.
                          </p>
                        </Card.Content>
                        <Card.Footer>
                          <Card.Footer.Item renderAs="div">
                            <Button onClick={toggleDisclaimerModal}>Close</Button>
                          </Card.Footer.Item>
                        </Card.Footer>
                      </Card>
                    </Content>
                  </Modal.Content>
                </Modal>
                {/* end for the disclaimer modal */}

                <div>
                  <img
                    style={{ width: '60px', height: '60px' }}
                    alt=" logo1"
                    src="https://www.philhealth.gov.ph/images/transparency_seal.png"
                  />
                  <img
                    style={{ width: '60px', height: '60px' }}
                    alt="logo2"
                    src="https://www.philhealth.gov.ph/images/corp_gov.png"
                  />
                  <img
                    style={{ width: '60px', height: '60px' }}
                    alt="logo3"
                    src="https://www.philhealth.gov.ph/images/foi_logo.png"
                  />
                </div>

                <div>
                  <img
                    style={{ width: '30px', height: '25px' }}
                    alt="logo1"
                    src="https://www.philhealth.gov.ph/images/fb_btn.png"
                  />
                  <img
                    style={{ width: '35px', height: '25px' }}
                    alt="logo2"
                    src="https://www.philhealth.gov.ph/images/twitter_btn.png"
                  />
                  <img
                    style={{ width: '35px', height: '25px' }}
                    alt="logo3"
                    src="https://www.philhealth.gov.ph/images/youtube_btn.png"
                  />
                </div>

                <p style={{ fontSize: '12px' }}>
                  © 2014 Philippine Health Insurance Corporation | Citystate Centre, 709 Shaw Boulevard 1603 Pasig City | Action Center 8441-7442
                </p>
              </Content>
            </Container>
          </Footer>
        </Hero.Footer>
      </Hero>
    </div>
  );
}

export default FooterSection;