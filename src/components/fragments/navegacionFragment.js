import React from "react";
import style from '../../styles.module.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
const NavegacionFragment= ({imagen,enlace1,enlace2,enlace3,enlace4,enlace5,subEnlace3,Link3}) => {
    return(
        <>
            <Container>
                  <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                  <Container>
                    <Navbar.Brand href="#home">
                      <img src={imagen} alt="swimers" className={style.Logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ms-auto">
                        <Nav.Link href="#home">{enlace1}</Nav.Link>
                        <Nav.Link href="#row-cursos">{enlace2}</Nav.Link>
                        <Nav.Link href="#row-nosotros">{enlace3}</Nav.Link>
                        <Nav.Link href="#row-contacto">{enlace4}</Nav.Link>
                        <NavDropdown title={enlace5} id="basic-nav-dropdown">

                          {/* <LinkContainer to="/ruta-para-curso-basico">
                            <NavDropdown.Item>Cursos Basico y Avanzado</NavDropdown.Item>
                          </LinkContainer>
                          <LinkContainer to="/ruta-para-clases-particulares">
                            <NavDropdown.Item>Clases Particulares</NavDropdown.Item>
                          </LinkContainer> */}

                          <LinkContainer to={Link3}>
                            <NavDropdown.Item>{subEnlace3}</NavDropdown.Item>
                          </LinkContainer>
                          <NavDropdown.Divider />
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
        </Container>
        
        
        </>
    )
}
export default NavegacionFragment