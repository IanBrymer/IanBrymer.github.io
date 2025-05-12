import React from 'react'
import DefaultNavbar from '../components/navbar';
import PageHeaders from '../components/pageHeaders';
import '../App.css';
import { Col, Row } from 'react-bootstrap';
import EmailIcon from './svg/EmailIcon';
import SmartPhone from './svg/SmartPhone';
import TelephoneIcon from './svg/TelephoneIcon';

const ContactUs = () => {
    return (
        <>
            <div className="App">
                <DefaultNavbar></DefaultNavbar>
                <div className='OtherPageheader'>
                    <PageHeaders fontSize='3vw' scaleOne='1.5' scaleTwo='1.8' backgroundFontSize='8.5vw' height='200px' backgroundHeader="CONTACT US" header='SAY HELLO'></PageHeaders>
                </div>
                <div className='container'>
                    <div className='pb-5 pt-3 px-4'>
                        <div style={{ width: '100%', justifyContent: "center", display: 'flex' }}>
                            <div style={{ width: '500px', justifyContent: 'center', backgroundColor: '#eaf4ff', padding: '30px' }}>
                                <Row className='my-5 d-flex justify-content-center'>
                                    <Col style={{ maxWidth: "250px", height: 'min-content' }}>
                                        <p className='contact'><EmailIcon></EmailIcon><span className='mx-1'></span>EMAIL ADDRESS</p>
                                    </Col>
                                    <Col style={{ maxWidth: "250px", height: 'min-content' }}>
                                        <p className='contact'><a onClick={() => window.location.href = 'mailto:info@brymer.co.za'} href='mailto:mail@merinda.co.za' style={{ color: 'black' }}>info@brymer.co.za</a></p>
                                    </Col>
                                </Row>
                                <Row className='my-5 d-flex justify-content-center'>
                                    <Col style={{ maxWidth: "250px", height: 'min-content' }}>
                                        <p className='contact'><TelephoneIcon></TelephoneIcon><span className='mx-1'></span>OFFICE NUMBER</p>
                                    </Col>
                                    <Col>
                                        <p className='contact'>044 382 2688</p>
                                    </Col>
                                </Row>
                                <Row className='my-5 d-flex justify-content-center'>
                                    <Col style={{ maxWidth: "250px", height: 'min-content' }}>
                                        <p className='contact'><SmartPhone></SmartPhone><span className='mx-1'></span>CELL NUMBER</p>
                                    </Col>
                                    <Col>
                                        <p className='contact'>083 412 7368</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <img alt='pablo' src={require(`../pictures/icons/bgnone.png`)}></img>
                    </div>
                </div >
            </div >
        </>
    )
}

export default ContactUs;
