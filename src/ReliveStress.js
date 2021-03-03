import React, { useState, useEffect } from "react";
import { client } from "./client";
import LPGcheckIcon2 from './images/lpg-checkIcon2.jpg'
import LPGcheckIcoN2 from './images/lpg-checkIcon2.jpg'
import LPGcheckIcOn2 from './images/lpg-checkIcon2.jpg'



function ReliveStress() {
  const [reliveData, setReliveData] = useState([]);

  useEffect(() => {
    client.getEntries().then((entry) => {
      setReliveData(entry.items);
    });
  }, []);

  console.log("mjj >>", 
    reliveData[5]?.fields?.sectionImage[0]?.fields?.file?.url
  );
  console.log("mjj >>", 
  reliveData[5]?.fields?.sectionImage[2]?.fields?.file?.url
);
console.log("mjj >>", 
  reliveData[5]?.fields?.sectionImage[1]?.fields?.file?.url
);


  return (
    <div>
      <section className="sectionRelieveStress">
        <div className="contentWrapper">
          <div className="content">
            <h2 className="sectionTitle">Relieves Stress &amp; Anxiety</h2>
            <ul className="points">
              <li className="sectionText">
                <img
                  src={LPGcheckIcon2}
                  className="img-flulid"
                  alt="Check Icon"
                />{" "}
                Therapeutic experience
              </li>
              <li className="sectionText">
                <img
                  src={LPGcheckIcoN2}
                  className="img-flulid"
                  alt="Check Icon"
                />{" "}
                Dive into creating your masterpiece!
              </li>
              <li className="sectionText">
                <img
                  src={LPGcheckIcOn2}
                  className="img-flulid"
                  alt="Check Icon"
                />{" "}
                Bond with family and friends as you build together!
              </li>
            </ul>
            <div className="paymentBtnWrapper">
              <a
                href="#CTASection"
                className="custom-btn scrollTo nonStickyBtn"
              >
                <span className="handIcon">👉</span> get your magnets
              </a>
              <div className="paymentIcon">
                <img
                  src={reliveData[5]?.fields?.sectionImage[1]?.fields?.file?.url}
                  className="img-fluid lazyload"
                  alt="Image"
                />
              </div>
            </div>
          </div>
          <div className="imgWrapper">
            <img
              src={reliveData[5]?.fields?.sectionImage[0]?.fields?.file?.url}
              className="img-fluid lazyload d-none d-lg-block"
              alt="Image"
            />
            <img
              src={reliveData[5]?.fields?.sectionImage[2]?.fields?.file?.url}
              className="img-fluid lazyload d-block d-lg-none"
              alt="Image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReliveStress;
