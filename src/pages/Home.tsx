import React, { useState } from 'react'
import logo from './logo.svg';
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../components/footer';
import DefaultNavbar from '../components/navbar';
import LoadSpinner from '../components/loadSpinner';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const handleImageLoad = async () => {
        await delay(2000)
        setIsLoading(false)
    };

    function delay(milliseconds: number) {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    }
    return (
        <div className="App">
            <DefaultNavbar></DefaultNavbar>
            <div className="d-flex justify-content-center">
                <header className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <div className='landingContainer'>
                        <p className='lndHead'>
                            BRYMER&ASSOCIATESssss
                        </p>
                        <p className='HeadParagraphs'>
                            A LANGUAGE OF LINES
                        </p>
                    </div>
                </header>
            </div>
            <div className='aboutUs pt-5'>
                <Container>
                    <Row>
                        <Col className='headers'>A BIT ABOUT US</Col>
                        <Col></Col>
                    </Row>
                    <Row className='infoRow'>
                        <Col className='paragraphs'>Brymer and Associates architects, based in Knysna on the picturesque South African Garden Route, is a professional architect’s firm owned and run by husband-and-wife duo Ian and Merinda Brymer. The company has been operating in the Garden route for 30 years and specialises in domestic, light commercial and educational design and architectural supervision. To facilitate the needs of a number of our clients who are internationally based and generally do not have much time to spend on the project, we offer a turnkey architectural service.</Col>
                        <Col className='d-flex justify-content-end'><img alt='Cool pictures' className='columnImage' src={require('../pictures/Landing/landing page bits_Page_1.jpg')} /></Col>
                    </Row>
                </Container>
            </div>
            <div className='aboutUs pt-5'>
                <Container>
                    <Row className='infoRow'>
                        <Col className='d-flex justify-content-start'><img alt='Cool pictures' className='columnImage' src={require('../pictures/Landing/landing page bits_Page_2.jpg')} /></Col>
                        <Col className='paragraphs'><Col className='headers pb-5'>OUR PHILOSOPHY</Col><p className='paragraphs'>Brymer and Associates design philosophy is geared towards the needs and desires of our clients. It is very important that we provide our clients with an end product that suits their lifestyle and budget. Experience has given us the set of skills needed to interpret and develop a client’s brief, allowing us to deliver a building that suits their needs in every way. We develop an exceptional working relationship with our clients and we are often commissioned to do multiple future projects for our clients, which bares testament to our ability to deliver a quality product.</p></Col>
                    </Row>
                </Container>
            </div>
            <div className='aboutUs pt-5 w-100'>
                <Container>
                    <Row className='pb-5'>
                        <Col></Col>
                        <Col className='headers'>WHO WE ARE</Col>
                    </Row>
                    <Row className=''>
                        <Col className='paragraphPadding'><p className='paragraphs'><span style={{ fontWeight: 'bold' }}>Ian,</span> who has a BSc degree, is responsible for the architectural supervision and office management. Good management of the construction process is pivotal to delivering a superior end product. A close working relationship and constant communication between Ian, Merinda and the client facilitate the accurate portrayal of the architect’s and client’s vision to the construction management team. Details like choosing the right builders for the project, specifying the correct materials, managing the installation of the technical elements and minimising drawing interpretation errors all go a long way to delivering a great building that will be well used for many years. Strong emphasis is also placed on finishing details like landscaping, interior design and detailing, joinery and help with soft finishing. The quality of the construction team is a very important element, as many members of the team will develop long term relationships with the client.</p></Col>
                        {/* <Col className='headers portraitPadding d-flex justify-content-end'><img alt='Cool pictures' className='verticalPortraits' src={require('../pictures/HouseOrd/HOUSEORDT013 - Copy.jpg')} /></Col>
                        <Col className='d-flex justify-content-start'><img alt='Cool pictures' className='verticalPortraits' src={require('../pictures/HouseOrd/HOUSEORDT013 - Copy.jpg')} /></Col> */}
                        <Col className='portraitRows'><p className='paragraphs'><span style={{ fontWeight: 'bold' }}>Merinda,</span> who has a degree in architecture, is responsible for the initial client liaison, client brief and site analysis, project design, drawings and municipal and development submissions. Merinda has a holistic approach to design, with a strong emphasis on the client’s needs, paring these to the site and local environmental conditions. Design drawings, including numerous sections, are extensively detailed with a strong emphasis on interior design and finishing details. This allows builders to accurately price our drawings, deliver an excellent product and minimises costly on site changes to design.</p></Col>
                    </Row>
                </Container>
            </div>
            <div className='d-flex justify-content-around p-5'>
                <Nav.Link className='exploreOurWorkButton' href="/our-work">
                    <div className="buttonContainer">
                        <div className="inner">
                            EXPLORE OUR WORK
                        </div>
                    </div>
                </Nav.Link>
            </div>

        </div>
    );
}

export default Home;