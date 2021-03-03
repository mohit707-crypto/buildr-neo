import React, { useState, useEffect } from 'react'
import { client } from './client';
import LPGbannerCheckIcon from './images/lpg-bannerCheckIcon.jpg'
import LPGbannercheckIcon from './images/lpg-bannerCheckIcon.jpg'
import LPGbannerCheckICon from './images/lpg-bannerCheckIcon.jpg'

function Boost() {
    const [boostData , setBoostData] = useState ([]);

    useEffect(() => {
        client.getEntries()
              .then((entry) => {
                  setBoostData(entry.items)
              })      
    }, [])
    console.log("MJ >>>>",
        boostData[4]?.fields?.sectionImage.fields.file.url
    )

    return (
        <div>
             <section className="sectionBoostCreativity">
            <div className="container largeContainer">
                <div className="contentWrapper">
                    <div className="videoImgWrapper d-none d-md-block">
                        <div className="videoContainer">
                            <iframe width="auto" src="http://www.youtube.com/embed/a3ICNMQW7Ok" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="content">
                        <h2 className="sectionTitle">
                            Boost Your Creativity
                        </h2>
                        <ul className="points">
                            <li className="sectionText">
                                <img src={LPGbannerCheckIcon} className="img-flulid" alt="Check Icon"/> Energize your mind
                            </li>
                            <li className="sectionText">
                                <img src={LPGbannerCheckICon} className="img-flulid" alt="Check Icon"/> Exercise spatial thinking with this hands-on toy
                            </li>
                            <li className="sectionText">
                                <img src={LPGbannercheckIcon} className="img-flulid" alt="Check Icon"/> Explore the countless geometric pattern and shapes you can 
                                make
                            </li>
                        </ul>
                        <div className="videoImgWrapper d-block d-md-none">
                            <div className="videoContainer">
                                <iframe width="auto" src="http://www.youtube.com/embed/a3ICNMQW7Ok" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="paymentBtnWrapper">
                            <a href="#CTASection" className="custom-btn scrollTo nonStickyBtn">
                                <span className="handIcon">👉</span> get your magnets
                            </a>
                            <div className="paymentIcon">
                                <img src={ boostData[4]?.fields?.sectionImage.fields.file.url} className="img-fluid lazyload" alt="Image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Boost
