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
                        <Nav.Link href='/small/osc-pavillion'>
                            <HouseCards paddingTop='0px' imageSrc='HouseCards/OSCPavillion.jpg' houseName='OSC Pavillion' paragraph='A small sports pavilion constructed in timber.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/small/kennet-street-cottage'>
                            <HouseCards paddingTop='0px' imageSrc='HouseCards/KennetStreetCottage.png' houseName='Kennet Street Cottage' paragraph='A little garden cottage designed for timber construction with timber and corrugated iron cladding to blend in harmoniously with the garden surround.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/small/noetzie'>
                            <HouseCards paddingTop='0px' imageSrc='HouseCards/Noetzie.jpg' houseName='Noetzie' paragraph='An old timber cottage was re-invented to create a modern open plan beach cottage, while retaining all the existing stone piers as a connection with the past history.'></HouseCards>
                        </Nav.Link>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/small/dental-surgery'>
                            <HouseCards paddingTop='50px' imageSrc='HouseCards/DentalSurgery.jpg' houseName='Dental Surgery' paragraph='An old maize of rooms was re-designed to create an airy, light and semi open-plan contemporary dentistry. A curved wall was introduced to direct flow as well as to soften the strong geometry of the existing spaces.'></HouseCards>
                        </Nav.Link>
                    </Col>
                </Row>

            </div>
        </>
    );
}

export default Small;