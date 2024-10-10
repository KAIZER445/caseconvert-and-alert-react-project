import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'

export default function Navbarcom({ CompanyName, theme, themechange, themechangedanger }) {
  const [switchOneChecked, setSwitchOneChecked] = useState(false);
  const [switchTwoChecked, setSwitchTwoChecked] = useState(false);

  const handleSwitchOneChange = () => {
    if(switchOneChecked=== false){
      setSwitchOneChecked(true);
      setSwitchTwoChecked(false);
      themechange();
    }else{
      setSwitchOneChecked(false);
      themechange();
    }
  };

  const handleSwitchTwoChange = () => {
    if(switchTwoChecked=== false){
      setSwitchTwoChecked(true);
      setSwitchOneChecked(false);
      themechangedanger();
    }else{
      setSwitchTwoChecked(false);
      themechangedanger();
    }

  };
  return (
    <div>
      <Navbar expand="lg" bg={theme} data-bs-theme={theme} className='shadow'>
        <Container>
          <div className='d-flex align-items-center'>
            <Navbar.Brand href="#home">{CompanyName}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to='/about'>About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className='d-flex gap-1'>
            <Form data-bs-theme='dark'>
              <Form.Check
                type="switch"
                id="custom-switch"
                checked={switchOneChecked}
                onChange={handleSwitchOneChange}
              />
            </Form>
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch-red"
                checked={switchTwoChecked}
                onChange={handleSwitchTwoChange}
              />
            </Form>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

Navbarcom.propTypes = {
  CompanyName: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  themechange: PropTypes.func.isRequired,
};
