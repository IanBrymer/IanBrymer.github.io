import React, { useState } from 'react';
import LoadSpinner from '../../components/loadSpinner';

import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';


const HornDrive = () => {
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
            <BackTo text='Back To Alterations' link='/alterations'></BackTo>
            <div className='OtherPageheader'>
                <TypesNavbar></TypesNavbar>
                <PageHeaders fontSize='4vw' scaleOne='1.5' scaleTwo='2.5' backgroundFontSize='9vw' height='20vw' backgroundHeader="HORN DRIVE" header='HORN DRIVE'></PageHeaders>
            </div>
            <div onLoad={handleImageLoad} className="container">
                <div className="full">
                    <img alt='p1' className='bigImages' src={require('../../pictures/Alterations/HornDrive/1.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Alterations/HornDrive/2.png')}></img>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Alterations/HornDrive/3.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Alterations/HornDrive/4.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1' style={{ width: '67%', height: 'auto' }} >
                            <img alt='p2' className='twoColumnImage' src={require('../../pictures/Alterations/HornDrive/5.jpg')} />
                        </Col>
                        <Col xs={12} md={6} style={{ width: '33%', height: 'auto' }} className='tpl-1'>
                            <img alt='p2' className='twoColumnImage' style={{ width: '33%,', display: 'flex', right: 0 }} src={require('../../pictures/Alterations/HornDrive/6.jpg')} />
                        </Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1' style={{ width: '20%', height: 'auto' }} >
                            <img alt='p2' className='twoColumnImage' src={require('../../pictures/Alterations/HornDrive/7.jpg')} />
                        </Col>
                        <Col xs={12} md={6} style={{ width: '40%', height: 'auto' }} className='tpl-1'>
                            <img alt='p2' className='twoColumnImage' style={{ width: '33%,', display: 'flex', right: 0 }} src={require('../../pictures/Alterations/HornDrive/8.jpg')} />
                        </Col>
                        <Col xs={12} md={6} style={{ width: '40%', height: 'auto' }} className='tpl-1'>
                            <img alt='p2' className='twoColumnImage' style={{ width: '33%,', display: 'flex', right: 0 }} src={require('../../pictures/Alterations/HornDrive/9.jpg')} />
                        </Col>
                    </Row>
                </div>
                <div className="full">
                    <img alt='p1' className='plans' src={require('../../pictures/Alterations/HornDrive/10.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Alterations/HornDrive/11.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Alterations/HornDrive/12.png')}></img>
                </div>
                <br></br>
                {isLoading && <LoadSpinner />}
            </div>
        </div>
    )
}

export default HornDrive;