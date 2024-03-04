import React, { useState } from 'react';
import LoadSpinner from '../../components/loadSpinner';

import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const Noetzie = () => {
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
            <BackTo text='Back To Small Builds' link='/small'></BackTo>
            <div className='OtherPageheader'>
                <TypesNavbar></TypesNavbar>
                <PageHeaders fontSize='3vw' scaleOne='2.2' scaleTwo='2' backgroundFontSize='10vw' height='20vw' backgroundHeader="Noetzie" header='Noetzie'></PageHeaders>
            </div>
            <div onLoad={handleImageLoad} className="container">
                <div className="full">
                    <img alt='p2' className='bigImages' src={require('../../pictures/Small/Noetzie/1.jpg')}></img>
                </div>
                <div className="full">
                    <Row style={{ height: 'min-content' }}>
                        <Col xs={12} md={6} className='tpr-1'>
                            <img alt='p2' style={{ height: 'auto' }} className='twoColumnImage' src={require('../../pictures/Small/Noetzie/2.png')}></img>
                            <img alt='p2' style={{ height: 'auto', paddingTop: '20px' }} className='twoColumnImage' src={require('../../pictures/Small/Noetzie/3.jpg')}></img>
                        </Col>
                        <Col xs={12} md={6} style={{ height: 'auto', maxHeight: '881px' }} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Small/Noetzie/4.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Small/Noetzie/5.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Small/Noetzie/6.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Small/Noetzie/7.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Small/Noetzie/8.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <img alt='p2' className='bigImages' src={require('../../pictures/Small/Noetzie/9.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Small/Noetzie/10.png')}></img>
                </div>
                <br></br>
                {isLoading && <LoadSpinner />}
            </div>
        </div>
    )
}

export default Noetzie;