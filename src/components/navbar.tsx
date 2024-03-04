import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const DefaultNavbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 980);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 980);
    };

    // Attach and remove event listener on component mount and unmount
    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isMobile ? (
                <Navbar bg="light" expand="lg" className="fixed-top">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="flex-column">
                            <Nav.Link className="linkText" href='/'>HOME</Nav.Link>
                            <Nav.Link className="linkText" href="/our-work">OUR WORK</Nav.Link>
                            <Nav.Link className="linkText" href="/contact-us">CONTACT US</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            ) : (
                <div className="position-fixed top-50 end-0 translate-middle-y">
                    <div className="list-group">
                        <Nav.Link className="linkText list-group-item list-group-item-action list-group-item-light px-3" href='/' style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>HOME</Nav.Link>
                        <Nav.Link className="linkText list-group-item list-group-item-action list-group-item-light px-3" href="/our-work" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>OUR WORK</Nav.Link>
                        <Nav.Link className="linkText list-group-item list-group-item-action list-group-item-light px-3" href="/contact-us" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>CONTACT US</Nav.Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default DefaultNavbar;
