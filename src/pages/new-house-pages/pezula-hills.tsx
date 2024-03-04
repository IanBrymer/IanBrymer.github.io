import React, { useState } from 'react';
import LoadSpinner from '../../components/loadSpinner';

import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const PezulaHills = () => {
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
            <BackTo text='Back To New Houses' link='/new-houses'></BackTo>
            <div className='OtherPageheader'>
                <TypesNavbar></TypesNavbar>
                <PageHeaders fontSize='1.8rem' scaleOne='1.5rem' scaleTwo='2.5rem' backgroundFontSize='10rem' height='25vh' backgroundHeader="PEZULA HILLS" header='PEZULA HILLS'></PageHeaders>
            </div>
            <div className="full">
                <img alt='p1' className='bigImages' src={require('../../pictures/NewHouses/PezulaHills/p1.jpg')}></img>
            </div>
            <div className="full">
                <img alt='p2' className='plans' src={require('../../pictures/NewHouses/PezulaHills/p2.png')}></img>
            </div>
            <div className="full">
                <Row className='threeRow'>
                    <Col className='p-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/NewHouses/PezulaHills/p3.jpg')}></img></Col>
                    <Col className='p-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/NewHouses/PezulaHills/p4.jpg')}></img></Col>
                    <Col className='p-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/NewHouses/PezulaHills/p5.jpg')}></img></Col>
                </Row>
            </div>
            <div className="full">
                <Row className='twoRow'>
                    <Col className='p-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaHills/p6.jpg')}></img></Col>
                    <Col className='p-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaHills/p7.jpg')}></img></Col>
                </Row>
            </div>
            <div className="full">
                <Row className='twoRow'>
                    <Col className='p-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaHills/p8.jpg')}></img></Col>
                    <Col className='p-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaHills/p9.jpg')}></img></Col>
                </Row>
            </div>
            <div className="full">
                <img alt='p2' className='bigImages' src={require('../../pictures/NewHouses/PezulaHills/p10.jpg')}></img>
            </div>
            <div className="full">
                <img alt='p2' className='bigImages' src={require('../../pictures/NewHouses/PezulaHills/p11.jpg')}></img>
            </div>
            <div className="full">
                <Row className='twoRow'>
                    <Col className='p-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaHills/p12.png')}></img></Col>
                    <Col className='p-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaHills/p13.png')}></img></Col>
                </Row>
            </div>
            {isLoading && <LoadSpinner></LoadSpinner>}
        </div>
    )
}

export default PezulaHills;