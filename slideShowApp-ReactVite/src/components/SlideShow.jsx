import React from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import ImgData from "../assets/ImgData";

const SlideShow = () => {
  const [slide, setSlide] = useState(0);
  const imgs = ImgData();

  const nextSlide = () => {
    setSlide(slide === imgs.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? imgs.length - 1 : slide - 1);
  };

  //setInterval(nextSlide, 5000);

  return (
    <div className="slideShow">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {imgs.map((item, index) => (
        <img
          src={item.src}
          alt={item.alt}
          key={index}
          style={{ display: slide === index ? "block" : "none" }}
        />
      ))}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {imgs.map((item, index) => {
          return (
            <button
              key={index}
              className={
                slide === index ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(index)}
            />
          );
        })}
      </span>
    </div>
  );
};

export default SlideShow;
