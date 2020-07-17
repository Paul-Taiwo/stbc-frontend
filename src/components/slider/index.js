import React from "react";
import bg1 from "../../assets/img-rev-slider/bg-1.jpg";
import bg2 from "../../assets/img-rev-slider/bg-2.jpg";
import bg3 from "../../assets/img-rev-slider/bg-3.jpg";

const Slider = () => {
  return (
    <div id='slider'>
      {/* <!-- revolution slider begin --> */}
      <div className='fullwidthbanner-container'>
        <div id='revolution-slider'>
          <ul>
            <li
              data-transition='fade'
              data-slotamount='10'
              data-masterspeed='1500'>
              {/* <!--  BACKGROUND IMAGE --> */}
              <img src={bg1} alt='' />
              <div
                className='tp-caption border-v lft'
                data-x='540'
                data-y='center'
                data-speed='800'
                data-start='400'
                data-easing='easeInOutCubic'
                data-endspeed='300'></div>

              <div
                className='tp-caption custom-font-1 lft'
                data-x='600'
                data-y='140'
                data-speed='800'
                data-start='1000'
                data-easing='easeInOutCubic'
                data-endspeed='300'>
                Transforming Live
              </div>

              <div
                className='tp-caption lft custom-font-2'
                data-x='600'
                data-y='190'
                data-speed='800'
                data-start='800'
                data-easing='easeInOutCubic'>
                Restoring Hope
              </div>

              <div
                className='tp-caption tp-text sfb text-left'
                data-x='600'
                data-y='240'
                data-speed='800'
                data-start='1400'
                data-easing='easeInOutCubic'>
                Transforming lives and societies through education, research and
                innovation.
                <br />
                Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam.
                <br />
              </div>

              <div
                className='tp-caption sfb text-left'
                data-x='600'
                data-y='320'
                data-speed='800'
                data-start='1600'
                data-easing='easeInOutCubic'>
                <a className='btn btn-slider' href='#'>
                  Read More
                </a>
              </div>
            </li>

            <li
              data-transition='fade'
              data-slotamount='10'
              data-masterspeed='1500'>
              {/* <!--  BACKGROUND IMAGE --> */}
              <img src={bg2} alt='' />
              <div
                className='tp-caption custom-font-1 lft'
                data-x='left'
                data-y='140'
                data-speed='800'
                data-start='400'
                data-easing='easeInOutCubic'
                data-endspeed='300'>
                Put Your Faith
              </div>

              <div
                className='tp-caption sfr custom-font-2'
                data-x='left'
                data-y='190'
                data-speed='800'
                data-start='800'
                data-easing='easeInOutCubic'>
                Into Action
              </div>

              <div
                className='tp-caption sfb tp-text text-left'
                data-x='left'
                data-y='240'
                data-speed='800'
                data-start='1200'
                data-easing='easeInOutCubic'>
                Put your faith into action today and let your actions be fueled
                by your faith.
                <br />
                Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam.
                <br />
              </div>

              <div
                className='tp-caption sfb text-left'
                data-x='left'
                data-y='320'
                data-speed='800'
                data-start='1600'
                data-easing='easeInOutCubic'>
                <a className='btn btn-slider' href='#'>
                  Read More
                </a>
              </div>
            </li>

            <li
              data-transition='fade'
              data-slotamount='10'
              data-masterspeed='1500'>
              {/* <!--  BACKGROUND IMAGE --> */}
              <img src={bg3} alt='' />
              <div
                className='tp-caption border-v lft'
                data-x='540'
                data-y='center'
                data-speed='800'
                data-start='400'
                data-easing='easeInOutCubic'
                data-endspeed='300'></div>

              <div
                className='tp-caption custom-font-1 lft'
                data-x='600'
                data-y='140'
                data-speed='800'
                data-start='1000'
                data-easing='easeInOutCubic'
                data-endspeed='300'>
                total surrender
              </div>

              <div
                className='tp-caption lft custom-font-2'
                data-x='600'
                data-y='190'
                data-speed='800'
                data-start='800'
                data-easing='easeInOutCubic'>
                to God
              </div>

              <div
                className='tp-caption sfb tp-text text-left'
                data-x='600'
                data-y='240'
                data-speed='800'
                data-start='1400'
                data-easing='easeInOutCubic'>
                The first step in overcoming any kind of situation that holds me
                in bondage
                <br />
                in my thoughts,mind, body and spirit is to surrender it to God
                <br />
              </div>

              <div
                className='tp-caption sfb text-left'
                data-x='600'
                data-y='320'
                data-speed='800'
                data-start='1600'
                data-easing='easeInOutCubic'>
                <a className='btn btn-slider' href='#'>
                  Read More
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- revolution slider close --> */}
    </div>
  );
};

export default Slider;
