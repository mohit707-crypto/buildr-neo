import React from 'react'
import LPGpaymentIcon from './images/lpg-paymentIcons.jpg'


function Unlesh() {
    return (
        <div>
               <section className="sectionUnleashMind">
            <div className="container largeContainer">
                <h2 className="sectionTitle text-center">
                    Unleash Your Mind
                </h2>
                <p className="sectionText text-center">
                    You can create buildings, shapes, geometric patterns, etc., the possibilities are endless!
                </p>
                <div className="paymentBtnWrapper">
                    <a href="#CTASection" className="custom-btn scrollTo nonStickyBtn">
                        <span className="handIcon">👉</span> get your magnets
                    </a>
                    <div className="paymentIcon">
                        <img src={LPGpaymentIcon} className="img-fluid lazyload" alt="Image"/>
                    </div>
                </div>
            </div>
        </section>
            
        </div>
    )
}

export default Unlesh
