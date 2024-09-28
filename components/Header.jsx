import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../src/assets/Logo.png';
import Botao from './Botao';
import Logo from './Logo';

function Header() {
    return (
        <Navbar expand="lg" className="bg-dark">
            <Container>
                <Navbar.Brand href="#home" className='text-light'>
                    <img src={logo} class='logo'></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-light">
                        <Nav.Link href="#promoções"><b>Promoções</b></Nav.Link>
                        <Nav.Link href="#anuncie"><b>Anuncie</b></Nav.Link>
                        <NavDropdown title="Blogs" id="basic-nav-dropdown" className='fw-bold'>
                            <NavDropdown.Item href="#famosos">Famosos</NavDropdown.Item>
                            <NavDropdown.Item href="#música">
                                Música
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#entretenimento">Entretenimento</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#variedades">
                                Variedades
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header;