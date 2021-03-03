import React, {useState , useEffect} from 'react';
import { client } from "./client";
import LPGbannerCheckIcon from './images/lpg-bannerCheckIcon.jpg';
import LPGbannerCheckIcoN from './images/lpg-bannerCheckIcon.jpg';
import LPGbannerCheckIcON from './images/lpg-bannerCheckIcon.jpg';
import LpGbannerCheckIcON from './images/lpg-bannerCheckIcon.jpg';

function Header() {
   const [headerData, setHeaderData] = useState([]);


     useEffect(() => {
         client
         .getEntries("")
         .then((entry) => {
             setHeaderData(entry.items)
             console.log(entry)
         })
          .catch(console.error);
     }, [])

     console.log("jack>>>",
         headerData[0]?.fields?.sectionImage[0]?.fields?.file?.url
     )

     console.log("jack>>>",
     headerData[0]?.fields?.sectionImage[2]?.fields?.file?.url
 )
 console.log("jack>>>",
     headerData[0]?.fields?.sectionImage[1]?.fields?.file?.url
 )
 console.log("jack>>>",
     headerData[0]?.fields?.sectionImage[3]?.fields?.file?.url
 )

 console.log("jack>>>",
 headerData[0]?.fields?.sectionImage[4]?.fields?.file?.url
)


    return (
        <div>
              <header className="header">
        <div className="headerTop">
            <div className="container largeContainer">
                <p className="headerText text-center">
                    FREE 3-DAY SHIPPING DURING COVID-19
                </p>
            </div>
        </div>
        <div className="headerMain">
            <div className="container largeContainer">
                <div className="headerWrapper">
                    <a href="!#" className="logo">
                        <img src={ headerData[0]?.fields?.sectionImage[1]?.fields?.file?.url} className="img-fluid lazyload" alt="Logo"/>
                    </a>
                    <div className="headerBtn">
                        <a href="#CTASection" className="custom-btn scrollTo nonStickyBtn">
                            <span className="handIcon">👉</span> get your magnets
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section className="sectionBanner">
            <div className="container largeContainer">
                <div className="contentWrapper">
                    <h1 className="sectionTitle">
                        Let Your Imagination Run Wild With The DIY Magnetic Sticks And Balls!
                    </h1>
                    <ul className="bannerPoints">
                        <li className="sectionText">
                            <img src={LPGbannerCheckIcon} className="img-flulid" alt="Check Icon"/> Boosts Creativity
                        </li>
                        <li className="sectionText">
                            <img src={LPGbannerCheckIcoN} className="img-flulid" alt="Check Icon"/> Makes a great gift
                        </li>
                        <li className="sectionText">
                            <img src={LPGbannerCheckIcON} className="img-flulid" alt="Check Icon"/> Stimulates Imagination
                        </li>
                        <li className="sectionText">
                            <img src={LpGbannerCheckIcON} className="img-flulid" alt="Check Icon"/> Relieves Stress & anxiety
                        </li>
                    </ul>
                    <div className="paymetnBtnWrapper">
                        <a href="#CTASection" className="custom-btn scrollTo nonStickyBtn">
                            <span className="handIcon">👉</span> get your magnets
                        </a>
                        <div className="">
                            <span className="price sectionText">
                                Starting At <span>$24.95</span>
                            </span>
                            <div className="paymentIcon">
                                <img src={headerData[0]?.fields?.sectionImage[4]?.fields?.file?.url} className="img-fluid lazyload" alt="Image"/>
                            </div>
                        </div>
                    </div>
                    <div className="commentWrapper">
                        <div className="imgWrapper">
                            <img src={headerData[0]?.fields?.sectionImage[2]?.fields?.file?.url} className="img-fluid" alt="Client Image"/>
                        </div>
                        <div className="">
                            <span className="clientName sectionText">
                                Brian DiGiorgio.
                            </span>
                            <ul className="starlist list-unstyled d-flex flex-row align-items-center">
                                <li>
                                    <i className="material-icons">star</i>
                                </li>
                                <li>
                                    <i className="material-icons">star</i>
                                </li>
                                <li>
                                    <i className="material-icons">star</i>
                                </li>
                                <li>
                                    <i className="material-icons">star</i>
                                </li>
                                <li>
                                    <i className="material-icons">star</i>
                                </li>
                            </ul>
                            <p className="comment sectionText">
                                “Endless possibilities for these things. Had me going through Wikipedia articles of polyhedra trying to figure out what to make next!”
                            </p>
                        </div>
                    </div>
                </div>
                <div class="bgImage">
                    <img src={ headerData[0]?.fields?.sectionImage[0]?.fields?.file?.url} class="img-fluid lazyload" alt="Image"/>
                </div>
                <div class="moneyBackIcon">
                    <img src={headerData[0]?.fields?.sectionImage[3]?.fields?.file?.url} class="img-fluid" alt="Moneyback Icon"/>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Header
