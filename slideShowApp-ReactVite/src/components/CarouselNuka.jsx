import React from "react";
import Carousel from "nuka-carousel";
import ImgData from "../assets/ImgData";

const CarouselNuka = () => {
  const parameters = {
    wrapAround: true,
    animation: "fade",
    autoplay: true,
    autoplayInterval: 5000,
    defaultControlsConfig: {
      pagingDotsStyle: {
        fill: "white",
      },
    },
  };
  const imgs = ImgData();
  return (
    <div className="slideShow">
      <Carousel {...parameters}>
        {imgs.map((item, index) => (
          <img src={item.src} alt={item.alt} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselNuka;
