import { Navbar } from "react-bulma-components";
import * as React from "react";

const appBarStyle = {
  backgroundColor: "white"
}

function Header() {
  return (
    <Navbar style={{
      position: 'static',
      width: '-webkit-fill-available',
      boxShadow: '2px 2px 5px #888888',
      backgroundColor: 'white',
      
    }}>
      <Navbar.Brand>
        <Navbar.Item renderAs="a" href="#">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>

      <Navbar.Menu style={{ justifyContent: 'space-evenly' }}>

        <Navbar.Container style={{ justifyContent: 'flex-end' }}>
          <Navbar.Item href="#">first</Navbar.Item>
          <Navbar.Item href="#">Second</Navbar.Item>
        </Navbar.Container>

        <Navbar.Container align="right">
          <Navbar.Item href="#">At the end</Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>

    </Navbar>
  );
}

export default Header;
