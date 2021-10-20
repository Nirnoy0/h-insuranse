import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    
    return (
        <div className="col-auto">
            <Navbar bg="dark" variant="dark" sticky="top">
              
              <Container>
              
              <Navbar.Brand to="/home" className="text-info">
                <h2>H-Insurance</h2>
              </Navbar.Brand>
              
              <Navbar.Toggle/>
              <Navbar.Collapse>
              <Nav className="me-auto">
                
                <Nav.Link as={Link}
                to="/home"
                className="nav"
                activeStyle={{fontWeight: "bold", color: "red"}}>
                  Home
                </Nav.Link>
                
                <Nav.Link as={Link}
                to="/services"
                className="nav"
                activeStyle={{fontWeight: "bold", color: "red"}}>
                  Services
                </Nav.Link>

                <Nav.Link as={Link}
                to="/contact"
                className="nav"
                activeStyle={{fontWeight: "bold", color: "red"}}>
                  Contact
                </Nav.Link>
                
                <Nav.Link as={Link}
                to="/about"
                className="nav"
                activeStyle={{fontWeight: "bold", color: "red"}}>
                  About Us
                </Nav.Link>
              
              </Nav>
              
              {user?.email ?
                  <Button variant="light" onClick={logOut}>Logout</Button>:
                  <Nav.Link as={Link}
                    className="justify-content-end nav" 
                    to="/login"
                    activeStyle={{fontWeight: "bold", color: "red"}}>
                      Log In       
                    </Nav.Link>
              }

              <Navbar.Text>
                  Signed in as: <a href="#login">{user?.displayName}{user?.img}</a>
              </Navbar.Text>            
              </Navbar.Collapse>
              </Container>            
            </Navbar>
        </div>
    );
};

export default Header;