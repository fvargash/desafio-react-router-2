import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
  const setActive = ({ isActive }) => (isActive ? "active" : "noactive"); 
    return(
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">
            <img src='./img/pokebola.png' alt='#' width="55px"/>      
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink  className={setActive} to="/" end style={{textDecoration:'none'}}>Home</NavLink>
              <NavLink to="/pokeselect" className={setActive} style={{textDecoration:'none'}}>Poke-Select</NavLink>                 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;