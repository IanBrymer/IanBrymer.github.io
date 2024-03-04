import React, { useState } from 'react';
import LoadSpinner from '../../components/loadSpinner';

import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import BackTo from '../../components/backTo';

//src\pictures\Commercial\VehicleTesting\1.jpg

const VehicleTesting = () => {
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
                <PageHeaders fontSize='3.5vw' scaleOne='1.3' scaleTwo='4' backgroundFontSize='5vw' height='20vw' backgroundHeader="VEHICLE TESTING CENTER" header='VEHICLE TESTING CENTER'></PageHeaders>
            </div>
            <div onLoad={handleImageLoad} className="container">
                <div className="full">
                    <img alt='p1' className='plans' src={require('../../pictures/Commercial/VehicleTest/1.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Commercial/VehicleTest/2.png')}></img>
                </div>
                <div className="full">
                    <img alt='p1' className='plans' src={require('../../pictures/Commercial/VehicleTest/3.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Commercial/VehicleTest/4.png')}></img>
                </div>
                <br></br>
                {isLoading && <LoadSpinner />}
            </div>
        </div>
    )
}

export default VehicleTesting;