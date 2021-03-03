import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { client } from "./client";

function Ctasection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [ctaData, setCtaData] = useState([]);

  useEffect(() => {
    client.getEntries().then((entry) => {
      setCtaData(entry.items);
    });
  }, []);
  console.log(ctaData[10]?.fields?.sectionImage[0]?.fields?.file?.url);
  console.log(ctaData[10]?.fields?.sectionImage[1]?.fields?.file?.url);

  console.log(ctaData[10]?.fields?.sectionImage[2]?.fields?.file?.url);

  console.log(ctaData[10]?.fields?.sectionImage[3]?.fields?.file?.url);

  console.log(ctaData[10]?.fields?.sectionImage[4]?.fields?.file?.url);

  return (
    <div>
      <section className="sectionCTA" id="CTASection">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-6">
              <div className="sliderWrapper d-none d-lg-block">
                <div className="mainSlider" id="mainSlider">
                  <Slider {...settings}>
                    <div className="item">
                      <div className="imgWrapper">
                        <img
                          src={
                            ctaData[10]?.fields?.sectionImage[0]?.fields?.file
                              ?.url
                          }
                          className="img-fluid"
                          alt="Product Image"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="imgWrapper">
                        <img
                          src={
                            ctaData[10]?.fields?.sectionImage[1]?.fields?.file
                              ?.url
                          }
                          className="img-fluid"
                          alt="Product Image"
                        />
                      </div>
                    </div>

                    <div className="item">
                      <div className="imgWrapper">
                        <img
                          src={
                            ctaData[10]?.fields?.sectionImage[1]?.fields?.file
                              ?.url
                          }
                          className="img-fluid"
                          alt="Image"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="imgWrapper">
                        <img
                          src={
                            ctaData[10]?.fields?.sectionImage[2]?.fields?.file
                              ?.url
                          }
                          className="img-fluid"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contentWrapper">
                <h2 className="sectionTitle">DIY Magnetic Sticks And Balls</h2>
                <div className="ratedText">
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
                  <p className="sectionText">4.9 (50 reviews)</p>
                </div>
                <div className="sliderWrapper d-block d-lg-none">
                  <div className="mainSlider" id="mainSlider">
                    <div className="item">
                      <div className="imgWrapper">
                        <img
                          src={
                            ctaData[10]?.fields?.sectionImage[0]?.fields?.file
                              ?.url
                          }
                          className="img-fluid"
                          alt="Product Image"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="imgWrapper">
                        <img
                          src={
                            ctaData[10]?.fields?.sectionImage[0]?.fields?.file
                              ?.url
                          }
                          className="img-fluid"
                          alt="Product Image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="navSlider" id="navSlider">
                    <div className="item">
                      <div className="imgWrapper">
                        <img
                          src={
                            ctaData[10]?.fields?.sectionImage[1]?.fields?.file
                              ?.url
                          }
                          className="img-fluid"
                          alt="Image"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="imgWrapper">
                        <img
                          src={
                            ctaData[10]?.fields?.sectionImage[2]?.fields?.file
                              ?.url
                          }
                          className="img-fluid"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pirceText">
                  <div className="d-flex flex-row align-items-center">
                    <span className="wasPrice sectionText">
                      <del>$160</del>
                    </span>
                    <span className="newPrice">$124.95</span>
                  </div>
                  <div className="savePrice sectionText">
                    You Save <span>$35.05</span>
                  </div>
                </div>
                <form>
                  <div className="formWrapper">
                    <div className="formRow">
                      <label for="size" className="sectionText leftT">
                        Select Size
                      </label>
                      <div className="dropdownWrapper rightT">
                        <select className="customDropdown" id="size">
                          <option>Jumbo</option>
                          <option>Small</option>
                        </select>
                        <span className="dropdownText">
                          360 Magnetic Sticks + 270 Silver Balls
                        </span>
                      </div>
                    </div>
                    <div className="formRow">
                      <label for="color" className="sectionText leftT">
                        Select Color
                      </label>
                      <div className="radioWrapper rightT">
                        <label className="colorRadio">
                          <input
                            type="radio"
                            value="none"
                            name="colorRadio"
                            checked="checked"
                          />
                          <div className="textWrapper sectionText">Metallic</div>
                        </label>
                        <label className="colorRadio">
                          <input
                            type="radio"
                            value="professionalTub"
                            name="colorRadio"
                          />
                          <div className="textWrapper sectionText">Colored</div>
                        </label>
                      </div>
                    </div>
                    <div className="formRow">
                      <label for="qtyBtns" className="sectionText leftT">
                        Select Quantity
                      </label>
                      <div
                        className="qtyBtns d-flex flex-row align-items-center rightT"
                        id="qtyBtns"
                      >
                        <input
                          type="button"
                          value="-"
                          className="qtyminus1 sectionText"
                          field="quantity1"
                        />
                        <input
                          type="text"
                          name="quantity1"
                          value="1"
                          className="qty sectionText"
                        />
                        <input
                          type="button"
                          value="+"
                          className="qtyplus1 sectionText"
                          field="quantity1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="MoneyBtnWrapper">
                    <div className="moneybackIcon">
                      <img
                        src={
                          ctaData[10]?.fields?.sectionImage[3]?.fields?.file
                            ?.url
                        }
                        className="img-fluid lazyload"
                        alt="Moneyback Icon"
                      />
                    </div>
                    <div className="btnWrapper">
                      <span className="freeText">Free 3 Day Shipping</span>
                      <a href="javascript:;" className="custom-btn nonStickyBtn">
                        <span className="handIcon">👉</span> Buy now
                      </a>
                      <div className="paymentIcon">
                        <img
                          src={
                            ctaData[10]?.fields?.sectionImage[4]?.fields?.file
                              ?.url
                          }
                          className="img-fluid lazyload"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ctasection;
