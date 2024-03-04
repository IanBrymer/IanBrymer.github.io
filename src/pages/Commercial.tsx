import React, { useState } from 'react';
import { Card, Col, Nav, Row } from 'react-bootstrap';
import HouseCards from '../components/houseCards';
import TypesNavbar from '../components/typesNavbar';
import PageHeaders from '../components/pageHeaders';
import LoadSpinner from '../components/loadSpinner';
import '../App.css'
const Commercial = () => {
    const [isLoading, setIsLoading] = useState(true);
    const handleImageLoad = async () => {
        await delay(3000)
        setIsLoading(false)
    };

    function delay(milliseconds: number) {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    }
    return (
        <>
            <div className="App" style={{ maxWidth: '1440px', margin: 'auto' }}>
                <div className='OtherPageheader'>
                    <TypesNavbar></TypesNavbar>
                    <PageHeaders fontSize='2rem' scaleOne='1' scaleTwo='1.5' backgroundFontSize='12rem' height='400px' backgroundHeader="COMMERCIAL" header='EXPLORE A FEW OF OUR COMMERCIAL BUILDS'></PageHeaders>
                    <Row className='px-2' style={{ height: 'min-content', marginBottom: '20px', width: '95%', maxWidth: '1440px' }}>
                        <Col >
                            <p style={{ textAlign: 'left' }} className='paragraphs'>Brymer and Associates have been commissioned to do a number of commercial projects over the years. We have worked extensively on the Knysna Municipal buildings and upgraded many of the Knysna CBD buildings including hotels, dental surgeries, office buildings, shops, boutiques and schools.</p>
                        </Col>
                    </Row>
                </div>
            </div>
            <div onLoad={handleImageLoad} className='pb-5 pt-3' style={{ margin: 'auto' }}>
                <Row className='w-100 d-flex justify-content-around' style={{ maxWidth: '1440px', margin: 'auto' }}>
                    <Col style={{ padding: 0, display: 'block', maxWidth: '800px' }}>
                        <Nav.Link href='/commercial/proposed-dentistry' style={{ padding: 0, display: 'block', width: 'min-content', margin: 'auto' }}>
                            <HouseCards width='28rem' paddingTop='0px' imageSrc='HouseCards/Dentistry.png' houseName='Proposed Dentistry' paragraph='A modern design for a dental surgery with large expanses of glass and double volume reception space to maximise light penetration. Large glass doors and windows connect the interior and exterior to create a friendlier street scape and connect the working environment to the outdoors.'></HouseCards>
                        </Nav.Link>
                        <Nav.Link href='/commercial/rair-plett' style={{ padding: 0, display: 'block', width: 'min-content', margin: 'auto' }}>
                            <HouseCards width='28rem' paddingTop='35px' imageSrc='HouseCards/Rair.jpg' houseName='Rair Plett' paragraph='A complete make-over of an old retail space to accommodate a modern fashion boutique, with the design, detailing and installation of various types of exhibiting spaces and wall decorations.'></HouseCards>
                        </Nav.Link>
                        <Nav.Link href='/commercial/vehicle-testing-center' style={{ padding: 0, display: 'block', width: 'min-content', margin: 'auto' }}>
                            <HouseCards width='28rem' paddingTop='35px' imageSrc='HouseCards/Vehicle.png' houseName='Vehicle Testing Center' paragraph='An old small derelict vehicle testing station has been re-designed and expanded into a large new office building. The internal vehicle pit area has been retained and altered into an internal green landscaped space to create a healthier working environment. Glass, steel, face brick and timber has been introduced to create contemporary textured façades.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
                        <Nav.Link href='/commercial/migym' >
                            <Col className='d-flex justify-content-center'>
                                <Card style={{ width: 'auto', maxWidth: '950px', height: 'min-content', borderRadius: '0 0 0 0' }}>
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
                {isLoading && <LoadSpinner></LoadSpinner>}
            </div>
        </>
    );
}

export default Commercial;