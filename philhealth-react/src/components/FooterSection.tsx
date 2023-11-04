import { relative } from 'path';
import React, { useState } from 'react';
import { Box, Block, Hero, Footer, Container, Content, Button, Modal, Card } from "react-bulma-components";
import DisclaimerModal from '../modal/DisclaimerModal';
import PrivacyModal from '../modal/PrivacyModal';

function FooterSection() {
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const toggleDisclaimerModal = () => {
    setShowDisclaimerModal(!showDisclaimerModal);

  };

  const togglePrivacyModal = () => {
    setShowPrivacyModal(!showPrivacyModal);
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
                  <DisclaimerModal showDisclaimerModal={showDisclaimerModal} toggleDisclaimerModal={toggleDisclaimerModal} />

                  <a onClick={togglePrivacyModal} style={{ margin: '0 10px' }}>Privacy Notice</a>
                  <PrivacyModal showPrivacyModal={showPrivacyModal} togglePrivacyModal={togglePrivacyModal} />
                </div>

                {/* government logos */}
                <div>
                  <a href="URL_for_logo1">
                    <img
                      style={{ width: '60px', height: '60px' }}
                      alt="Transparency Seal"
                      src="https://www.philhealth.gov.ph/images/transparency_seal.png"
                    />
                  </a>
                  <a href="URL_for_logo2">
                    <img
                      style={{ width: '60px', height: '60px' }}
                      alt="Corporate Governance"
                      src="https://www.philhealth.gov.ph/images/corp_gov.png"
                    />
                  </a>
                  <a href="URL_for_logo3">
                    <img
                      style={{ width: '60px', height: '60px' }}
                      alt="FOI Logo"
                      src="https://www.philhealth.gov.ph/images/foi_logo.png"
                    />
                  </a>
                </div>

                {/* Social Media */}
                <div>
                  <a href="https://www.facebook.com/PhilHealthOfficial/">
                    <img
                      style={{ width: '30px', height: '25px' }}
                      alt="Facebook"
                      src="https://www.philhealth.gov.ph/images/fb_btn.png"
                    />
                  </a>
                  <a href="https://twitter.com/teamphilhealth">
                    <img
                      style={{ width: '35px', height: '25px' }}
                      alt="Twitter"
                      src="https://www.philhealth.gov.ph/images/twitter_btn.png"
                    />
                  </a>
                  <a href="https://www.youtube.com/user/teamphilhealth">
                    <img
                      style={{ width: '35px', height: '25px' }}
                      alt="YouTube"
                      src="https://www.philhealth.gov.ph/images/youtube_btn.png"
                    />
                  </a>
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