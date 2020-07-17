import React from "react";
import Carousel from "../carousel";

const content = [
  {
    date: "10 November",
    title: "Family Baptism class",
    blogPost: "",
  },
  {
    date: "9 November",
    title: "The Bible on Campus",
    blogPost:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "8 November",
    title: "A Faithful Witness",
    blogPost:
      "Those who are prepared to witness and sensitive to opportunities the Lord opens up will find occasions on every hand to share Christ.",
  },
  {
    date: "7 November",
    title: "Transfoming Live",
    blogPost:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "6 November",
    title: "Restoring Hope",
    blogPost:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const LatestBlog = () => {
  return (
    <section id='page-blog' className='no-padding'>
      <div className='fullwidth'>
        <div className='one-fourth text-center'>
          <div className='title-area wow slideInLeft'>
            <span>Latest</span>
            <h1>Blog</h1>
          </div>
        </div>

        <Carousel type='blog' items={content} />
      </div>
      <div className='clearfix'></div>
    </section>
  );
};

export default LatestBlog;
