import React, { useState } from 'react';
import LoadSpinner from '../../components/loadSpinner';

import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const Somerset = () => {
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
                <PageHeaders fontSize='5vw' scaleOne='1.5' scaleTwo='2.5' backgroundFontSize='6.2vw' height='19vw' backgroundHeader="SOMERSET HOUSE" header='SOMERSET HOUSE'></PageHeaders>
            </div>
            <div onLoad={handleImageLoad} className="container">
                <div className="full">
                    <img alt='p1' className='bigImages' src={require('../../pictures/NewHouses/Somerset/1.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/NewHouses/Somerset/2.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/NewHouses/Somerset/3.png')}></img>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Somerset/4.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Somerset/5.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Somerset/6.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Somerset/7.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <img alt='p2' className='bigImages' src={require('../../pictures/NewHouses/Somerset/8.jpg')}></img>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Somerset/9.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Somerset/10.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Somerset/11.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Somerset/12.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row style={{ width: '100%' }}>
                        <Col xs={12} md={6} style={{ width: '60%', height: 'auto', zIndex: '1000', marginRight: '10px', paddingLeft: '0', paddingRight: '0' }} >
                            <img alt='p1' className='image-cropped-calc2' src={require('../../pictures/NewHouses/Somerset/13.jpg')} />
                        </Col>
                        <Col style={{ width: '30%,', height: 'auto', zIndex: '1000', marginLeft: '10px', paddingRight: '0', paddingLeft: '0' }}>
                            <img alt='p2' style={{ top: '0', width: '100%', height: '450px', objectFit: 'cover' }} src={require('../../pictures/NewHouses/Somerset/14.jpg')} />
                        </Col>
                    </Row>
                </div>
                <div className="full">
                    <div className="image-box">
                        <img alt='p1' className='image-cropped-calc' src={require('../../pictures/NewHouses/Somerset/15.jpg')}></img>
                    </div>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/NewHouses/Somerset/16.png')}></img>
                </div>
                <br></br>
                {isLoading && <LoadSpinner />}
            </div>
        </div>
    )
}

export default Somerset;