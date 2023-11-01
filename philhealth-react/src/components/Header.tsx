import { Navbar } from "react-bulma-components";
import * as React from "react";

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navbarHeight = '80px'; // Set the desired height

  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item href="#">
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
          className={`navbar-burger burger ${menuOpen ? "is-active" : ""}`}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          pull="right"
        />
      </Navbar.Brand>

      <Navbar.Menu>
        <Navbar.Container align="right">
          <Navbar.Item href="#">
            About Us
          </Navbar.Item>

          <Navbar.Item href="#">
            Members
          </Navbar.Item>

          <Navbar.Item href="#">
            Our Partners
          </Navbar.Item>

          <Navbar.Item href="#">
            Online Services
          </Navbar.Item>

          <Navbar.Item href="#">
            Downloads
          </Navbar.Item>
        </Navbar.Container>

        <Navbar.Container align="left">
          <Navbar.Item href="#">
            At the end
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
}

export default Header;
