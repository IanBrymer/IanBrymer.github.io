import React, { useState } from 'react';
import LoadSpinner from '../../components/loadSpinner';

import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const PezulaCliffs = () => {
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
                <PageHeaders fontSize='5vw' scaleOne='1.5' scaleTwo='2.5' backgroundFontSize='7.5vw' height='19vw' backgroundHeader="PEZULA CLIFFS" header='PEZULA CLIFFS'></PageHeaders>
            </div>
            <div onLoad={handleImageLoad} className="container">
                <div className="full">
                    <div className="image-box">
                        <img alt='p1' className='image-cropped-calc' src={require('../../pictures/NewHouses/PezulaCliffs/1.jpg')}></img>
                    </div>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/NewHouses/PezulaCliffs/2.png')}></img>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaCliffs/3.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaCliffs/4.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row className='threeRow'>
                        <Col className='p-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/NewHouses/PezulaCliffs/5.jpg')}></img></Col>
                        <Col className='p-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/NewHouses/PezulaCliffs/6.jpg')}></img></Col>
                        <Col className='p-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/NewHouses/PezulaCliffs/7.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaCliffs/8.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaCliffs/9.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row className='threeRow'>
                        <Col className='p-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/NewHouses/PezulaCliffs/10.jpg')}></img></Col>
                        <Col className='p-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/NewHouses/PezulaCliffs/11.jpg')}></img></Col>
                        <Col className='p-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/NewHouses/PezulaCliffs/12.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaCliffs/13.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaCliffs/14.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='vertical-box' style={{ width: '34%', height: 'auto', paddingRight: '10px' }} >
                            <img alt='p2' style={{ marginRight: '25px' }} className='vertical-cropped-calc' src={require('../../pictures/NewHouses/PezulaCliffs/15.jpg')} />
                        </Col>
                        <Col style={{ width: '100%,', height: 'auto' }} className='tpl-1'>
                            <img alt='p2' className='twoColumnImage' style={{ display: 'flex', right: 0 }} src={require('../../pictures/NewHouses/PezulaCliffs/16.jpg')} />
                        </Col>
                    </Row>
                </div>
                <div className="full">
                    <div className="image-box">
                        <img alt='p1' className='image-cropped-calc' src={require('../../pictures/NewHouses/PezulaCliffs/17.jpg')}></img>
                    </div>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/NewHouses/PezulaCliffs/18.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/NewHouses/PezulaCliffs/19.png')}></img>
                </div>
                <br></br>
                {isLoading && <LoadSpinner />}
            </div>
        </div>
    )
}

export default PezulaCliffs;