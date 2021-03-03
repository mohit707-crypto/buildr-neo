import React, {useState, useEffect} from 'react'
import { client } from './client';

function Faqsection() {
    const [faqData, setFaqData] = useState([]) ;

      useEffect(() => {
        client.getEntries()
              .then((entry) => {
                  setFaqData(entry.items)
              })
      }, [])
      console.log(
          faqData[9]?.fields?.sectionImage[0]?.fields?.file?.url
      )
      console.log(
        faqData[9]?.fields?.sectionImage[1]?.fields?.file?.url
    )
      console.log(
          faqData[9]?.fields?.sectionDescripton
      )



    return (
        <div>
            <section className="sectionFaq">
            <div className="container largeContainer">
                <h2 className="sectionTitle2">
                    Frequently Asked Questions
                </h2>
                <div className="questionAccordionWrapper">
                    <div className="accordion" id="accordionQuestion">
                        <div className="card">
                            <div className="card-header" id="heading1">
                                <button type="button" className="accordionBtn d-flex justify-content-between align-items-center collapsed" data-toggle="collapse" data-target="#collapse1">Which size bundle should I get? <span className="fa fa-pluss"></span></button>
                            </div>
                            <div id="collapse1" className="collapse" aria-labelledby="heading1" data-parent="#accordionQuestion">
                                <div className="card-body">
                                    <p>
                                       {faqData[9]?.fields?.sectionDescripton}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="heading2">
                                <button type="button" className="accordionBtn d-flex justify-content-between align-items-center collapsed" data-toggle="collapse" data-target="#collapse2">How much does shipping cost? <span className="fa fa-pluss"></span></button>
                            </div>
                            <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordionQuestion">
                                <div className="card-body">
                                    <p>
                                       {faqData[9]?.fields?.sectionDescripton}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="heading3">
                                <button type="button" className="accordionBtn d-flex justify-content-between align-items-center collapsed" data-toggle="collapse" data-target="#collapse3">Is it safe for children? <span className="fa fa-pluss"></span></button>
                            </div>
                            <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#accordionQuestion">
                                <div className="card-body">
                                    <p>
                                    {faqData[9]?.fields?.sectionDescripton}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="heading4">
                                <button type="button" className="accordionBtn d-flex justify-content-between align-items-center collapsed" data-toggle="collapse" data-target="#collapse4">"I just received my order, but I need more magnets? <span className="fa fa-pluss"></span></button>
                            </div>
                            <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordionQuestion">
                                <div className="card-body">
                                    <p>
                                    {faqData[9]?.fields?.sectionDescripton}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="heading5">
                                <button type="button" className="accordionBtn d-flex justify-content-between align-items-center collapsed" data-toggle="collapse" data-target="#collapse5">How long is the shipping? <span className="fa fa-pluss"></span></button>
                            </div>
                            <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordionQuestion">
                                <div className="card-body">
                                    <p>
                                    {faqData[9]?.fields?.sectionDescripton}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="paymentBtnWrapper">
                    <a href="#CTASection" className="custom-btn scrollTo nonStickyBtn">
                        <span className="handIcon">👉</span> get your magnets
                    </a>
                    <div className="paymentIcon">
                        <img data-src="images/lpg-paymentIcons.jpg" className="img-fluid lazyload" alt="Image"/>
                    </div>
                </div>
            </div>
            <div className="bgImage">
                <img src={ faqData[9]?.fields?.sectionImage[0]?.fields?.file?.url} alt="Faq Image"/>
                <img src={ faqData[9]?.fields?.sectionImage[1]?.fields?.file?.url} className="img-fluid lazyload d-block d-md-none" alt="Faq Image"/>
            </div>
        </section>
        </div>
    )
}

export default Faqsection
