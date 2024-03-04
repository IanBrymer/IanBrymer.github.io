import React, { useState } from 'react';
import LoadSpinner from '../../components/loadSpinner';

import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const PezulaFynbos = () => {
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
                <PageHeaders fontSize='5vw' scaleOne='1' scaleTwo='2.5' backgroundFontSize='10vw' height='19vw' backgroundHeader="PEZULA FYNBOS" header='PEZULA FYNBOS'></PageHeaders>
            </div>
            <div onLoad={handleImageLoad} className="container">
                <div className="full">
                    <img alt='p1' className='bigImages' src={require('../../pictures/NewHouses/PezulaFynbos/1.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/NewHouses/PezulaFynbos/2.png')}></img>
                </div>
                <div className="full">
                    <Row className='twoRow'>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaFynbos/3.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaFynbos/4.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <img alt='p2' className='bigImages' src={require('../../pictures/NewHouses/PezulaFynbos/5.jpg')}></img>
                </div>
                <div className="full">
                    <Row className='twoRow'>
                        <Col xs={12} md={6} className='p-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaFynbos/6.jpg')}></img></Col>
                        <Col xs={12} md={6} className='p-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaFynbos/7.png')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/NewHouses/PezulaFynbos/8.png')}></img>
                </div>
                {isLoading && <LoadSpinner></LoadSpinner>}
            </div>
        </div>

    )
}

export default PezulaFynbos;