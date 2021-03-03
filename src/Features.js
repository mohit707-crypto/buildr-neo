import React,{useState, useEffect} from 'react'
import { client } from './client';



function Features() {
const [featuresData, setFeaturesData] = useState([]);

  useEffect(() => {
         client
         .getEntries("")
         .then((entry) => {
             setFeaturesData(entry.items)
             console.log(entry)
         })
          .catch(console.error);
     }, [])
console.log("mack>>>",
    featuresData[1]?.fields?.sectionImage[0].fields.file.url
)
console.log("mack>>>",
    featuresData[1]?.fields?.sectionImage[1].fields.file.url
)
console.log("mack>>>",
    featuresData[1]?.fields?.sectionImage[2].fields.file.url
)




    return (
        <div>
              <section className="sectionFeatures">
            <div className="container largeContainer">
                <div className="rowWrapper">
                    <div className="feature">
                        <div className="iconWrapper">
                            <img src={featuresData[1]?.fields?.sectionImage[0].fields.file.url} className="img-fluid lazyload" alt="Feature Icon"/>
                        </div>
                        <span className="title sectionText">
                            Made of High-Quality <br />Neodymium & Steel
                        </span>
                    </div>
                    <div className="feature">
                        <div className="iconWrapper">
                            <img src={featuresData[1]?.fields?.sectionImage[1].fields.file.url} className="img-fluid lazyload" alt="Feature Icon"/>
                        </div>
                        <span className="title sectionText">
                            Free 3-Day <br />Shipping
                        </span>
                    </div>
                    <div className="feature">
                        <div className="iconWrapper">
                            <img src={featuresData[1]?.fields?.sectionImage[2].fields.file.url} className="img-fluid lazyload" alt="Feature Icon"/>
                        </div>
                        <span className="title sectionText">
                            30 Day Money <br />Back Guarantee
                        </span>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Features
