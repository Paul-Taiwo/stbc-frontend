import React from "react";
import { Header, Footer } from "../../components";

import blog1 from "../../assets/img/blog/pic-blog-1.jpg";
import blog2 from "../../assets/img/blog/pic-blog-2.jpg";
import blog3 from "../../assets/img/blog/pic-blog-3.jpg";
import blog4 from "../../assets/img/blog/pic-blog-4.jpg";

const Blog = () => {
  return (
    <>
      <div id='preloader'></div>
      <div id='wrapper'>
        <Header />
        <section id='subheader' data-speed='2' data-type='background'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h1>Blog</h1>
              </div>
            </div>
          </div>
        </section>

        <div className='clearfix'></div>

        <div id='content'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8'>
                <ul className='blog-list'>
                  <li>
                    <div className='info'>
                      <div className='date-box'>
                        <span className='day'>01</span>
                        <span className='month'>FEB</span>
                      </div>
                    </div>
                    <div className='preview'>
                      <img src={blog1} alt='' />
                      <a href='news-single.html'>
                        <h3 className='blog-title'>
                          Lin: 'God Is Challenging Me!'
                        </h3>
                      </a>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </div>
                    <div className='meta-info'>
                      By: <a href='#'>Admin</a>
                      <span>|</span>
                      <a href='#'>Faith</a>, <a href='#'>People</a>
                      <span>|</span>
                      <a href='#'>2 Comments</a>
                    </div>
                  </li>

                  <li>
                    <div className='info'>
                      <div className='date-box'>
                        <span className='day'>05</span>
                        <span className='month'>FEB</span>
                      </div>
                    </div>
                    <div className='preview'>
                      <img src={blog2} alt='' />
                      <a href='news-single.html'>
                        <h3 className='blog-title'>10 Bible Verses for 2017</h3>
                      </a>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </div>
                    <div className='meta-info'>
                      By: <a href='#'>Admin</a>
                      <span>|</span>
                      <a href='#'>daily bread</a>, <a href='#'>inspiration</a>
                      <span>|</span>
                      <a href='#'>2 Comments</a>
                    </div>
                  </li>

                  <li>
                    <div className='info'>
                      <div className='date-box'>
                        <span className='day'>18</span>
                        <span className='month'>FEB</span>
                      </div>
                    </div>
                    <div className='preview'>
                      <img src={blog3} alt='' />
                      <a href='#'>
                        <h3 className='blog-title'>Crouch goes Home to Jesus</h3>
                      </a>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </div>
                    <div className='meta-info'>
                      By: <a href='#'>Admin</a>
                      <span>|</span>
                      <a href='#'>Course</a>, <a href='#'>Promotion</a>
                      <span>|</span>
                      <a href='#'>2 Comments</a>
                    </div>
                  </li>

                  <li>
                    <div className='info'>
                      <div className='date-box'>
                        <span className='day'>21</span>
                        <span className='month'>FEB</span>
                      </div>
                    </div>
                    <div className='preview'>
                      <img src={blog4} alt='' />
                      <a href='#'>
                        <h3 className='blog-title'>Our Most Christian Congress?</h3>
                      </a>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </div>
                    <div className='meta-info'>
                      By: <a href='#'>Admin</a>
                      <span>|</span>
                      <a href='#'>Course</a>, <a href='#'>Promotion</a>
                      <span>|</span>
                      <a href='#'>2 Comments</a>
                    </div>
                  </li>

                  <li>
                    <div className='info'>
                      <div className='date-box'>
                        <span className='day'>23</span>
                        <span className='month'>FEB</span>
                      </div>
                    </div>
                    <div className='preview'>
                      <img src={blog2} alt='' />
                      <a href='news-single.html'>
                        <h3 className='blog-title'>Paris Hostage Crises Over</h3>
                      </a>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </div>
                    <div className='meta-info'>
                      By: <a href='#'>Admin</a>
                      <span>|</span>
                      <a href='#'>Course</a>, <a href='#'>Promotion</a>
                      <span>|</span>
                      <a href='#'>2 Comments</a>
                    </div>
                  </li>

                  <li>
                    <div className='info'>
                      <div className='date-box'>
                        <span className='day'>25</span>
                        <span className='month'>FEB</span>
                      </div>
                    </div>
                    <div className='preview'>
                      <img src={blog1} alt='' />
                      <a href='news-single.html'>
                        <h3 className='blog-title'>
                          Mitt Romney 'S Presidential Run
                        </h3>
                      </a>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </div>
                    <div className='meta-info'>
                      By: <a href='#'>Admin</a>
                      <span>|</span>
                      <a href='#'>Course</a>, <a href='#'>Promotion</a>
                      <span>|</span>
                      <a href='#'>2 Comments</a>
                    </div>
                  </li>

                  <li>
                    <div className='info'>
                      <div className='date-box'>
                        <span className='day'>27</span>
                        <span className='month'>FEB</span>
                      </div>
                    </div>
                    <div className='preview'>
                      <img src={blog4} alt='' />
                      <a href='#'>
                        <h3 className='blog-title'>5 Million Join Jesus Parade</h3>
                      </a>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </div>
                    <div className='meta-info'>
                      By: <a href='#'>Admin</a>
                      <span>|</span>
                      <a href='#'>Course</a>, <a href='#'>Promotion</a>
                      <span>|</span>
                      <a href='#'>2 Comments</a>
                    </div>
                  </li>

                  <li>
                    <div className='info'>
                      <div className='date-box'>
                        <span className='day'>29</span>
                        <span className='month'>FEB</span>
                      </div>
                    </div>
                    <div className='preview'>
                      <img src={blog3} alt='' />
                      <a href='#'>
                        <h3 className='blog-title'>Does Science Point to God?</h3>
                      </a>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </div>
                    <div className='meta-info'>
                      By: <a href='#'>Admin</a>
                      <span>|</span>
                      <a href='#'>Course</a>, <a href='#'>Promotion</a>
                      <span>|</span>
                      <a href='#'>2 Comments</a>
                    </div>
                  </li>
                </ul>

                <div className='clearfix'></div>

                <div className='text-center '>
                  <ul className='pagination'>
                    <li>
                      <a href='#'>Prev</a>
                    </li>
                    <li className='active'>
                      <a href='#'>1</a>
                    </li>
                    <li>
                      <a href='#'>2</a>
                    </li>
                    <li>
                      <a href='#'>3</a>
                    </li>
                    <li>
                      <a href='#'>4</a>
                    </li>
                    <li>
                      <a href='#'>5</a>
                    </li>
                    <li>
                      <a href='#'>Next</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div id='sidebar' className='col-md-4'>
                <div className='widget latest_news'>
                  <h3>Latest News</h3>
                  <ul className='bloglist-small'>
                    <li>
                      <div className='date-box'>
                        <span className='day'>01</span>
                        <span className='month'>FEB</span>
                      </div>
                      <div className='txt'>
                        <h5>
                          <a href='css/index.html#'>
                            Lin: 'God Is Challenging Me!'
                          </a>
                        </h5>
                        <div>
                          <div>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque{" "}
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='date-box'>
                        <span className='day'>05</span>
                        <span className='month'>FEB</span>
                      </div>
                      <div className='txt'>
                        <h5>
                          <a href='css/index.html#'>10 Bible Verses for 2017</a>
                        </h5>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque
                      </div>
                    </li>
                    <li>
                      <div className='date-box'>
                        <span className='day'>18</span>
                        <span className='month'>FEB</span>
                      </div>
                      <div className='txt'>
                        <h5>
                          <a href='css/index.html#'>
                            Andraé Crouch goes Home to Jesus
                          </a>
                        </h5>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque
                      </div>
                    </li>
                  </ul>
                </div>

                <div className='widget widget_tags'>
                  <h3>
                    <span>Tags</span>
                  </h3>
                  <ul>
                    <li>
                      <a href='#link'>paralax</a>
                    </li>
                    <li>
                      <a href='#link'>carousel</a>
                    </li>
                    <li>
                      <a href='#link'>christian</a>
                    </li>
                    <li>
                      <a href='#link'>church</a>
                    </li>
                    <li>
                      <a href='#link'>clean</a>
                    </li>
                    <li>
                      <a href='#link'>flat</a>
                    </li>
                    <li>
                      <a href='#link'>revolution slider</a>
                    </li>
                    <li>
                      <a href='#link'>fundraising</a>
                    </li>
                    <li>
                      <a href='#link'>html 5</a>
                    </li>
                    <li>
                      <a href='#link'>ngo</a>
                    </li>
                    <li>
                      <a href='#link'>non profit</a>
                    </li>
                    <li>
                      <a href='#link'>religion</a>
                    </li>
                  </ul>
                </div>

                <div className='widget widget-text'>
                  <h3>Our Address</h3>
                  <iframe
                    frameborder='0'
                    scrolling='no'
                    marginheight='0'
                    marginwidth='0'
                    src='https://maps.google.co.id/maps?f=q&amp;source=s_q&amp;hl=en&amp;q=16+Riverside+Rd,+Singapore&amp;sll=-2.547988,118.037109&amp;sspn=29.394918,50.756836&amp;ie=UTF8&amp;geocode=Fb8IFgAdu40vBg&amp;split=0&amp;hq=&amp;hnear=16+Riverside+Rd,+Singapore&amp;ll=1.444031,103.779771&amp;spn=0.014522,0.024784&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=false'></iframe>

                  <address>
                    <span>16 Riverside Rd, Singapore</span>
                    <span>
                      <strong>Phone:</strong>(200) 333 8890
                    </span>
                    <span>
                      <strong>Fax:</strong>(200) 333 8892
                    </span>
                    <span>
                      <strong>Email:</strong>
                      <a href='#'>
                        contact@satriathemes.com
                      </a>
                    </span>
                    <span>
                      <strong>Web:</strong>
                      <a href='#'>
                        www.satriathemes.com
                      </a>
                    </span>
                  </address>
                </div>

                <div className='widget widget-text'>
                  <h3>About Blessing</h3>
                  Blessing is responsive website template for church build with
                  latest Bootstrap framework. Blessing is responsive with almost
                  all devices screen size supported. This template equipped with
                  awesome features like Revolution Slider, touch & swipe
                  carousel, countdown timer and much more features. Get
                  ‘Blessing’ now!
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
