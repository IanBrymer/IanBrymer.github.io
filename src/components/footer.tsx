import React, { useState } from 'react';
import '../styles/footer.css'
import { Col, Nav, Row } from 'react-bootstrap';
import LoadSpinner from './loadSpinner';

const Footer = () => {
    return (
        <>
            <div className='footerContainer d-flex'>
                <div className='basContainer' style={{ backgroundColor: '#E4ECF5', minHeight: "100px" }}>
                    <div className='bas'>Brymer &<br></br>Associates</div>
                </div>
                <div className='menu' style={{ backgroundColor: '#C5D2E1' }}>
                    <div className='menuContainer'>
                        <div className="h-fit w-75 d-flex" style={{ margin: 'auto', justifyContent: 'space-between' }}>
                            <div className='column' >
                                <Nav.Link className='mainItem' href='/'>HOME</Nav.Link>
                                <Nav.Link className='inferiorItems' href="/">About Us</Nav.Link>
                                <Nav.Link className='inferiorItems' href="/">Our Philosphy</Nav.Link>
                                <Nav.Link className='inferiorItems' href="/">Who we are</Nav.Link>
                                <Nav.Link className='mainItem' href="/">Contact Us</Nav.Link>
                            </div>
                            <div className='column'>
                                <Nav.Link className='mainItem' href='/'>HOME</Nav.Link>
                                <Nav.Link className='inferiorItems' href="/new-houses">New Houses</Nav.Link>
                                <Nav.Link className='inferiorItems' href="/alterations">Alterations</Nav.Link>
                                <Nav.Link className='inferiorItems' href="/small">Small Builds</Nav.Link>
                                <Nav.Link className='inferiorItems' href="/educational">Educational</Nav.Link>
                                <Nav.Link className='inferiorItems' href="/commercial">Commercial</Nav.Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>

    );
}

export default Footer;