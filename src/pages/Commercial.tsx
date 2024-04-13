import React, { useEffect, useState } from 'react';
import { Card, Col, Nav, Row } from 'react-bootstrap';
import HouseCards from '../components/houseCards';
import TypesNavbar from '../components/typesNavbar';
import PageHeaders from '../components/pageHeaders';
import '../App.css'
const Commercial = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 550;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <>
            <div className="App" style={{ maxWidth: '1440px', margin: 'auto' }}>
                <div className='OtherPageheader'>
                    <TypesNavbar></TypesNavbar>
                    <PageHeaders fontSize='2vw' scaleOne='1' scaleTwo='1.5' backgroundFontSize='14vw' height='55vh' backgroundHeader="COMMERCIAL" header='EXPLORE A FEW OF OUR COMMERCIAL BUILDS'></PageHeaders>
                    <Row className='px-2' style={{ height: 'min-content', marginBottom: '20px', width: '95%', maxWidth: '1440px' }}>
                        <Col >
                            <p style={{ textAlign: 'left' }} className='paragraphs'>Brymer and Associates have been commissioned to do a number of commercial projects over the years. We have worked extensively on the Knysna Municipal buildings and upgraded many of the Knysna CBD buildings including hotels, dental surgeries, office buildings, shops, boutiques and schools.</p>
                        </Col>
                    </Row>
                </div>
            </div>
            {breakpoint < width ? <div className=' pb-5 pt-3 px-4 d-flex justify-content-between'>
                <Row className='justify-content-around w-100'>
                    <Col xs={12} sm={6} md={4} className='py-4 px-4 text-center'>
                        <Nav.Link href='/commercial/proposed-dentistry' style={{ padding: 0, display: 'block', width: 'min-content', margin: 'auto' }}>
                            <HouseCards width='500px' paddingTop='0px' imageSrc='HouseCards/Dentistry.png' houseName='Proposed Dentistry' paragraph='A modern design for a dental surgery with large expanses of glass and double volume reception space to maximise light penetration. Large glass doors and windows connect the interior and exterior to create a friendlier street scape and connect the working environment to the outdoors.'></HouseCards>
                        </Nav.Link>
                        <Nav.Link href='/commercial/rair-plett' style={{ padding: 0, display: 'block', width: 'min-content', margin: 'auto' }}>
                            <HouseCards width='500px' paddingTop='35px' imageSrc='HouseCards/Rair.jpg' houseName='Rair Plett' paragraph='A complete make-over of an old retail space to accommodate a modern fashion boutique, with the design, detailing and installation of various types of exhibiting spaces and wall decorations.'></HouseCards>
                        </Nav.Link>
                        <Nav.Link href='/commercial/vehicle-testing-center' style={{ padding: 0, display: 'block', width: 'min-content', margin: 'auto' }}>
                            <HouseCards width='500px' paddingTop='35px' imageSrc='HouseCards/Vehicle.png' houseName='Vehicle Testing Center' paragraph='An old small derelict vehicle testing station has been re-designed and expanded into a large new office building. The internal vehicle pit area has been retained and altered into an internal green landscaped space to create a healthier working environment. Glass, steel, face brick and timber has been introduced to create contemporary textured façades.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col xs={12} sm={6} md={4} className=' text-center'>
                        <Nav.Link href='/commercial/migym'>
                            <Col>
                                <Card style={{ minWidth: '100%', width: '100%', maxWidth: '900px', height: 'min-content', borderRadius: '0 0 0 0' }}>
                                    <Card.Img className='miGym' style={{ overflow: 'hidden', borderRadius: '0 0 0 0' }} variant="top" src={require(`../pictures/HouseCards/MiGym.jpg`)} />
                                    <Card.Body style={{ backgroundColor: '#E4ECF5' }}>
                                        <Card.Title className='houseCardHeadings'>MiGym</Card.Title>
                                        <Card.Text className='houseCardParagraphs'>
                                            Working in conjunction with Jo Pieters Design Studio, an old dark and dilapidated gymnasium was altered and expanded to create a large modern gymnasium which opens up to the exterior allowing for improved air flow and an indoor/outdoor gym experience. The gym includes a coffee shop, dance studio, heated lap pool, steam rooms, extensive changing and powder rooms, many weight training areas and a state of the art spin studio.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Nav.Link>
                    </Col>
                </Row>

            </div> : <div className=' pb-5 pt-3 px-4 d-flex justify-content-between'>
                <Row className='justify-content-around w-100'>
                    <Col xs={12} sm={6} md={4} className='py-4 px-4 text-center'>
                        <Nav.Link href='/commercial/proposed-dentistry' style={{ padding: 0, display: 'block', width: 'min-content', margin: 'auto' }}>
                            <HouseCards width='325px' paddingTop='0px' imageSrc='HouseCards/Dentistry.png' houseName='Proposed Dentistry' paragraph='A modern design for a dental surgery with large expanses of glass and double volume reception space to maximise light penetration. Large glass doors and windows connect the interior and exterior to create a friendlier street scape and connect the working environment to the outdoors.'></HouseCards>
                        </Nav.Link>
                        <Nav.Link href='/commercial/rair-plett' style={{ padding: 0, display: 'block', width: 'min-content', margin: 'auto' }}>
                            <HouseCards width='325px' paddingTop='35px' imageSrc='HouseCards/Rair.jpg' houseName='Rair Plett' paragraph='A complete make-over of an old retail space to accommodate a modern fashion boutique, with the design, detailing and installation of various types of exhibiting spaces and wall decorations.'></HouseCards>
                        </Nav.Link>
                        <Nav.Link href='/commercial/vehicle-testing-center' style={{ padding: 0, display: 'block', width: 'min-content', margin: 'auto' }}>
                            <HouseCards width='325px' paddingTop='35px' imageSrc='HouseCards/Vehicle.png' houseName='Vehicle Testing Center' paragraph='An old small derelict vehicle testing station has been re-designed and expanded into a large new office building. The internal vehicle pit area has been retained and altered into an internal green landscaped space to create a healthier working environment. Glass, steel, face brick and timber has been introduced to create contemporary textured façades.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='py-4 px-4 text-center'>
                        <Nav.Link href='/commercial/migym'>
                            <Col>
                                <Card style={{ minWidth: '325px', width: '325px', maxWidth: '325px', height: 'min-content', borderRadius: '0 0 0 0' }}>
                                    <Card.Img className='miGym' style={{ overflow: 'hidden', borderRadius: '0 0 0 0' }} variant="top" src={require(`../pictures/HouseCards/MiGym.jpg`)} />
                                    <Card.Body style={{ backgroundColor: '#E4ECF5' }}>
                                        <Card.Title className='houseCardHeadings'>MiGym</Card.Title>
                                        <Card.Text className='houseCardParagraphs'>
                                            Working in conjunction with Jo Pieters Design Studio, an old dark and dilapidated gymnasium was altered and expanded to create a large modern gymnasium which opens up to the exterior allowing for improved air flow and an indoor/outdoor gym experience. The gym includes a coffee shop, dance studio, heated lap pool, steam rooms, extensive changing and powder rooms, many weight training areas and a state of the art spin studio.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Nav.Link>
                    </Col>
                </Row>

            </div>}

        </>
    );
}

export default Commercial;