import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <div className="mynav"  >
      <Navbar  className="fixed-top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand >VILLA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="me-auto">
            <Nav.Link 
            as={Link} to= '/'
            className={({ isActive}) => isActive ? "active" : ""}
            >Home</Nav.Link>
            <Nav.Link as={Link} to="/properties"
            className={({ isActive}) => isActive ? "active" : ""}
            >properties</Nav.Link>
            <Nav.Link as={Link} to= '/propertyDetails'
            className={({ isActive}) => isActive ? "active" : ""}
            >PropertyDetails</Nav.Link>
            <Nav.Link as={Link} to= '/contact'
            className={({ isActive}) => isActive ? "active" : ""}
            >Contact Us</Nav.Link>
            <Nav.Link href="#Schedule" className="lastitem">Schedule a visit</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default BasicExample;