import React, { useState } from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import HouseCards from '../components/houseCards';
import TypesNavbar from '../components/typesNavbar';
import PageHeaders from '../components/pageHeaders';
import LoadSpinner from '../components/loadSpinner';

import '../App.css'
const Alterations = () => {
    const [isLoading, setIsLoading] = useState(true);
    const handleImageLoad = async () => {
        await delay(1500)
        setIsLoading(false)
    };

    function delay(milliseconds: number) {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    }

    return (
        <>
            <script type="module" src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/helix.js"></script>
            < div className="App" >
                <div className='OtherPageheader'>
                    <TypesNavbar></TypesNavbar>
                    <PageHeaders fontSize='2rem' scaleOne='1' scaleTwo='1.5' backgroundFontSize='11rem' height='400px' backgroundHeader="ALTERATIONS" header='EXPLORE A FEW OF OUR ALTERATIONS'></PageHeaders>
                    <Row className='px-2' style={{ height: 'min-content', marginBottom: '20px', width: '95%' }}>
                        <Col >
                            <p style={{ textAlign: 'left' }} className='paragraphs'>Brymer and Associates has worked on more than 100 alteration and renovation projects over the years. Working on these projects is a passion of ours and we have developed a good understanding of the building and environmental conditions specific to each site and location.</p>
                        </Col>
                    </Row>
                </div>
            </div >
            <div onLoad={handleImageLoad} className='pb-5 pt-3' style={{ margin: 'auto' }}>
                <Row className='w-100 d-flex justify-content-around' style={{ maxWidth: '1440px', margin: 'auto' }}>
                    <Col>
                        <Nav.Link href='/alterations/ibis-island'>
                            <HouseCards paddingTop='35px' imageSrc='HouseCards/IbisIsland.jpg' houseName='Ibis Island' paragraph='The original house was extensively altered, upgraded and modernized to create flow by connecting the various living spaces and to take full advantage of the 360 degree views afforded to Island living.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href='/alterations/hillview-crescent'>
                            <HouseCards paddingTop='50px' imageSrc='HouseCards/HillViewCrescent.jpg' houseName='Hillview Crescent' paragraph='The existing steeply pitched roof was opened up with contemporary dormers to allow for additional space and light to the first floor areas. Concrete slabs were introduced to link existing spaces and the ground floor was re-designed to create an open-plan contemporary living space.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href='/alterations/horn-drive'>
                            <HouseCards paddingTop='0px' imageSrc='HouseCards/HornDrive.jpg' houseName='Horn Drive' paragraph='This alteration entailed removing most of the existing walls to create an open, seamless contemporary living space. The second story, utilizing roof space, reduces the scale of the building and compliments its environmental setting. Black aluminium and steel internal windows and doors are a feature of this simple, elegant and contemporary family home.'></HouseCards>
                        </Nav.Link>
                    </Col>
                </Row>
                <Row className='w-100 d-flex justify-content-between'>
                    <Col>
                        <Nav.Link href='/alterations/cearn-drive'>
                            <HouseCards paddingTop='20px' imageSrc='HouseCards/CearnDrive.png' houseName='Cearn Drive' paragraph='The alteration paid homage to this beautiful old classical home with teak windows and doors and traditional slate roof. All additions copied the original style and detailing to enhance the living spaces without detracting from the elegance of this listed building.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href='/alterations/red-bridge-road'>
                            <HouseCards paddingTop='20px' imageSrc='HouseCards/RedBridgeRoad.png' houseName='Red Bridge Road' paragraph='The extensive additions and alterations to this original classical home were done to maintain the sense of style but modernise the spaces and open up the house to the beautiful Knysna river views, creating a modern classical-contemporary home.'></HouseCards>
                        </Nav.Link>
                    </Col>
                </Row>
                {isLoading && <LoadSpinner></LoadSpinner>}
            </div>
        </>
    );
}

export default Alterations;