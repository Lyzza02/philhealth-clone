import React, { useState } from 'react';
import { Box, Column, FooterContainer, FooterLink, Heading, Row } from './FooterStyle';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
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
      <Box>
        <h1
          style={{
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          <img
            style={{ width: '240px', height: 'auto' }}
            alt="Philhealth logo"
            src="https://www.philhealth.gov.ph/images/ph_logo0.png"
          />
        </h1>
        <FooterContainer>
          <Row>

            <Column>
              <Heading></Heading>
              <FooterLink>
                <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '10px' }} />
                Citystate Centre, 709 Shaw Boulevard 1603 Pasig City
              </FooterLink>
              <FooterLink>
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
                Action Center 8441-7442
              </FooterLink>
            </Column>

            <Column>
              <Heading>Navigation</Heading>
              <FooterLink href="/">
                Home
              </FooterLink>
              <FooterLink href="/contact-us">
                Contact Us
              </FooterLink>
              <FooterLink href="/site-map">
                Sitemap
              </FooterLink>
              <FooterLink onClick={toggleDisclaimerModal}>
                Disclaimer
              </FooterLink>
              <DisclaimerModal showDisclaimerModal={showDisclaimerModal} toggleDisclaimerModal={toggleDisclaimerModal} />

              <FooterLink onClick={togglePrivacyModal}>
                Privacy Notice
              </FooterLink>
              <PrivacyModal showPrivacyModal={showPrivacyModal} togglePrivacyModal={togglePrivacyModal} />
            </Column>

            <Column>
              <Heading>Other Links</Heading>
              <FooterLink href="https://www.philhealth.gov.ph/circulars/2023/">
                Circulars
              </FooterLink>
              <FooterLink href="https://www.philhealth.gov.ph/advisories/2023/">
                Advisories
              </FooterLink>
              <FooterLink href="https://www.philhealth.gov.ph/news/">
                News
              </FooterLink>
              <FooterLink href="https://www.philhealth.gov.ph/ofclstmnts/2023/">
                Official Statements
              </FooterLink>
              <FooterLink href="https://www.philhealth.gov.ph/suppliers/iaeb/index.htm">
                ITB
              </FooterLink>
              <FooterLink href="https://www.philhealth.gov.ph/about_us/vacancies/2023/">
                Job Vacancies
              </FooterLink>
              <FooterLink href="https://www.philhealth.gov.ph/joint_issuances/">
                Joint Issuances
              </FooterLink>
            </Column>

            <Column>
              <Heading>Image Links</Heading>
              <FooterLink href="https://www.philhealth.gov.ph/konsulta/">
                <img src="https://www.philhealth.gov.ph/konsulta/images/konsulta_bnnr_sml.jpg" alt="Konsulta" />
              </FooterLink>
              <FooterLink href="https://www.philhealth.gov.ph/about_us/map/regional.htm">
                <img src="https://www.philhealth.gov.ph/images/contact_btn.jpg" alt="Question or Concern? Contact Us" />
              </FooterLink>
              <FooterLink href="https://www.philhealth.gov.ph/uhc/LibreNaBa.pdf">
                <img src="	https://www.philhealth.gov.ph/images/uhc_btn.jpg" alt="Universal Health Care" />
              </FooterLink>
              <FooterLink href="https://www.philhealth.gov.ph/arta/">
                <img src="https://www.philhealth.gov.ph/images/arta_bnnr_sml.jpg" alt="Anti Red Tape Act" />
              </FooterLink>
              <FooterLink href="https://www.philhealth.gov.ph/unclaimedrefunds/">
                <img src="https://www.philhealth.gov.ph/images/UnclaimedRefunds.jpg" alt="Unclaimed Refunds" />
              </FooterLink>
            </Column>


            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="https://www.facebook.com/PhilHealthOfficial/">
                <i className="fab fa-facebook-f">
                  <span
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    Facebook
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="https://twitter.com/teamphilhealth">
                <i className="fab fa-twitter">
                  <span
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    Twitter
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="https://www.youtube.com/user/teamphilhealth">
                <i className="fab fa-youtube">
                  <span
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    Youtube
                  </span>
                </i>
              </FooterLink>
              <FooterLink>
                <a href="https://www.philhealth.gov.ph/about_us/transparency/">
                  <img
                    style={{ width: '55px', height: '55px' }}
                    alt="Transparency Seal"
                    src="https://www.philhealth.gov.ph/images/transparency_seal.png"
                  />
                </a>
                <a href="https://www.philhealth.gov.ph/about_us/transparency/GOCC_Scorecard.pdf">
                  <img
                    style={{ width: '55px', height: '55px' }}
                    alt="Corporate Governance"
                    src="https://www.philhealth.gov.ph/images/corp_gov.png"
                  />
                </a>
                <a href="https://www.foi.gov.ph/requests?agency=PH">
                  <img
                    style={{ width: '55px', height: '55px' }}
                    alt="FOI Logo"
                    src="https://www.philhealth.gov.ph/images/foi_logo.png"
                  />
                </a>
              </FooterLink>
            </Column>
          </Row>
        </FooterContainer>

        <h1
          style={{
            color: "green",
            textAlign: "center",
            marginTop: "10px",
            fontWeight: "400",
            fontSize: "16px"
          }}
        >
          © 2014 Philippine Health Insurance Corporation
        </h1>
      </Box>
    </div>
  );
}

export default FooterSection;