import React from 'react'
import LPGInfoimg from './images/lpg-infoImg.png'


function Infosection() {
    return (
        <div>
              <section className="sectionInfo">
            <div className="container">
                <div className="contentWrapper">
                    <p className="text">
                        Order Today And Get <span>DIY MAGNETIC <br />STICKS AND BALLS</span> With Free 3 Days Shipping 
                    </p>
                    <div className="imgWraper">
                        <img src={LPGInfoimg} className="img-fluid lazyload" alt="Image"/>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Infosection
