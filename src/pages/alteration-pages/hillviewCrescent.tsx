import React, { useState } from 'react';
import LoadSpinner from '../../components/loadSpinner';
import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

//src\pictures\Alterations\HillviewCrescent\1.jpg

const HillviewCrescent = () => {
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
                <PageHeaders fontSize='4vw' scaleOne='1.5' scaleTwo='4' backgroundFontSize='5.5vw' height='20vw' backgroundHeader="HILLVIEW CRESCENT" header='HILLVIEW CRESCENT'></PageHeaders>
            </div>
            <div onLoad={handleImageLoad} className="container">
                <div className="full">
                    <img alt='p1' className='bigImages' src={require('../../pictures/Alterations/HillviewCrescent/1.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Alterations/HillviewCrescent/2.png')}></img>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Alterations/HillviewCrescent/3.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Alterations/HillviewCrescent/4.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Alterations/HillviewCrescent/5.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Alterations/HillviewCrescent/6.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={4} className='pr-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/Alterations/HillviewCrescent/7.jpg')}></img></Col>
                        <Col xs={12} md={4} className='mid-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/Alterations/HillviewCrescent/8.jpg')}></img></Col>
                        <Col xs={12} md={4} className='pl-1'><img alt='p2' className='threeColumnImage' src={require('../../pictures/Alterations/HillviewCrescent/9.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Alterations/HillviewCrescent/10.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Alterations/HillviewCrescent/11.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Alterations/HillviewCrescent/12.png')}></img></Col>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Alterations/HillviewCrescent/13.png')}></img></Col>
                    </Row>
                </div>
                <br></br>
                {isLoading && <LoadSpinner />}
            </div>
        </div>
    )
}

export default HillviewCrescent;