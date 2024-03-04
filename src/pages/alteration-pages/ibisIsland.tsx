import React, { useState } from 'react';
import LoadSpinner from '../../components/loadSpinner';

import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const IbisIsland = () => {
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
                <PageHeaders fontSize='5vw' scaleOne='1.5' scaleTwo='2.5' backgroundFontSize='9.5vw' height='19vw' backgroundHeader="IBIS ISLAND" header='IBIS ISLAND'></PageHeaders>
            </div>
            <div onLoad={handleImageLoad} className="container">
                <div className="full">
                    <img alt='p1' className='bigImages' src={require('../../pictures/Alterations/IbisIsland/1.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Alterations/IbisIsland/2.png')}></img>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Alterations/IbisIsland/3.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Alterations/IbisIsland/4.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Alterations/IbisIsland/5.jpg')}></img>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1' style={{ width: '67%', height: 'auto' }} >
                            <img alt='p2' className='twoColumnImage' src={require('../../pictures/Alterations/IbisIsland/6.jpg')} />
                        </Col>
                        <Col xs={12} md={6} style={{ width: '33%', height: 'auto' }} className='tpl-1'>
                            <img alt='p2' className='twoColumnImage' style={{ width: '33%,', display: 'flex', right: 0 }} src={require('../../pictures/Alterations/IbisIsland/7.jpg')} />
                        </Col>
                    </Row>
                </div>
                <div className="full">
                    <img alt='p2' className='bigImages' src={require('../../pictures/Alterations/IbisIsland/8.jpg')}></img>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1' style={{ width: '33%', height: 'auto' }} >
                            <img alt='p2' className='twoColumnImage' src={require('../../pictures/Alterations/IbisIsland/9.png')} />
                        </Col>
                        <Col xs={12} md={6} style={{ width: '67%', height: 'auto' }} className='tpl-1'>
                            <img alt='p2' className='twoColumnImage' style={{ width: '33%,', display: 'flex', right: 0 }} src={require('../../pictures/Alterations/IbisIsland/10.png')} />
                        </Col>
                    </Row>
                </div>
                <br></br>
                {isLoading && <LoadSpinner />}
            </div>
        </div>
    )
}

export default IbisIsland;