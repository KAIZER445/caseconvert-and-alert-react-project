import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

export default function Navbarcom({ CompanyName, theme, themechange }) {
  return (
    <div>
      <Navbar expand="lg" bg={theme} data-bs-theme={theme} className='shadow'>
        <Container>
          <div className='d-flex align-items-center'>
            <Navbar.Brand href="#home">{CompanyName}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              onChange={themechange}
            />
          </Form>
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
