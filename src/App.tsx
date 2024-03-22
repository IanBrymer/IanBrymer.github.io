import React, { useState } from 'react';
import Router from './router';
import DefaultNavbar from './components/navbar';
import Footer from './components/footer';
import LoadSpinner from './components/loadSpinner';
import './styles/Home.css'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = async () => {
    await delay(2000)
    setIsLoading(false)
  };

  function delay(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }
  return (
    // <>
    //   <div onLoad={handleImageLoad}>
    //     <div className='App'>
    //       <Router></Router>
    //       <Footer></Footer>
    //     </div>
    //   </div>
    //   {isLoading && <LoadSpinner></LoadSpinner>}
    // </>
    <>
      <div className='App-header' style={{ width: '100%', display: 'flex !important', justifyContent: 'center', alignContent: 'center' }}>
        <header style={{ margin: 'auto', width: 'fit-content' }}>
          This site is under maintenance.
        </header>
      </div>
    </>
  );
}

export default App;
