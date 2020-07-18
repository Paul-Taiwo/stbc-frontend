import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const BlogPostListCard = ({
  blogTitle,
  blogAuthor,
  createdAt,
  featuredImg,
  blogContent,
}) => {
  return (
    <li>
      <div className='info'>
        <div className='date-box'>
          <span className='day'>{moment(createdAt).format("DD")}</span>
          <span className='month'>{moment(createdAt).format("MMM")}</span>
        </div>
      </div>
      <div className='preview'>
        <img src={featuredImg} alt='' />
        <a href='#'>
          <h3 className='blog-title'>{blogTitle}</h3>
        </a>

        {blogContent.replace(/[<p></p>]/g, "").slice(0, 257)}
      </div>
      <div className='meta-info'>
        By: <a href='#'>{blogAuthor}</a>
        <span>|</span>
        <a href='#'>Course</a>, <a href='#'>Promotion</a>
        <span>|</span>
        <a href='#'>2 Comments</a>
      </div>
    </li>
  );
};

BlogPostListCard.propTypes = {
  blogTitle: PropTypes.string.isRequired,
  blogAuthor: PropTypes.string.isRequired,
  blogContent: PropTypes.string.isRequired,
  featuredImg: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default BlogPostListCard;
