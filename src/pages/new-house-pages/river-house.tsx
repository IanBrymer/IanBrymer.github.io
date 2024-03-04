import React, { useState } from 'react';
import LoadSpinner from '../../components/loadSpinner';
import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const RiverHouse = () => {
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
            <div className="myContainer">
                <BackTo text='Back To New Houses' link='/new-houses'></BackTo>
                <div className='OtherPageheader'>
                    <TypesNavbar></TypesNavbar>
                    <PageHeaders fontSize='1.8rem' scaleOne='1.5rem' scaleTwo='2.5rem' backgroundFontSize='10rem' height='25vh' backgroundHeader="RIVER HOUSE" header='RIVER HOUSE'></PageHeaders>
                </div>
                <div onLoad={handleImageLoad} className="container">
                    <div className="full">
                        <img alt='p1' className='bigImages' src={require('../../pictures/NewHouses/RiverHouse/1.jpg')}></img>
                    </div>
                    <div className="full">
                        <img alt='p2' className='plans' src={require('../../pictures/NewHouses/RiverHouse/2.png')}></img>
                    </div>
                    <div className="full">
                        <Row>
                            <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/RiverHouse/3.jpg')}></img></Col>
                            <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/RiverHouse/4.jpg')}></img></Col>
                        </Row>
                    </div>
                    <div className="full">
                        <Row>
                            <Col xs={12} md={6} className='tpr-1 riverHouseWide'><img alt='p2' className='twoColumnImage imgForRiverHouse' src={require('../../pictures/NewHouses/RiverHouse/5.jpg')}></img></Col>
                            <Col xs={12} md={6} className='tpl-1 riverHouseNarrow'><img alt='p2' className='twoColumnImage imgForRiverHouse' src={require('../../pictures/NewHouses/RiverHouse/6.jpg')}></img></Col>
                        </Row>
                    </div>
                    <div className="full">
                        <Row>
                            <Col xs={12} md={4} className='pr-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/NewHouses/RiverHouse/7.jpg')}></img></Col>
                            <Col xs={12} md={4} className='mid-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/NewHouses/RiverHouse/8.jpg')}></img></Col>
                            <Col xs={12} md={4} className='pl-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/NewHouses/RiverHouse/9.jpg')}></img></Col>
                        </Row>
                    </div>
                    <div className="full">
                        <img alt='p2' className='plans' src={require('../../pictures/NewHouses/RiverHouse/10.png')}></img>
                    </div>
                    <br></br>
                    {isLoading && <LoadSpinner></LoadSpinner>}
                </div>
            </div>
        </div>
    )
}

export default RiverHouse;
