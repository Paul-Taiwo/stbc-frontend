import React from "react";
import Carousel from "../carousel";

import pics1 from "../../assets/img/events/pic (1).jpg";
import pics2 from "../../assets/img/events/pic (2).jpg";
import pics3 from "../../assets/img/events/pic (3).jpg";
import pics4 from "../../assets/img/events/pic (4).jpg";
import pics5 from "../../assets/img/events/pic (5).jpg";
import pics6 from "../../assets/img/events/pic (6).jpg";

const events = [
  {
    time: "February 6, 2017",
    eventName: "Family Baptism className",
    eventImg: pics1,
    eventDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    time: "February 10, 2017",
    eventName: "Transforming Live",
    eventImg: pics2,
    eventDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    time: "February 20, 2017",
    eventName: "Relationship With God",
    eventImg: pics3,
    eventDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    time: "February 26, 2017",
    eventName: "Abundant Life",
    eventImg: pics4,
    eventDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    time: "March 1, 2017",
    eventName: "God is Good",
    eventImg: pics5,
    eeventDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    time: "March 10, 2017",
    eventName: "Jehovah Jireh",
    eventImg: pics6,
    eventDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
];

const UpcomingEvents = () => {
  return (
    <section id='page-events' className='no-padding'>
      <div className='fullwidth'>
        <div className='one-fourth text-center'>
          <div className='title-area wow slideInLeft'>
            <span>Upcoming</span>
            <h1>Events</h1>
          </div>
        </div>

        <Carousel type="event" items={events} />
      </div>
      <div className='clearfix'></div>
    </section>
  );
};

export default UpcomingEvents;
