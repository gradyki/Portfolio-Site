import "./LandingCarousel.css";
import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import carouselData from "../../utils/carouselData";
import { Link } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
console.log(carouselData);

class LandingCarousel extends Component {
  state = {
    images: carouselData,
  };

  render() {
    const { images } = this.state;

    return (
      <Carousel breakPoints={breakPoints}>
        {images.map((image) => (
          <div key={image.id} className="image-container">
            <img src={`${image.photo}`} id="carousel-imgs" />
            <div className="image-text">
              {image.textLocation}
              <br></br>
              <i class="fa fa-rub" aria-hidden="true"></i>
              {image.textPrice}
            </div>
          </div>
        ))}
      </Carousel>
    );
  }
}

export default LandingCarousel;
