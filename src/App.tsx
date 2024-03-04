import React from 'react';
import Router from './router';
import DefaultNavbar from './components/navbar';
import Footer from './components/footer';



function App() {
  return (
    <>

      <div className='App'>
        <Router></Router>
        <Footer></Footer>
      </div>

    </>

  );
}

export default App;
