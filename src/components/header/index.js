import React from "react";
// import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className='container'>
        <span id='menu-btn'></span>
        <div className='wirelorow'>
          <div className='col-md-3'>
            {/* <!-- logo begin --> */}
            <div id='logo'>
              <div className='inner'>
                <a href='index-2.html'>
                  <img src='img/logo.png' alt='' className='logo-1' />
                  <img src='img/logo-2.png' alt='' className='logo-2' />
                </a>
              </div>
            </div>
            {/* <!-- logo close --> */}
          </div>

          <div className='col-md-9'>
            {/* <!-- mainmenu begin --> */}
            <div id='mainmenu-container'>
              <ul id='mainmenu'>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/events'>Events</a>
                  <ul>
                    <li>
                      <a href='/events'>Event List</a>
                    </li>
                    <li>
                      <a href='/event-calendar'>Event Calendar</a>
                    </li>
                    <li>
                      <a href='/event/:id'>Single Page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='/blog'>Blog</a>
                  <ul>
                    <li>
                      <a href='/blog'>Blog List</a>
                    </li>
                    <li>
                      <a href='/blog/:id'>Single Page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='/blog'>Sermons</a>
                  <ul>
                    <li>
                      <a href='/sermons'>Sermon List</a>
                    </li>
                    <li>
                      <a href='/sermon/:id'>Sermon Page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='gallery.html'>Gallery</a>
                </li>
                <li>
                  <a href='contact.html'>Contact</a>
                </li>
              </ul>
            </div>
            {/* <!-- mainmenu close --> */}

            {/* <!-- social icons --> */}
            <div className='social'>
              <a href='#'>
                <i className='fa fa-facebook'></i>
              </a>
              <a href='#'>
                <i className='fa fa-twitter'></i>
              </a>
              <a href='#'>
                <i className='fa fa-rss'></i>
              </a>
              <a href='#'>
                <i className='fa fa-google-plus'></i>
              </a>
              <a href='#'>
                <i className='fa fa-envelope-o'></i>
              </a>
            </div>
            {/* <!-- social icons close --> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
