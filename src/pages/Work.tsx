import React, { useEffect, useState } from 'react'
import '../App.css'
import PageHeaders from '../components/pageHeaders';
import ExploreCards from '../components/exploreCards';
import { Col, Row } from 'react-bootstrap';
import TypesNavbar from '../components/typesNavbar';
const Work = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 600;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="App">
                <div className='OtherPageheader'>
                    <TypesNavbar></TypesNavbar>
                    {
                        width < breakpoint ? <PageHeaders fontSize='6vw' scaleOne='1' scaleTwo='6.5' backgroundFontSize='8vw' height='80vh' backgroundHeader="EXPLORE OUR WORK" header='EXPLORE OUR WORK'></PageHeaders> : <PageHeaders fontSize='3vw' scaleOne='1' scaleTwo='5.5' backgroundFontSize='8vw' height='80vh' backgroundHeader="EXPLORE OUR WORK" header='EXPLORE OUR WORK'></PageHeaders>
                    }
                </div>
            </div>
            <div className='padding-background'>

                {
                    width < breakpoint ?
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
                        :
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
                }
            </div>
        </>

    );
}

export default Work;