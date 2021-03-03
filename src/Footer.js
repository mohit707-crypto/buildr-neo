import React from 'react'
import LPGlogo from './images/lpg-logo.jpg'


function Footer() {
    return (
        <div>
               <footer className="footer">
        <div className="container largeContainer">
            <div className="footerWrapper">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <a href="!#;" className="logo">
                            <img src={LPGlogo} className="img-fluid lazyload" alt="Logo"/>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <p className="copyright">
                            &copy; 2020 neobuildr. Powered by Shopify
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <ul className="navWrapper">
                            <li>
                                <a href="#returnPolicy" className="fancybox">
                                    Return Policy
                                </a>
                            </li>
                            <li>-</li>
                            <li>
                                <a href="#termsConditions" className="fancybox">
                                    Terms &amp; Conditions
                                </a>
                            </li>
                            <li>-</li>
                            <li>
                                <a href="#privacyPolicy" className="fancybox">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </div>
    )
}

export default Footer
