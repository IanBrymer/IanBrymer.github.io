import '../App.css'
import { Col, Nav, Row } from 'react-bootstrap';
import HouseCards from '../components/houseCards';
import TypesNavbar from '../components/typesNavbar';
import PageHeaders from '../components/pageHeaders';
const Small = () => {
    return (
        <>
            <div className="App">
                <div className='OtherPageheader'>
                    <TypesNavbar></TypesNavbar>
                    <PageHeaders fontSize='3vw' scaleOne='1.5' scaleTwo='2.2' backgroundFontSize='8.5vw' height='40vh' backgroundHeader="SMALL BUILDS" header='EXPLORE A FEW OF OUR SMALL BUILDS'></PageHeaders>
                    <Row className='px-2' style={{ height: 'auto', width: '95%' }}>
                        <Col >
                            <p className='paragraphs'>Small work adds an element of fun to our portfolio. We have a passion for good design and small projects tend to bring the best out in us. Furniture design is another passion of ours, we undertake furniture design commissions for some of our clients as this enhances the overall appearance of the finished house.</p>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='pb-5 pt-3 px-4'>
                <Row className='justify-content-center'>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/educational/proposed-imad-center'>
                            <HouseCards paddingTop='0px' imageSrc='HouseCards/ProposedIMADCenter.png' houseName='Proposed IMAD Center' paragraph='A contemporary theatre, arts and drama building, designed with concrete, glass and “green” walls to reflect the progressive nature of the school’s ethos.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/educational/proposed-osc-boarding-house'>
                            <HouseCards paddingTop='0px' imageSrc='HouseCards/ProposedOSCBoarding.png' houseName='Proposed OSC Boarding House' paragraph='A textured design for young people with glass, concrete and steel cladding to create a modern and airy living space.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/educational/oakhill-learning-commons'>
                            <HouseCards paddingTop='0px' imageSrc='HouseCards/OakhillLearningCommons.jpg' houseName='Oakhill Learning Commons' paragraph='The joy of learning.'></HouseCards>
                        </Nav.Link>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/educational/masefunde-library'>
                            <HouseCards paddingTop='50px' imageSrc='HouseCards/MasefundeLibrary.jpg' houseName='Masefunde Library' paragraph='This building was designed with the emphasis on local community and low maintenance but also to reflect the colourful environment surrounding the centre.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/educational/oakhill-music-room'>
                            <HouseCards paddingTop='50px' imageSrc='HouseCards/OakhillMusicRoom.jpg' houseName='Oakhill Music Room' paragraph='A take on container architecture to reflect the forward thinking ethos of the school, this building addition was constructed in timber and metal cladding.'></HouseCards>
                        </Nav.Link>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Small;