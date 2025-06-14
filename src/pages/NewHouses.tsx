import PageHeaders from '../components/pageHeaders';
import '../App.css'
import { Col, Nav, Row } from 'react-bootstrap';
import HouseCards from '../components/houseCards';
import TypesNavbar from '../components/typesNavbar';
const NewHouses = () => {
    return (
        <>
            <div className="App">
                <div className='OtherPageheader'>
                    <TypesNavbar></TypesNavbar>
                    <PageHeaders fontSize='3vw' scaleOne='1.8' scaleTwo='2.5' backgroundFontSize='7vw' height='35vh' backgroundHeader="NEW HOUSES" header='EXPLORE A FEW OF OUR NEW BUILDS'></PageHeaders>
                    <Row className='justify-content-center px-2' style={{ maxWidth: '100%' }}>
                        <Col xs={12} sm={6} md={4} className='text-center'>
                            <p style={{ textAlign: 'left' }} className='paragraphs'>Our portfolio of homes designed over the last 30 years is very diverse. We do not favour one architectural style over another and rather concentrate on delivering a well-designed house in our clients preferred style and budget. Although most of our work is concentrated in Knysna, Plettenberg Bay and the Garden Route area, we have completed commissions all over the country, as well as internationally where we have worked in Zimbabwe and Switzerland.</p>
                        </Col>
                        <Col xs={12} sm={6} md={4} className='text-center'>
                            <p style={{ textAlign: 'left' }} className='paragraphs'>The building environment is ever changing, with new products and systems entering the market daily. We spend a great deal of time evaluating these systems and discussing them with the suppliers to identify systems that will enhance, rather than hinder, our client’s lifestyle. We generally wait for systems to be tried and tested before recommending them. Buildings are becoming “greener” and more energy efficient and it is important to use modern systems to enhance the buildings efficiency, but this must be balanced against ease of use and fit into the desired lifestyle choices of our clients</p>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='pb-5 pt-3 px-4'>
                <Row className='justify-content-center'>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/new-houses/river-house'>
                            <HouseCards paddingTop='35px' imageSrc='HouseCards/RiverHouse.jpg' houseName='River House' paragraph='A simple stone, glass and steel construction designed to create a contemporary and relaxed holiday home in nature. The dwelling has been constructed on a raised stone and steel support structure to accommodate the Knysna River 100 year flood levels.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/new-houses/gradient'>
                            <HouseCards paddingTop='50px' imageSrc='HouseCards/Gradient.jpg' houseName='Gradient' paragraph='A contemporary off-shutter concrete, steel and glass design. The South facing home was designed around central court yards to allow North sun into the living spaces, as well as to allow for outdoor protected areas from harsh coastal weather conditions.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/new-houses/swartvlei'>
                            <HouseCards paddingTop='0px' imageSrc='HouseCards/Swartvlei.jpg' houseName='Swartvlei' paragraph='An eclectic and organic design arranged centrally over a circular water feature giving this unique design an African Zen feeling.'></HouseCards>
                        </Nav.Link>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/new-houses/western-head'>
                            <HouseCards paddingTop='-50px' imageSrc='HouseCards/WesternHead.jpg' houseName='Western Head' paragraph='Situated on a 100 m high cliff overlooking the ocean this contemporary dwelling has to withstand extreme weather. Face brick, concrete, aluminium and deep overhangs have been incorporated into the design to reduce maintenance over time'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/new-houses/townsend'>
                            <HouseCards paddingTop='25px' imageSrc='HouseCards/Townsend.jpg' houseName='Townsend' paragraph='A contemporary design with classical influences in a nature setting. The dominant materials used were stone, timber and large expanses of glass. A court yard with an outdoor fireplace and swimming pool was designed to protect against the weather conditions as well as allowing the North sun into the living areas'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/new-houses/kennet-street'>
                            <HouseCards paddingTop='0px' imageSrc='HouseCards/KennetStreet.jpg' houseName='Kennet Street' paragraph='Farmhouse design with timber, corrugated iron and stone as the main features positioned on a large property with beautiful trees. The use of hard and soft woods give this house a vernacular and rustic appeal. Large semi-double volume living areas flow out onto deep veranda spaces.'></HouseCards>
                        </Nav.Link>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/new-houses/somerset-house'>
                            <HouseCards paddingTop='10px' imageSrc='HouseCards/SomerSet.jpg' houseName='Somerset House' paragraph='Contemporary modern designed house set high on the Somerset hills overlooking False Bay. Bright airy house with a Northern aspect for light and warmth and expansive Southern views, with living areas and master bedroom on one level'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/new-houses/pezula-hills'>
                            <HouseCards paddingTop='25px' imageSrc='HouseCards/PezulaHills.jpg' houseName='Pezula Hills' paragraph='An organic contemporary design with natural stone, timber and steel elements. Numerous verandas and decks were incorporated in the design to take advantage of the 270 degree views.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/new-houses/pezula-fynbos'>
                            <HouseCards paddingTop='0px' imageSrc='HouseCards/PezulaFynbos.JPG' houseName='Pezula Fynbos' paragraph='A contemporary farm house design based on classical principles with West facing views. Wooden shutters, deep verandas and a central courtyard have been incorporated into the design to minimise late afternoon glare.'></HouseCards>
                        </Nav.Link>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/new-houses/pezula-cliffs'>
                            <HouseCards paddingTop='10px' imageSrc='HouseCards/PezulaCliffs.jpg' houseName='Pezula Cliffs' paragraph='Large spacious plantation style house with views over the Pezula cliffs to the Indian ocean. Living areas opening up onto a large central court yard to allow air flow though the spaces, as well as for a weather protected outdoor area.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/new-houses/eastern-views'>
                            <HouseCards paddingTop='25px' imageSrc='HouseCards/EasternViews.jpg' houseName='Eastern Views' paragraph='An organic contemporary design with natural stone, timber and steel elements. Numerous verandas and decks were incorporated in the design to take advantage of the 270 degree views.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='py-4 text-center'>
                        <Nav.Link href='/new-houses/andrew-avenue'>
                            <HouseCards paddingTop='0px' imageSrc='HouseCards/AndrewAve.jpg' houseName='Andrew Avenue' paragraph='A classical contemporary farm house design in an urban setting, with a deep veranda and central court yard to protect from harsh West-facing aspects. An indoor swimming pool area has been designed to take advantage of the site topography.'></HouseCards>
                        </Nav.Link>
                    </Col>
                </Row>

            </div>
        </>
    );
}

export default NewHouses;