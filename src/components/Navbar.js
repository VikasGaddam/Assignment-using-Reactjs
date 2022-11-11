import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';

function Navbars() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">VOLVO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Our Cars">Our Cars</Nav.Link>
            <Nav.Link href="#Menu">Menu</Nav.Link>
            <Nav.Link href="#Login">Gallery</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars