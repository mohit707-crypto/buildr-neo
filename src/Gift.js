import React, {useState, useEffect} from 'react';
import { client } from './client';


function Gift() {
const [giftData,setGiftData] = useState([]);

useEffect(() => {
    client.getEntries()
          .then((entry) => {
              setGiftData(entry.items)

          })
}, [])
console.log(
    giftData[7]?.fields?.sectionImage[0]?.fields?.file?.url
)
console.log(
    giftData[7]?.fields?.sectionImage[2]?.fields?.file?.url
)

console.log(
    giftData[7]?.fields?.sectionImage[1]?.fields?.file?.url
)

console.log(
    giftData[7]?.fields?.sectionImage[3]?.fields?.file?.url
)
    return (
        <div>
             <section className="sectionPefectGift">
            <div className="container largeContainer">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-end">
                    <div className="contentWrapper">
                        <h2 className="sectionTitle2">
                            The Perfect Gift
                        </h2>
                        <div className="commentWrapper">
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row align-items-start">
                                    <div className="clientImg">
                                        <img src={giftData[7]?.fields?.sectionImage[2]?.fields?.file?.url} className="img-fluid" alt="Image"/>
                                    </div>
                                    <div>
                                        <div className="clientName sectionText">
                                            April Ann.
                                        </div>
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
                                    </div>
                                </div>
                                <p className="comment sectionText">
                                    “Very fun and so awesome. Love the little case it comes with. 
                                    Was the perfect gift for my son. We bought two for more fun 
                                    while we travel. Definitely recommend!”
                                </p>
                            </div>
                        </div>
                        <div className="imgWrapper d-block d-md-none">
                            <img src={giftData[7]?.fields?.sectionImage[1]?.fields?.file?.url} className="img-fluid lazyloaded" alt="Image"/>
                        </div>
                        <div className="paymentBtnWrapper">
                            <a href="#CTASection" className="custom-btn scrollTo nonStickyBtn">
                                <span className="handIcon">👉</span> get your magnets
                            </a>
                            <div className="paymentIcon">
                                <img src={giftData[7]?.fields?.sectionImage[3]?.fields?.file?.url} className="img-fluid lazyload" alt="Image"/>
                            </div>
                        </div>
                    </div>
                    <div className="imgWrapper d-none d-md-block">
                        <img src={giftData[7]?.fields?.sectionImage[0]?.fields?.file?.url} className="img-fluid lazyloaded" alt="Image"/>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Gift;
