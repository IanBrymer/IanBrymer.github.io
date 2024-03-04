import React, { useState } from 'react';
import LoadSpinner from '../../components/loadSpinner';

import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

//src\pictures\Commercial\RairPlett\1.jpg

const RairPlett = () => {
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
                <PageHeaders fontSize='4vw' scaleOne='3' scaleTwo='4' backgroundFontSize='5vw' height='20vw' backgroundHeader="RAIR PLETT" header='RAIR PLETT'></PageHeaders>
            </div>
            <div onLoad={handleImageLoad} className="container">
                <div className="full">
                    <img alt='p1' className='bigImages' src={require('../../pictures/Commercial/RairPlett/1.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Commercial/RairPlett/2.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Commercial/RairPlett/3.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Commercial/RairPlett/3.png')}></img>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpl-1' style={{ width: 'auto', height: 'auto' }} >
                            <img alt='p2' style={{ width: '100%', height: '100%' }} className='bigImages' src={require('../../pictures/Commercial/RairPlett/5.jpg')}></img>
                        </Col>
                        <Col style={{ width: 'auto', height: 'auto' }} className='tpl-1'>
                            <img alt='p2' style={{ width: '100%', height: '100%' }} className='bigImages' src={require('../../pictures/Commercial/RairPlett/6.jpg')}></img>
                        </Col>
                    </Row>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Commercial/RairPlett/7.png')}></img>
                </div>
                <div className="full">
                    <img alt='p1' className='bigImages' src={require('../../pictures/Commercial/RairPlett/8.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Commercial/RairPlett/9.png')}></img>
                </div>
                <br></br>
                {isLoading && <LoadSpinner />}
            </div>
        </div>
    )
}

export default RairPlett;