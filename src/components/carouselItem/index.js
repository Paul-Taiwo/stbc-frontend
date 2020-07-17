import React from "react";
import PropTypes from "prop-types";
import pics1 from "../../assets/img/events/pic (1).jpg";

const CarouselItem = ({ type, content, even }) => {
  if (type === "event") {
    return (
      <div className='item'>
        <div className='overlay'>
          <span className='time'>{content.time || "February 6, 2017"}</span>
          <a href='#'>
            <h3>{content.eventName || "Family Baptism className"}</h3>
          </a>
          <span className='desc'>
            {content.eventDescription ||
              `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.`}
          </span>
        </div>
        <img src={content.eventImg || pics1} alt='' />
      </div>
    );
  }

  if (type === "blog") {
    return (
      <div className={`item-blog ${even ? "even" : ""}`}>
        <div className='inner'>
          <span className='date'>{content.date || "10 November"}</span>
          <a href='#'>
            <h3>{content.title || "Gods goal for you"}</h3>
          </a>
          <span className='desc'>
            {content.blogPost ||
              `The Bible says, "Give thanks in everything" consectetur adipisicing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.`}
          </span>
        </div>
      </div>
    );
  }
};

CarouselItem.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
};

export default CarouselItem;
