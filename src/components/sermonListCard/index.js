import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const SermonListCard = ({ sermonTitle, sermonAuthor, createdAt }) => {
  return (
    <div className='custom-col-3'>
      <div className='left-col'>
        <img src='img/sermons/pic%20(9).jpg' alt='' className='img-responsive' />
      </div>
      <div className='mid-col'>
        <a href='#'>
          <h3>{sermonTitle}</h3>
        </a>
        <div className='details'>
          <span>
            By <a href='#'>{sermonAuthor}</a>, {moment(createdAt).format("MMMM Do, YYYY")}
            .
          </span>
        </div>
      </div>
      <div className='right-col'>
        <a href='#'>
          <i className='fa fa-video-camera'></i>
        </a>
        <a href='#'>
          <i className='fa fa-volume-up'></i>
        </a>
        <a href='#'>
          <i className='fa fa-file-pdf-o'></i>
        </a>
      </div>
    </div>
  );
};

SermonListCard.propTypes = {
  sermonTitle: PropTypes.string.isRequired,
  sermonAuthor: PropTypes.string.isRequired,
};

export default SermonListCard;
