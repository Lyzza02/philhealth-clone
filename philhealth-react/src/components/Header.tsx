import { Navbar } from "react-bulma-components";
import * as React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navbarHeight = '80px'; // Set the desired height

  return (
    <Navbar>
      <Navbar.Brand style={{
        height: navbarHeight
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
            height: navbarHeight
          }}
          className="navbar-burger"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          pull="right"
        />
      </Navbar.Brand>

      <Navbar.Menu className={`navbar-menu ${menuOpen ? "is-active" : ""}`} >
        <Navbar.Container align="right">
          <Navbar.Item href="/about-us">
            About Us
          </Navbar.Item>

          <Navbar.Item href="/members">
            Members
          </Navbar.Item>

          <Navbar.Item href="/our-partners">
            Our Partners
          </Navbar.Item>

          <Navbar.Item href="/online-services">
            Online Services
          </Navbar.Item>

          <Navbar.Item href="/downloads">
            Downloads
          </Navbar.Item>
        </Navbar.Container>

        {/* <Navbar.Container align="left">
          <Navbar.Item href="#">
            At the end
          </Navbar.Item>
        </Navbar.Container> */}
      </Navbar.Menu>
    </Navbar>
  );
}

export default Header;
