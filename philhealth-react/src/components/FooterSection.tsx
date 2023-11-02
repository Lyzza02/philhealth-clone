import { relative } from 'path';
import React, { useState } from 'react';
import { Box, Block, Hero, Footer, Container, Content } from "react-bulma-components";

function FooterSection() {


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
                  <p style={{ margin: '0 10px' }}> Home </p>
                  <p style={{ margin: '0 10px' }}> Contact Us </p>
                  <p style={{ margin: '0 10px' }}> Sitemap </p>
                  <p style={{ margin: '0 10px' }}> Disclaimer </p>
                  <p style={{ margin: '0 10px' }}> Privacy Notice </p>
                </div>

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