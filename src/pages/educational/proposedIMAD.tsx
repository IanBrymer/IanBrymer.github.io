import React, { useState } from 'react';
import LoadSpinner from '../../components/loadSpinner';

import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const ProposedOakhillIMAD = () => {
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
            <BackTo text='Back To Educational Builds' link='/educational'></BackTo>
            <div className='OtherPageheader'>
                <TypesNavbar></TypesNavbar>
                <PageHeaders fontSize='3vw' scaleOne='0.92' scaleTwo='2.5' backgroundFontSize='7vw' height='19vw' backgroundHeader="PROPOSED IMAD CENTER" header='PROPOSED IMAD CENTER'></PageHeaders>
            </div>
            <div onLoad={handleImageLoad} className="container">
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Educational/ProposedOakhillIMAD/1.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Educational/ProposedOakhillIMAD/2.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Educational/ProposedOakhillIMAD/3.png')}></img>
                </div>
                <br></br>
                {isLoading && <LoadSpinner />}
            </div>
        </div>
    )
}

export default ProposedOakhillIMAD;