import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function PortfolioHeader({ currentPage, handlePageChange }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Saul Ventura</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
                href="#about"
                onClick={() => handlePageChange('AboutMe')}>
              About Me
              </Nav.Link>
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Explore My Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#contact"
                 onClick={() => handlePageChange('Contact')}>Contact</NavDropdown.Item>
              <NavDropdown.Item href="#Portfolio" onClick={() => handlePageChange('Portfolio')}>
                Portfolio
              </NavDropdown.Item>
              <NavDropdown.Item href="#Resume" onClick={() => handlePageChange('Resume')}>Resume</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Work" onClick={() => handlePageChange('Work')}>
                Work
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioHeader;

