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
                  style={{ width: '140px', height: 'auto' }}
                  alt="Philhealth logo"
                  src="https://www.philhealth.gov.ph/images/ph_logo0.png"
                />

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

                <p>
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