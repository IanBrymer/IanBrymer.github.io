import React, { useState } from 'react';
import LoadSpinner from '../../components/loadSpinner';

import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const Swartvlei = () => {
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
                <PageHeaders fontSize='1.8rem' scaleOne='1.5rem' scaleTwo='2.5rem' backgroundFontSize='10rem' height='25vh' backgroundHeader="SWARTVLEI" header='SWARTVLEI'></PageHeaders>
            </div>
            <div className="full">
                <img alt='p1' className='bigImages' src={require('../../pictures/NewHouses/Swartvleihouse/1.jpg')}></img>
            </div>
            <div className="full">
                <img alt='p2' className='plans' src={require('../../pictures/NewHouses/Swartvleihouse/2.png')}></img>
            </div>
            <div className="full">
                <img alt='p2' className='plans' src={require('../../pictures/NewHouses/Swartvleihouse/3.png')}></img>
            </div>
            <div className="full">
                <Row className='twoRow'>
                    <Col className='p-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Swartvleihouse/4.jpg')}></img></Col>
                    <Col className='p-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Swartvleihouse/5.jpg')}></img></Col>
                </Row>
            </div>
            <div className="full">
                <Row className='twoRow'>
                    <Col className='p-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Swartvleihouse/6.jpg')}></img></Col>
                    <Col className='p-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/Swartvleihouse/7.jpg')}></img></Col>
                </Row>
            </div>
            <div className="full">
                <img alt='p2' style={{ width: '100%' }} src={require('../../pictures/NewHouses/Swartvleihouse/8.jpg')}></img>
            </div>
            <div className="full">
                <img alt='p2' style={{ width: '100%' }} src={require('../../pictures/NewHouses/Swartvleihouse/9.jpg')}></img>
            </div>
            <div className="full">
                <img alt='p2' className='plans' src={require('../../pictures/NewHouses/Swartvleihouse/10.png')}></img>
            </div>
            <div className="full">
                <img alt='p2' className='plans' src={require('../../pictures/NewHouses/Swartvleihouse/11.png')}></img>
            </div>
            {isLoading && <LoadSpinner></LoadSpinner>}
        </div>
    )
}

export default Swartvlei;