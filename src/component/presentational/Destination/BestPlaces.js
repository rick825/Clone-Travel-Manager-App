import React from 'react'
import './bestPlaces.css';

import place1 from '../../../img/place1.jpg';
import place2 from '../../../img/place2.jpg';
import place3 from '../../../img/place3.jpg';
import place4 from '../../../img/place4.jpg';
import place5 from '../../../img/place5.jpg';

const BestPlaces = () => {
  return <>
     <div class="best-places">
        <div class="bp-head">
          <h2>Top Destination to <span>Visit</span></h2>
        </div>
        <div class="bp-bot">
          <div class="travel-card">
            <img src={place1} alt="Destination 1"/>
            <h2>Burj Khalifa</h2>
            <p>Explore the Giant Burj Khalifa of Dubai with our exclusive travel package.</p>
            <button onclick="showburj()">Learn More</button>
        </div>
    
        <div class="travel-card">
            <img src={place2} alt="Destination 2"/>
            <h2>Burj Al Arab</h2>
            <p>Experience the vibrant culture of Dubai with our guided tours.</p>
            <button onclick="showarab()">Learn More</button>
        </div>

        <div class="travel-card">
          <img src={place3} alt="Destination 2" />
          <h2>Museum of the future (Dubai Museum)</h2>
          <p>Explore the DUbai Museam of Dubai with our exclusive travel package.</p>
          <button onclick="showmus()">Learn More</button>
      </div>

      <div class="travel-card">
        <img src={place4} alt="Destination 2" />
        <h2>Dubai Miracle Garden</h2>
        <p>Experience the vibrant Garden of Dubai with our guided tours.</p>
        <button onclick="showgard()">Learn More</button>
    </div>

    <div class="travel-card">
      <img src={place5} alt="Destination 2" />
      <h2>Palm Jumeirah</h2>
      <p>Explore Palm Jumeirah of Dubai with our guided tours.</p>
      <button onclick="showpalm()">Learn More</button>
    </div>
        </div>
      </div>
   </>
}

export default BestPlaces