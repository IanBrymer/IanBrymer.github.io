import React, { useState } from 'react';
import LoadSpinner from '../../components/loadSpinner';

import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import BackTo from '../../components/backTo';

const RedBridgeRoad = () => {
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
                <PageHeaders fontSize='4vw' scaleOne='1.5' scaleTwo='4.0' backgroundFontSize='6vw' height='19vw' backgroundHeader="RED BRIDGE ROAD" header='RED BRIDGE ROAD'></PageHeaders>
            </div>
            <div onLoad={handleImageLoad} className="container">
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Alterations/RedBridgeRoad/1.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Alterations/RedBridgeRoad/2.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Alterations/RedBridgeRoad/3.png')}></img>
                </div>
                <br></br>
                {isLoading && <LoadSpinner />}
            </div>
        </div>
    )
}

export default RedBridgeRoad;