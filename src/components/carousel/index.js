import React from "react";
import PropTypes from "prop-types";

import CarouselItem from "../carouselItem";

const Carousel = ({ type, items }) => {
  return (
    <div className='three-fourth'>
      {type === "event" ? (
        <div className='fx custom-carousel-1'>
          {items.map((evnt, i) => (
            <CarouselItem key={i} type={type} content={evnt} />
          ))}
        </div>
      ) : type === "blog" ? (
        <div className='custom-carousel-2'>
          {items.map((evnt, i) => (
            <CarouselItem even={ i % 2 } key={i} type={type} content={evnt} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

Carousel.propTypes = {
  type: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default Carousel;
