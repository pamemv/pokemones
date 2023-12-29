import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import './app.css';

function NavbarComponent() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <Navbar bg="dark" variant="dark" id="myNavbar">
      <Container className='justify-content-between'>
        <Navbar.Brand href="#home">Pokemones</Navbar.Brand>
        <Nav>
          <NavLink
            to="/"
            className={ setActiveClass }
          >
            Home
          </NavLink>
          {" - "}
          <NavLink
            to="/pokemones"
            className={ setActiveClass }
          >
            Pokemones
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent;