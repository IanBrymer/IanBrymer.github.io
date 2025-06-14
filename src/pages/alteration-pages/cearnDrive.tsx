import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import BackTo from '../../components/backTo';

const CearnDrive = () => {
    return (
        <div className="App">
            <BackTo text='Back To Alterations' link='/alterations'></BackTo>
            <div className='OtherPageheader'>
                <TypesNavbar></TypesNavbar>
                <PageHeaders fontSize='5vw' scaleOne='1.5' scaleTwo='2.5' backgroundFontSize='8.5vw' height='19vw' backgroundHeader="CEARN DRIVE" header='CEARN DRIVE'></PageHeaders>
            </div>
            <div className="container">
                <div className="full">
                    <img alt='p2' loading='lazy' className='plans' src={require('../../pictures/Alterations/CearnDrive/1.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' loading='lazy' className='plans' src={require('../../pictures/Alterations/CearnDrive/2.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' loading='lazy' className='plans' src={require('../../pictures/Alterations/CearnDrive/3.png')}></img>
                </div>
                <br></br>

            </div>
        </div>
    )
}

export default CearnDrive;