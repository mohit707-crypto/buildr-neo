import React, {useState, useEffect} from 'react'
import { client } from './client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    const[testmonialData, setTestMonialData] = useState([]);
       
       useEffect(() => {
           client.getEntries()
                 .then((entry) => {
                     setTestMonialData(entry.items)
                 })
       }, [])

     console.log( 
        testmonialData[8]?.fields?.sectionDescription
     )
     console.log( "movish :::>",
     testmonialData[8]?.fields?.sectionImage[1]?.fields?.description
    )
     console.log(
       testmonialData[8]?.fields?.sectionImage[0]?.fields?.file?.url
       )
       console.log(
        testmonialData[8]?.fields?.sectionImage[1]?.fields?.file?.url
        )
        console.log(
            testmonialData[8]?.fields?.sectionImage[2]?.fields?.file?.url
            )
 

    return (
        <div>
             <section className="sectionTestimonial">
            <div className="container largeContainer">
                <h2 className="sectionTitle2 text-center">
                    Read What Our Customers Have To Say
                </h2>
                <div className="sliderWrapper">
                    <div className="testimonialSlider">
                        <Slider {...settings}>
                        <div className="item">
                            <div className="slideContent">
                                <div className="testimonialImg">
                                    <img src={ testmonialData[8]?.fields?.sectionImage[0]?.fields.file.url} className="img-fluid" alt="Image"/>
                                </div>
                                <div className="content">
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
                                    {testmonialData[8]?.fields?.sectionDescription}
                                    </p>
                                    <span className="clientName sectionText">
                                        -Jessie Handler
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slideContent">
                                <div className="testimonialImg">
                                    <img src={testmonialData[8]?.fields?.sectionImage[1]?.fields?.file?.url} className="img-fluid" alt="Image"/>
                                </div>
                                <div className="content">
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
                                       { testmonialData[8]?.fields?.sectionImage[1]?.fields?.description}
                                    </p>
                                    <span className="clientName sectionText">
                                        -Rebeca Wuckert
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slideContent">
                                <div className="testimonialImg">
                                    <img src={testmonialData[8]?.fields?.sectionImage[2]?.fields?.file?.url} className="img-fluid" alt="Image"/>
                                </div>
                                <div className="content">
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
                                       {  testmonialData[8]?.fields?.sectionDescription}
                                    </p>
                                    <span className="clientName sectionText">
                                        -Jessie Handler
                                    </span>
                                </div>
                              </div>
                           </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Testimonial
