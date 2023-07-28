import React from "react";
import Carousel from "react-bootstrap/Carousel";
import mainBanner1 from "../../assets/images/main-banner-1.jpg";
import mainBanner2 from "../../assets/images/main-banner-2.jpg";

const HomeCarousel = () => {
  return (
    <>
      <Carousel className="home_carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={mainBanner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={mainBanner2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
