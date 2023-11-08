import { Navbar } from "react-bulma-components";
import * as React from "react";

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navbarHeight = '80px'; // Set the desired height

  // Define a CSS class for white text
  const whiteText = {
    color: 'white',
  };

  return (
    <Navbar style={{ backgroundColor: '#329900', textAlign:'center' }}>
      <Navbar.Brand style={{
        height: navbarHeight,
      }}>
        <Navbar.Item href="/" className="custom-navbar-item">
          <img
            style={{ width: '140px', height: 'auto' }}
            alt="Philhealth logo"
            src="https://www.philhealth.gov.ph/images/ph_logo0.png"
          />

          <img
            style={{ width: '50px', height: 'auto' }}
            alt="Philhealth logo 2"
            src="https://www.philhealth.gov.ph/images/bagong_pilipinas_logo3.png"
          />
        </Navbar.Item>

        <Navbar.Burger
          style={{
            height: navbarHeight, color:'white'
          }}
          className="navbar-burger"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          pull="right"
        />
      </Navbar.Brand>

      <Navbar.Menu className={`navbar-menu ${menuOpen ? "is-active" : ""}`} style={{ backgroundColor: '#329900'} }>
        <Navbar.Container align="right">
          <Navbar.Item href="/about-us" className="hover-effect" style={whiteText}>
            About Us
          </Navbar.Item>

          <Navbar.Item href="/members" className="hover-effect" style={whiteText}>
            Members
          </Navbar.Item>

          <Navbar.Item href="/our-partners" className="hover-effect" style={whiteText}>
            Our Partners
          </Navbar.Item>

          <Navbar.Item href="/online-services" className="hover-effect" style={whiteText}>
            Online Services
          </Navbar.Item>

          <Navbar.Item href="/downloads" className="hover-effect" style={whiteText}>
            Downloads
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
}

export default Header;
