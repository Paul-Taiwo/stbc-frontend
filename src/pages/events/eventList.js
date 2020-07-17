import React, { useEffect } from "react";
import { Header, Footer } from "../../components";
import path from "../../assets/js";

import pics1 from "../../assets/img/events/pic (1).jpg";
import pics2 from "../../assets/img/events/pic (2).jpg";
import pics3 from "../../assets/img/events/pic (3).jpg";
import pics4 from "../../assets/img/events/pic (4).jpg";
import pics5 from "../../assets/img/events/pic (5).jpg";
import pics6 from "../../assets/img/events/pic (6).jpg";

const EventList = () => {

  return (
    <>
      <div id='preloader'></div>
      <div id='wrapper'>
        <Header />

        <section id='subheader' data-speed='2' data-type='background'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h1>Events</h1>
              </div>
            </div>
          </div>
        </section>

        <div className='clearfix'></div>

        <div id='content'>
          <div className='container'>
            <div className='row'>
              {/* <!-- event item begin --> */}
              <div className='col-md-6 event-item'>
                <div className='inner'>
                  <div className='left-col'>
                    <img src={pics1} alt='' />
                  </div>
                  <div className='right-col'>
                    <span className='date'>06</span>
                    <span className='month'>FEB</span>
                    <span className='time'>08:00 am</span>
                  </div>
                </div>
                <div className='desc'>
                  <a href='#'>
                    <h3>Family Baptism Class</h3>
                  </a>
                  <span className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </span>
                </div>
              </div>
              {/* <!-- event item close --> */}

              {/* <!-- event item begin --> */}
              <div className='col-md-6 event-item'>
                <div className='inner'>
                  <div className='left-col'>
                    <img src={pics2} alt='' />
                  </div>
                  <div className='right-col'>
                    <span className='date'>10</span>
                    <span className='month'>FEB</span>
                    <span className='time'>10:00 am</span>
                  </div>
                </div>
                <div className='desc'>
                  <a href='#'>
                    <h3>Transforming Live</h3>
                  </a>
                  <span className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </span>
                </div>
              </div>
              {/* <!-- event item close --> */}

              {/* <!-- event item begin --> */}
              <div className='col-md-6 event-item'>
                <div className='inner'>
                  <div className='left-col'>
                    <img src={pics3} alt='' />
                  </div>
                  <div className='right-col'>
                    <span className='date'>20</span>
                    <span className='month'>FEB</span>
                    <span className='time'>10:00 am</span>
                  </div>
                </div>
                <div className='desc'>
                  <a href='#'>
                    <h3>Relationship With God</h3>
                  </a>
                  <span className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </span>
                </div>
              </div>
              {/* <!-- event item close --> */}

              {/* <!-- event item begin --> */}
              <div className='col-md-6 event-item'>
                <div className='inner'>
                  <div className='left-col'>
                    <img src={pics4} alt='' />
                  </div>
                  <div className='right-col'>
                    <span className='date'>26</span>
                    <span className='month'>FEB</span>
                    <span className='time'>08:00 am</span>
                  </div>
                </div>
                <div className='desc'>
                  <a href='#'>
                    <h3>Abundant Live</h3>
                  </a>
                  <span className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </span>
                </div>
              </div>
              {/* <!-- event item close --> */}

              {/* <!-- event item begin --> */}
              <div className='col-md-6 event-item'>
                <div className='inner'>
                  <div className='left-col'>
                    <img src={pics5} alt='' />
                  </div>
                  <div className='right-col'>
                    <span className='date'>01</span>
                    <span className='month'>MAR</span>
                    <span className='time'>08:00 am</span>
                  </div>
                </div>
                <div className='desc'>
                  <a href='#'>
                    <h3>God is Good</h3>
                  </a>
                  <span className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </span>
                </div>
              </div>
              {/* <!-- event item close --> */}

              {/* <!-- event item begin --> */}
              <div className='col-md-6 event-item'>
                <div className='inner'>
                  <div className='left-col'>
                    <img src={pics6} alt='' />
                  </div>
                  <div className='right-col'>
                    <span className='date'>08</span>
                    <span className='month'>MAR</span>
                    <span className='time'>10:00 am</span>
                  </div>
                </div>
                <div className='desc'>
                  <a href='#'>
                    <h3>Jehovah Jireh</h3>
                  </a>
                  <span className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </span>
                </div>
              </div>
              {/* <!-- event item close --> */}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default EventList;
