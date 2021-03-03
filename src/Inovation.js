import React, {useState, useEffect }from 'react'
import { client } from './client';
import LPGbannerChEckIcon from './images/lpg-bannerCheckIcon.jpg'
import LPGbannerCHEckIcon from './images/lpg-bannerCheckIcon.jpg'
import LPGbanneRChEckIcon from './images/lpg-bannerCheckIcon.jpg'



function Inovaction() {
   const [inovationData, setInovationData] = useState ([]);

useEffect(() => {
    client.getEntries()
          .then((entry) => {
              setInovationData(entry.items)
             
          })  
}, [])
console.log(
    inovationData[6]?.fields?.sectionImage[0]?.fields?.file?.url
    )
    console.log(
        inovationData[6]?.fields?.sectionImage[1]?.fields?.file?.url
        )
    
        console.log(
            inovationData[6]?.fields?.sectionImage[2]?.fields?.file?.url
            )
    

    return (
        <div>
              <section className="sectionimagination">
            <div className="container largeContainer">
                <div className="contentWrapper">
                    <div className="ImgWrapper d-none d-md-block">
                        <img src={inovationData[6]?.fields?.sectionImage[0]?.fields?.file?.url} className="img-fluid lazyload" alt="Image"/>
                    </div>
                    <div className="content">
                        <h2 className="sectionTitle">
                            Stimulates Imagination And Innovation
                        </h2>
                        <ul className="points">
                            <li className="sectionText">
                                <img src={LPGbannerChEckIcon} className="img-flulid" alt="Check Icon"/> Endless possibilities at your fingertips!
                            </li>
                            <li className="sectionText">
                                <img src={LPGbannerCHEckIcon} className="img-flulid" alt="Check Icon"/> Build 3-dimensional shapes, buildings, patterns, or anything you can imagine!
                            </li>
                            <li className="sectionText">
                                <img src={LPGbanneRChEckIcon} className="img-flulid" alt="Check Icon"/> Exercise patience and improve problem-solving skills as you  craft your masterpiece.
                            </li>
                        </ul>
                        <div className="ImgWrapper d-block d-md-none">
                            <img src={inovationData[6]?.fields?.sectionImage[1]?.fields?.file?.url} className="img-fluid lazyload" alt="Image"/>
                        </div>
                        <div className="paymentBtnWrapper">
                            <a href="#CTASection" className="custom-btn scrollTo nonStickyBtn">
                                <span className="handIcon">👉</span> get your magnets
                            </a>
                            <div className="paymentIcon">
                                <img src={ inovationData[6]?.fields?.sectionImage[2]?.fields?.file?.url} className="img-fluid lazyload" alt="Image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Inovaction
