import React from 'react';
import '../styles/footer.css'
import { Col, Nav, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <div className='footerContainer d-flex'>
                <div className='basContainer' style={{ backgroundColor: '#E4ECF5' }}>
                    <div className='bas'>Brymer &<br></br>Associates</div>
                </div>
                <div className='menu' style={{ backgroundColor: '#C5D2E1' }}>
                    <div className='menuContainer'>
                        <div className="h-fit w-75 d-flex" style={{ margin: 'auto', justifyContent: 'space-between' }}>
                            <div className='column' >
                                <Nav.Link className='mainItem' href='/'>HOME</Nav.Link>
                                <Nav.Link className='inferiorItems' href="/our-work">About Us</Nav.Link>
                                <Nav.Link className='inferiorItems' href="/our-work">Our Philosphy</Nav.Link>
                                <Nav.Link className='inferiorItems' href="/our-work">Who we are</Nav.Link>
                                <Nav.Link className='mainItem' href="/our-work">Contact Us</Nav.Link>
                            </div>
                            <div className='column'>
                                <Nav.Link className='mainItem' href='/'>HOME</Nav.Link>
                                <Nav.Link className='inferiorItems' href="/our-work">New Houses</Nav.Link>
                                <Nav.Link className='inferiorItems' href="/contact-us">Alterations</Nav.Link>
                                <Nav.Link className='inferiorItems' href="/contact-us">Small Builds</Nav.Link>
                                <Nav.Link className='inferiorItems' href="/contact-us">Educational</Nav.Link>
                                <Nav.Link className='inferiorItems' href="/contact-us">Commercial</Nav.Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Footer;