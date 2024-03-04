import React, { useState } from 'react';
import LoadSpinner from '../../components/loadSpinner';

import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const Westernhead = () => {
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
                <PageHeaders fontSize='5vw' scaleOne='1.5' scaleTwo='2.5' backgroundFontSize='7.5vw' height='19vw' backgroundHeader="WESTERN HEAD" header='WESTERN HEAD'></PageHeaders>
            </div>
            <div onLoad={handleImageLoad} className="container">
                <div className="full">
                    <img alt='p1' className='bigImages' src={require('../../pictures/NewHouses/Westernhead/1.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/NewHouses/Westernhead/2.png')}></img>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Westernhead/3.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Westernhead/4.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1' style={{ width: '50%', height: 'auto' }} >
                            <img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Westernhead/5.jpg')} />
                        </Col>
                        <Col xs={12} md={6} style={{ width: '33%,', height: 'auto' }} className='tpl-1'>
                            <img alt='p2' className='twoColumnImage' style={{ width: '33%,', display: 'flex', right: 0 }} src={require('../../pictures/NewHouses/Westernhead/13.jpg')} />
                        </Col>
                    </Row>
                </div>
                <div className="full">
                    <img alt='p2' className='bigImages' src={require('../../pictures/NewHouses/Westernhead/6.jpg')}></img>
                </div>
                <div className="full">
                    <Row className='d-flex'>
                        <div className="w-50">
                            <Col xs={12} md={4} style={{ width: '100%', paddingBottom: '10px' }}><img alt='p2' style={{ width: '100%' }} src={require('../../pictures/NewHouses/Westernhead/7.jpg')}></img></Col>
                            <Col xs={12} md={4} style={{ width: '100%', paddingTop: '10px' }}><img alt='p2' style={{ width: '100%' }} src={require('../../pictures/NewHouses/Westernhead/8.jpg')}></img></Col>
                        </div>
                        <Col xs={12} md={4} className='w-50'><img alt='p2' className='threeColumnImage' src={require('../../pictures/NewHouses/Westernhead/9.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/NewHouses/Westernhead/11.png')}></img>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Westernhead/11.png')}></img></Col>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Westernhead/12.png')}></img></Col>
                    </Row>
                </div>
                <br></br>
                {isLoading && <LoadSpinner />}
            </div>
        </div>
    )
}

export default Westernhead;