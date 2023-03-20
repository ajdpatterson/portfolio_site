import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CVContent from "./CVContent";

const NavBar = () => {
    return(

        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="/">Dr Andrew Patterson</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <NavDropdown title="Navigate" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/">readme.txt</NavDropdown.Item>
                    {/* <NavDropdown.Item href="/CV">View my CV</NavDropdown.Item> */}
                    <NavDropdown.Item href="/work">View my portfolio</NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
            <CVContent/>
            </Container>
        </Navbar>
    )
}

export default NavBar;