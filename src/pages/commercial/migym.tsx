import React, { useState } from 'react';
import LoadSpinner from '../../components/loadSpinner';

import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const MiGym = () => {
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
            <BackTo text='Back To Commercial' link='/commercial'></BackTo>
            <div className='OtherPageheader'>
                <TypesNavbar></TypesNavbar>
                <PageHeaders fontSize='5vw' scaleOne='2.5' scaleTwo='2.5' backgroundFontSize='9.5vw' height='22vw' backgroundHeader="MIGYM" header='MiGym'></PageHeaders>
            </div>
            <div onLoad={handleImageLoad} className="container">
                <div className="full">
                    <img alt='p1' className='bigImages' src={require('../../pictures/Commercial/Migym/1.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Commercial/Migym/2.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Commercial/Migym/3.png')}></img>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpl-1' style={{ width: 'auto', height: 'auto' }} >
                            <img alt='p2' style={{ width: 'auto', height: '400px' }} className='bigImages' src={require('../../pictures/Commercial/Migym/4.jpg')}></img>
                        </Col>
                        <Col style={{ width: 'auto', height: 'auto' }} className='tpl-1'>
                            <img alt='p2' style={{ height: '400px' }} className='bigImages' src={require('../../pictures/Commercial/Migym/5.jpg')}></img>
                        </Col>
                        <Col style={{ width: 'auto', height: 'auto' }} className='tpl-1'>
                            <img alt='p2 ' style={{ width: 'auto', height: '400px' }} className='bigImages' src={require('../../pictures/Commercial/Migym/6.jpg')}></img>
                        </Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='vertical-box' style={{ width: '40%', height: 'auto', marginRight: '10px' }} >
                            <img alt='p2' className='vertical-cropped-calc' src={require('../../pictures/Commercial/Migym/7.jpg')} />
                        </Col>
                        <Col style={{ width: '100%,', height: 'auto', marginLeft: '10px' }} className='tpl-1'>
                            <img alt='p2' className='twoColumnImage' style={{ display: 'flex', right: 0 }} src={require('../../pictures/Commercial/Migym/8.jpg')} />
                        </Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpl-1' style={{ width: '40%', height: 'auto' }} >
                            <img alt='p2' className='bigImages' src={require('../../pictures/Commercial/Migym/9.jpg')}></img>
                        </Col>
                        <Col style={{ width: '100%,', height: 'auto' }} className='tpl-1'>
                            <img alt='p2' className='bigImages' src={require('../../pictures/Commercial/Migym/10.jpg')}></img>
                        </Col>
                        <Col style={{ width: '100%,', height: 'auto' }} className='tpl-1'>
                            <img alt='p2' className='bigImages' src={require('../../pictures/Commercial/Migym/11.jpg')}></img>
                        </Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpl-1' style={{ width: 'auto', height: 'auto' }} >
                            <img alt='p2' style={{ width: 'auto', height: '400px' }} className='bigImages' src={require('../../pictures/Commercial/Migym/12.jpg')}></img>
                        </Col>
                        <Col style={{ width: 'auto', height: 'auto' }} className='tpl-1'>
                            <img alt='p2' style={{ width: '100%', height: '400px' }} className='bigImages' src={require('../../pictures/Commercial/Migym/13.jpg')}></img>
                        </Col>
                        <Col style={{ width: 'auto', height: 'auto' }} className='tpl-1'>
                            <img alt='p2 ' style={{ width: 'auto', height: '400px' }} className='bigImages' src={require('../../pictures/Commercial/Migym/14.jpg')}></img>
                        </Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Commercial/Migym/15.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Commercial/Migym/16.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <img alt='p1' className='plans' src={require('../../pictures/Commercial/Migym/17.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Commercial/Migym/18.png')}></img>
                </div>
                <br></br>
                {isLoading && <LoadSpinner />}
            </div>
        </div>
    )
}

export default MiGym;