import React from 'react'
import LPGMoneyback from './images/lpg-moneybackIcon2.jpg'

function Moneyback() {
    return (
        <div>
             <section className="sectionMoneyback">
            <div className="container largeContainer">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
                    <div className="imgWrapper">
                        <img src={LPGMoneyback} className="img-fluid lazyload" alt="Image"/>
                    </div>
                    <div className="contentWrapper">
                        <h2 className="sectionTitle2">
                            30 Days Money Back Guarantee
                        </h2>
                        <p className="sectionText">
                            We stand behind all purchases, with a 30-day satisfaction guarantee, no questions asked. If you are unhappy for any reason, just contact us, and we will provide you with a return label for free!
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Moneyback
