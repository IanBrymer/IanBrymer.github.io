import React, { useEffect, useState } from 'react'
import '../App.css'
import PageHeaders from '../components/pageHeaders';
import ExploreCards from '../components/exploreCards';
import { Col, Nav, Row } from 'react-bootstrap';
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
            <div className='p-5'>
                <Row className=''>
                    <Col className='py-2'>
                        <ExploreCards text='New Houses' paddingBottom='0px' paddingTop='25px' immageSrc='NewHouses.png' to='new-houses'></ExploreCards>
                    </Col>
                    <Col className='py-2'>
                        <ExploreCards text='Alterations' paddingBottom='10px' paddingTop='0px' immageSrc='Alterations.png' to='/alterations'></ExploreCards>
                    </Col>
                </Row>
                <Row className=''>
                    <Col className='py-2'>
                        <ExploreCards text='Small Builds' paddingBottom='0px' paddingTop='10px' immageSrc='Small.png' to='/small'></ExploreCards>
                    </Col>
                    <Col className='py-2'>
                        <ExploreCards text='Commercial' paddingBottom='0px' paddingTop='20px' immageSrc='Commercial.png' to='/commercial'></ExploreCards>
                    </Col>
                </Row>
                <Row className='w-100' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Col className='py-2' style={{ maxWidth: '676px' }}>
                        <Nav.Link className='h-100' href='/educational'>
                            <Row className='justify-content-center'>
                                <Col xs={12} sm={8} md={6} className='py-4 text-center'><img className='exploreRowCard' alt='Educational' src={require(`../pictures/explore/Educational.png`)}></img></Col>
                                <Col className='pt-2 d-flex justify-content-center align-items-center'><p className='exploreP' style={{ paddingBottom: '0px', paddingTop: '30px', width: '276px' }}>Educational</p></Col>
                            </Row>
                        </Nav.Link>
                    </Col>
                </Row>
            </div>
        </>

    );
}

export default Work;