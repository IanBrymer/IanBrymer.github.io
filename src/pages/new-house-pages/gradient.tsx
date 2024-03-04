import React, { useState } from 'react';
import LoadSpinner from '../../components/loadSpinner';

import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const Gradient = () => {
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
                <PageHeaders fontSize='5vw' scaleOne='1.5' scaleTwo='2.5' backgroundFontSize='10vw' height='19vw' backgroundHeader="GRADIENT" header='GRADIENT'></PageHeaders>
            </div>
            <div onLoad={handleImageLoad} className="container">
                <div className="full">
                    <img alt='p1' className='bigImages' src={require('../../pictures/NewHouses/Gradient/1.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/NewHouses/Gradient/2.png')}></img>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={4} className='pr-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/NewHouses/Gradient/3.png')}></img></Col>
                        <Col xs={12} md={4} className='mid-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/NewHouses/Gradient/4.png')}></img></Col>
                        <Col xs={12} md={4} className='pl-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/NewHouses/Gradient/5.png')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={4} className='pr-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/NewHouses/Gradient/6.jpg')}></img></Col>
                        <Col xs={12} md={4} className='mid-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/NewHouses/Gradient/7.jpg')}></img></Col>
                        <Col xs={12} md={4} className='pl-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/NewHouses/Gradient/8.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Gradient/9.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Gradient/10.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Gradient/11.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Gradient/12.jpg')}></img></Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col xs={12} md={6} className='tpr-1'>
                            <img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Gradient/13.png')} />
                        </Col>
                        <Col xs={12} md={6} className='tpl-1'>
                            <img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Gradient/14.png')} />
                        </Col>
                    </Row>
                </div>
                <br></br>
                {isLoading && <LoadSpinner />}
            </div>
        </div>
    )
}

export default Gradient;