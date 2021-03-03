import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { client } from "./client";

function Gallary() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const [gallaryData, setGallaryData] = useState([]);

  useEffect(() => {
    client.getEntries("").then((entry) => {
      setGallaryData(entry.items);
    });
  }, []);
  console.log(
    "Rock>>",
    gallaryData[2]?.fields?.gallaryImage[0]?.fields?.file?.url
  );
  console.log(
    "Rock>>",
    gallaryData[2]?.fields?.gallaryImage[1]?.fields?.file?.url
  );
  console.log(
    "Rock>>",
    gallaryData[2]?.fields?.gallaryImage[2]?.fields?.file?.url
  );
  console.log(
    "Rock>>",
    gallaryData[2]?.fields?.gallaryImage[3]?.fields?.file?.url
  );
  console.log(
    "Rock>>",
    gallaryData[2]?.fields?.gallaryImage[4]?.fields?.file?.url
  );

  return (
    <div>
      <section className="sectionImgGallary">
        <div className="sliderWrapper">
          <div className="gallarySlider">
            <Slider {...settings}>
              <div className="item">
                <div className="imgWrapper">
                  <img
                    src={
                      gallaryData[2]?.fields?.gallaryImage[0]?.fields?.file?.url
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
                      gallaryData[2]?.fields?.gallaryImage[1]?.fields?.file?.url
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
                      gallaryData[2]?.fields?.gallaryImage[2]?.fields?.file?.url
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
                      gallaryData[2]?.fields?.gallaryImage[3]?.fields?.file?.url
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
                      gallaryData[2]?.fields?.gallaryImage[4]?.fields?.file?.url
                    }
                    className="img-fluid"
                    alt="Image"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallary;
