import React, { useEffect } from "react";
import path from "../../assets/js";
import {
  Header,
  Footer,
  Slider,
  UpcomingEvents,
  LatestBlog,
} from "../../components";
// import "../../main.css"

const Homepage = () => {
  // useEffect(() => {
  //   const scripts = path.map((s) => {
  //     const script = document.createElement("script");
  //     script.src = s;
  //     script.async = true;

  //     return script;
  //   });

  //   scripts.forEach((s) => {
  //     document.body.appendChild(s);
  //   });

  //   return () => {
  //     scripts.forEach((s) => {
  //       document.body.removeChild(s);
  //     });
  //   };
  // });

  return (
    <>
      <div id='preloader'></div>
      <div id='wrapper'>
        <Header />
        <Slider />
        <div className='clearfix'></div>

        {/* <!-- content begin --> */}
        <div id='content' className='no-padding'>
          <UpcomingEvents />
          {/* <!-- section begin --> */}
          <section
            id='countdown-container'
            data-speed='5'
            data-type='background'>
            <div className='container'>
              <div className='row text-center'>
                <div className='col-md-6 wow fadeInLeft'>
                  <h3>Transforming Live, Restoring Hope</h3>
                  <span className='time'>April 10, 2017 8:00 pm</span>
                </div>

                <div className='col-md-6 wow fadeInRight' data-wow-delay='.25s'>
                  <div id='defaultCountdown'></div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- section close --> */}

          {/* <!-- section begin --> */}
          <section id='section-text'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-2 text-center wow fadeInUp'>
                  <h2>About The Church</h2>
                  <div className='divider-double'></div>
                </div>

                <div className='col-md-4 wow fadeInRight' data-wow-delay='.5s'>
                  <img
                    src='img/misc/pic-1.jpg'
                    className='img-responsive'
                    alt=''
                  />
                  <h3>Our Community</h3>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto.
                  <br />
                  <br />
                  <a href='#' className='st-btn'>
                    Read More
                  </a>
                </div>
                <div className='col-md-4 wow fadeInRight' data-wow-delay='.75s'>
                  <img
                    src='img/misc/pic-2.jpg'
                    className='img-responsive'
                    alt=''
                  />
                  <h3>Church Mission</h3>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto.
                  <br />
                  <br />
                  <a href='#' className='st-btn'>
                    Read More
                  </a>
                </div>
                <div className='col-md-4 wow fadeInRight' data-wow-delay='1s'>
                  <img
                    src='img/misc/pic-3.jpg'
                    className='img-responsive'
                    alt=''
                  />
                  <h3>Participate With Us</h3>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto.
                  <br />
                  <br />
                  <a href='#' className='st-btn'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- section close --> */}

          {/* <!-- section begin --> */}
          <section id='latest-sermons'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-2 text-center wow fadeInUp'>
                  <h2>Latest Sermons</h2>
                  <div className='divider-double'></div>
                </div>

                <div className='col-md-10 col-md-offset-1'>
                  <div className='custom-col-3 wow flipInX'>
                    <div className='left-col'>
                      <img
                        src='img/sermons/pic%20(1).jpg'
                        alt=''
                        className='img-responsive'
                      />
                    </div>
                    <div className='mid-col'>
                      <a href='#'>
                        <h3>Transforming Live, Restoring Hope</h3>
                      </a>
                      <div className='details'>
                        <span>
                          By <a href='#'>John Rook</a>, February 08, 2017
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

                  <div className='custom-col-3 wow flipInX'>
                    <div className='left-col'>
                      <img
                        src='img/sermons/pic%20(2).jpg'
                        alt=''
                        className='img-responsive'
                      />
                    </div>
                    <div className='mid-col'>
                      <a href='#'>
                        <h3>Put Your Faith Into Action</h3>
                      </a>
                      <div className='details'>
                        <span>
                          By <a href='#'>Allan Poe</a>, February 15, 2017
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

                  <div className='custom-col-3 wow flipInX'>
                    <div className='left-col'>
                      <img
                        src='img/sermons/pic%20(3).jpg'
                        alt=''
                        className='img-responsive'
                      />
                    </div>
                    <div className='mid-col'>
                      <a href='#'>
                        <h3>Find And You Shall Seek</h3>
                      </a>
                      <div className='details'>
                        <span>
                          By <a href='#'>Ron Ward</a>, February 22, 2017
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
                </div>
              </div>
            </div>
          </section>
          {/* <!-- section close --> */}

          {/* <!-- section begin --> */}
          <section id='section-text-2' className='no-padding-bottom'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 wow fadeInLeft' data-wow-delay='.5s'>
                  <h1>Take Me To Church</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>

                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>

                  <p className='wow fadeIn' data-wow-delay='1.5s'>
                    <img src='img/misc/pic-5.png' alt='' />
                  </p>
                </div>

                <div className='col-md-6 wow fadeInUp'>
                  <img
                    src='img/misc/pic-4.png'
                    className='img-responsive'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </section>
          {/* <!-- section close --> */}

          <LatestBlog />

          {/* <!-- section begin --> */}
          <section id='section-gallery'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-2 text-center'>
                  <h2>From Gallery</h2>
                  <div className='divider-double'></div>
                </div>

                <div
                  id='gallery-isotope'
                  className='col-md-12 wow fadeInUp'
                  data-wow-delay='.25s'>
                  <div className='item long-pic'>
                    <a
                      href='img/gallery/pic%20(1).jpg'
                      data-gal='prettyPhoto[galllery]'>
                      <span className='overlay'></span>
                    </a>
                    <img src='img/gallery/pic%20(1).jpg' alt='' />
                  </div>

                  <div className='item small-pic'>
                    <a
                      href='img/gallery/pic%20(2).jpg'
                      data-gal='prettyPhoto[galllery]'>
                      <span className='overlay'></span>
                    </a>
                    <img src='img/gallery/pic%20(2).jpg' alt='' />
                  </div>

                  <div className='item wide-pic'>
                    <a
                      href='img/gallery/pic%20(3).jpg'
                      data-gal='prettyPhoto[galllery]'>
                      <span className='overlay'></span>
                    </a>
                    <img src='img/gallery/pic%20(3).jpg' alt='' />
                  </div>

                  <div className='item wide-pic'>
                    <a
                      href='img/gallery/pic%20(4).jpg'
                      data-gal='prettyPhoto[galllery]'>
                      <span className='overlay'></span>
                    </a>
                    <img src='img/gallery/pic%20(4).jpg' alt='' />
                  </div>

                  <div className='item small-pic'>
                    <a
                      href='img/gallery/pic%20(5).jpg'
                      data-gal='prettyPhoto[galllery]'>
                      <span className='overlay'></span>
                    </a>
                    <img src='img/gallery/pic%20(5).jpg' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- section close --> */}

          {/* <!-- section begin --> */}
          <section id='section-testimonial'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-2'>
                  <div
                    id='testi-carousel'
                    className='testi-slider text-center wow fadeInUp'>
                    <div className='item'>
                      <img
                        src='img/testi/pic%20(1).jpg'
                        alt=''
                        className='img-circle'
                      />
                      <blockquote>
                        Blessing theme has a real desire and heart for ministry
                        within the local church
                      </blockquote>
                      <span className='testi-by'>Aline Drummond</span>
                    </div>
                    <div className='item'>
                      <img
                        src='img/testi/pic%20(2).jpg'
                        alt=''
                        className='img-circle'
                      />
                      <blockquote>
                        I Just wanted to let you know how pleased we are and how
                        great the Blessing theme is working for our National
                        Church{" "}
                      </blockquote>
                      <span className='testi-by'>Mortimer Elmo</span>
                    </div>
                    <div className='item'>
                      <img
                        src='img/testi/pic%20(3).jpg'
                        alt=''
                        className='img-circle'
                      />
                      <blockquote>
                        Get in touch with Blessing theme today and get ready to
                        see your church grow!
                      </blockquote>
                      <span className='testi-by'>Marina Leopold</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- section close --> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
