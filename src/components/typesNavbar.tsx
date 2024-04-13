import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const TypesNavbar = () => {
    return (
        <>

            <Navbar expand="lg" className="bg-body-tertiary w-100 justify-content-center d-flex">
                <Container className=' '>
                    <Navbar.Brand href='/'><div className='logo2'>Brymer &<br></br>Associates</div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto paragraphs w-100 d-flex justify-content-between">
                            <Nav.Link href="/new-houses">New Houses</Nav.Link>
                            <Nav.Link href="/alterations">Alterations</Nav.Link>
                            <Nav.Link href="/small">Small Builds</Nav.Link>
                            <Nav.Link href="/educational">Educational</Nav.Link>
                            <Nav.Link href="/commercial">Commercial</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default TypesNavbar;