import React,{ useState, useEffect } from 'react'
import { client } from './client';

function Color() {
const [colorData, setColorData] = useState([]);

useEffect(() => {
client.getEntries("")
      .then((entry) => {
          setColorData(entry.items)
      })
    
    }, [])

console.log("dx >>",
    colorData[3]?.fields?.sectionImage[0]?.fields?.file?.url
    )

    console.log("dx >>",
    colorData[3]?.fields?.sectionImage[1]?.fields?.file?.url
    )


    return (
        <div>
             <section class="sectionColor">
            <div class="container largeContainer">
                <div class="contentWrapper">
                    <div class="content">
                        <h2 class="sectionTitle">
                            Multi-Colors 
                        </h2>
                        <p class="sectionText">
                            Make endless 3D figures with the multi colored Magnetic Sticks and Balls.
                        </p>
                        <div class="bgImage d-block d-md-none">
                            <img data-src="images/lpg-multicolorImg.jpg" class="img-fluid lazyload" alt="Image"/>
                        </div>
                        <div class="paymentBtnWrapper">
                            <a href="#CTASection" class="custom-btn scrollTo nonStickyBtn">
                                <span class="handIcon">👉</span> get your magnets
                            </a>
                            <div class="paymentIcon">
                                <img src={colorData[3]?.fields?.sectionImage[1]?.fields?.file?.url} class="img-fluid lazyload" alt="Image"/>
                            </div>
                        </div>
                    </div>
                    <div class="bgImage d-none d-md-block">
                        <img src={ colorData[3]?.fields?.sectionImage[0]?.fields?.file?.url} class="img-fluid lazyload" alt="Image"/>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Color
