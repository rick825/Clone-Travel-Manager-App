import React from 'react';
import Offer from './Offer';
import './Destination.css';
import '../Style.css';
import BestPlaces from './BestPlaces';


const DestinationComponent = () => {
  return (
    <div className='destination'>
        <Offer />
        <BestPlaces />
    </div>
  )
}

export default DestinationComponent;