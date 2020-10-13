import React from 'react';
import Jdoodle from './jdoodle';
import Navbar from './navbar';
import './css/navbar.css';
import Main from './main';
import Moreblock from './Moreblock';
import Footer from './Footer';

function App() {
  return (
    <>
    
    <Navbar/>
    <Main/>
    <Jdoodle/>
    <Moreblock/>
    <Footer/>

    </>
  );
}

export default App;
