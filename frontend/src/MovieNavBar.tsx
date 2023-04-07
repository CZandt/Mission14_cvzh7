import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Routes,
  Router,
  Route,
  Outlet,
  Link,
} from 'react-router-dom';

function MovieNavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Joel Hilton Movie Collection</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Movie Collection</Nav.Link>
              <Nav.Link>Podcast</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <Link to="/" className="navbar-brand p-3">
        Joel Hilton's Movie Collection
      </Link>
      <div className="" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/podcast">
              My Podcasts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/movieList">
              Movie Collection
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
