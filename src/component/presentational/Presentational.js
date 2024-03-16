// Presentational.js
import React from 'react';
import Header from './Header/Header';
import HeroContainer from './HeroContainer';
import DestinationComponent from './Destination/DestinationComponent';
import './Header/Header.css';
import './Style.css'
import Footer from './Footer/Footer';
import { Contact } from './Contact.js';

const Presentational = () => {
  return (
    <div className='Presentation'>
      <Header />
      <HeroContainer />
      <DestinationComponent />
      <Contact />
      <Footer />
    </div>
  );
};

export default Presentational;
