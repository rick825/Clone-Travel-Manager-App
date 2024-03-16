import React from 'react';
import './Offer.css';
import pricetag from '../../../img/icon/pricetag.png';
import travel from '../../../img/icon/conf-travel.png';
import packages from '../../../img/icon/pakages.png'

const Offer = () => {
    return <>
        <div class="offer">

            <div class="o1 or">
                <div class="oimg oimg1">

                </div>
                <div class="otext otext1">
                    <div class="othead">
                        <h2>Our Best <span>Services</span></h2>
                    </div>
                    <div class="otbot">
                        <div class="ot1 ot">
                            <img src={pricetag} alt="" />
                            <div class="bprice">
                                <h2>Best Prices</h2>
                                <p>We will provide the best prices available in the market!!</p>
                            </div>
                        </div>
                        <div class="ot2 ot">
                            <img src={travel} alt="" />
                            <div class="bprice">
                                <h2>Comfortable Travel!!</h2>
                                <p>We will provide the most comfortable Travel for you!! </p>
                            </div>
                        </div>
                        <div class="ot2 ot">
                            <img src={packages} alt="" />
                                <div class="bprice">
                                    <h2>Best Packages</h2>
                                    <p>We will provide the best packages for you travel!!</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="o2 or">
                <div class="otext otext2">
                    <div class="othead">
                        <h2>Travel Every <span>Corner of World</span> with Us</h2>
                    </div>
                    <div class="otbot">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quasi, quidem, quibusdam, quod, quaerat, quasi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quasi, quidem, quibusdam, quod, quaerat, quasi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quasi, quidem, quibusdam, quod, quaerat, quasi.</p>
                    </div>
                    <div class="otbut">
                        <button>Explore More</button>
                    </div>
                </div>
                <div class="oimg oimg2">

                </div>
            </div>

        </div>
    </>
}

export default Offer