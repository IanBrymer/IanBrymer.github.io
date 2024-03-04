import React, { useState } from 'react'
import '../App.css'
import PageHeaders from '../components/pageHeaders';
import ExploreCards from '../components/exploreCards';
import { Col, Row } from 'react-bootstrap';
import TypesNavbar from '../components/typesNavbar';
import LoadSpinner from '../components/loadSpinner';
const Work = () => {
    const [isLoading, setIsLoading] = useState(true);
    const handleImageLoad = async () => {
        await delay(2000)
        setIsLoading(false)
    };

    function delay(milliseconds: number) {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    }
    return (
        <>
            <div className="App">
                <div className='OtherPageheader'>
                    <TypesNavbar></TypesNavbar>
                    <PageHeaders fontSize='30px' scaleOne='1' scaleTwo='5.5' backgroundFontSize='120px' height='80vh' backgroundHeader="EXPLORE OUR WORK" header='EXPLORE OUR WORK'></PageHeaders>
                </div>
            </div>
            <div onLoad={handleImageLoad} className='p-5'>
                <Row className=''>
                    <Col className='rowCol'>
                        <ExploreCards text='New Houses' paddingBottom='0px' paddingTop='25px' immageSrc='NewHouses.png' to='new-houses'></ExploreCards>
                        <ExploreCards text='Alterations' paddingBottom='10px' paddingTop='0px' immageSrc='Alterations.png' to='/alterations'></ExploreCards>
                        <ExploreCards text='Small' paddingBottom='0px' paddingTop='10px' immageSrc='Small.png' to='/small'></ExploreCards>
                    </Col>
                    <Col className='rowCol'>
                        <ExploreCards text='Commercial' paddingBottom='0px' paddingTop='20px' immageSrc='Commercial.png' to='/commercial'></ExploreCards>
                        <ExploreCards text='Educational' paddingBottom='0px' paddingTop='30px' immageSrc='Educational.png' to='/educational'></ExploreCards>
                    </Col>
                </Row>
                {isLoading && <LoadSpinner />}
            </div>
        </>

    );
}

export default Work;