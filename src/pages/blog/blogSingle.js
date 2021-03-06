import React from "react";
import { Header, Footer } from "../../components";

import blog1 from "../../assets/img/blog/pic-blog-1.jpg";
import avatar from "../../assets/img/avatar.jpg";
// import blog2 from "../../assets/img/blog/pic-blog-2.jpg";
// import blog3 from "../../assets/img/blog/pic-blog-3.jpg";
// import blog4 from "../../assets/img/blog/pic-blog-4.jpg";

const BlogSingle = () => {
  return (
    <>
      <div id='preloader'></div>
      <div id='wrapper'>
        <Header />
        <section id='subheader' data-speed='2' data-type='background'>
          <div class='container'>
            <div class='row'>
              <div class='col-md-12'>
                <h1>Blog</h1>
              </div>
            </div>
          </div>
        </section>

        <div class='clearfix'></div>

        <div id='content'>
          <div class='container'>
            <div class='row'>
              <div class='col-md-8'>
                <div class='blog-read'>
                  <div>
                    <div class='info'>
                      <div class='date-box'>
                        <span class='day'>28</span>
                        <span class='month'>SEP</span>
                      </div>
                    </div>
                    <div class='preview'>
                      <img src={blog1} alt='' />
                      <a href='#'>
                        <h3 class='blog-title'>Lorem ipsum dolor sit amet</h3>
                      </a>
                      <p>
                        <a href='#'></a>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. Lorem ipsum dolor sit amet,
                        consectetur
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. Lorem ipsum dolor sit amet,
                        consectetur{" "}
                      </p>
                    </div>
                    <div class='meta-info'>
                      Hotel<a href='#'>Admin</a>
                      <span>|</span>
                      <a href='#'>Event</a>, <a href='#'>Promotion</a>
                      <span>|</span>
                      <a href='#'>2 Comments</a>
                      <span>|</span>{" "}
                    </div>
                  </div>
                </div>

                <div id='blog-comment'>
                  <h3>
                    <span>Comments (5)</span>
                  </h3>
                  <ol>
                    <li>
                      <div class='avatar'>
                        <img src={avatar} alt='' />
                      </div>
                      <div class='comment-info'>
                        <span class='c_name'>John Smith</span>
                        <span class='c_date'>8 August 2012</span>
                        <span class='c_reply'>
                          <a href='#'>Reply</a>
                        </span>
                        <div class='clearfix'></div>
                      </div>

                      <div class='comment'>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </div>
                      <ol>
                        <li>
                          <div class='avatar'>
                            <img src={avatar} alt='' />
                          </div>
                          <div class='comment-info'>
                            <span class='c_name'>John Smith</span>
                            <span class='c_date'>8 August 2012</span>
                            <span class='c_reply'>
                              <a href='#'>Reply</a>
                            </span>
                            <div class='clearfix'></div>
                          </div>
                          <div class='comment'>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </li>
                      </ol>
                    </li>

                    <li>
                      <div class='avatar'>
                        <img src={avatar} alt='' />
                      </div>
                      <div class='comment-info'>
                        <span class='c_name'>John Smith</span>
                        <span class='c_date'>8 August 2012</span>
                        <span class='c_reply'>
                          <a href='#'>Reply</a>
                        </span>
                        <div class='clearfix'></div>
                      </div>
                      <div class='comment'>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </div>
                    </li>

                    <li>
                      <div class='avatar'>
                        <img src={avatar} alt='' />
                      </div>
                      <div class='comment-info'>
                        <span class='c_name'>John Smith</span>
                        <span class='c_date'>8 August 2012</span>
                        <span class='c_reply'>
                          <a href='#'>Reply</a>
                        </span>

                        <div class='clearfix'></div>
                      </div>
                      <div class='comment'>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </div>
                    </li>
                  </ol>

                  <div id='comment-form-wrapper'>
                    <h3>Leave a Comment</h3>
                    <div class='comment_form_holder'>
                      <form id='commentform' name='form1' method='post'>
                        <label>Name</label>
                        <input
                          type='text'
                          name='name'
                          id='name'
                          class='form-control'
                        />

                        <label>
                          Email <span class='req'>*</span>
                        </label>
                        <input
                          type='text'
                          name='email'
                          id='email'
                          class='form-control'
                        />
                        <div id='error_email' class='error'>
                          Please check your email
                        </div>

                        <label>
                          Message <span class='req'>*</span>
                        </label>
                        <textarea
                          cols='10'
                          rows='10'
                          name='message'
                          id='message'
                          class='form-control'></textarea>
                        <div id='error_message' class='error'>
                          Please check your message
                        </div>
                        <div id='mail_success' class='success'>
                          Thank you. Your message has been sent.
                        </div>
                        <div id='mail_failed' class='error'>
                          Error, email not sent
                        </div>

                        <p id='btnsubmit'>
                          <input
                            type='submit'
                            id='send'
                            value='Send'
                            class='btn btn-custom'
                          />
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div id='sidebar' class='col-md-4'>
                <div class='widget latest_news'>
                  <h3>Latest News</h3>
                  <ul class='bloglist-small'>
                    <li>
                      <div class='date-box'>
                        <span class='day'>28</span>
                        <span class='month'>SEP</span>
                      </div>
                      <div class='txt'>
                        <h5>
                          <a href='css/index.html#'>Lorem ipsum sit amet</a>
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
                      <div class='date-box'>
                        <span class='day'>26</span>
                        <span class='month'>SEP</span>
                      </div>
                      <div class='txt'>
                        <h5>
                          <a href='css/index.html#'>Lorem ipsum sit amet</a>
                        </h5>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque
                      </div>
                    </li>
                    <li>
                      <div class='date-box'>
                        <span class='day'>18</span>
                        <span class='month'>SEP</span>
                      </div>
                      <div class='txt'>
                        <h5>
                          <a href='css/index.html#'>Lorem ipsum sit amet</a>
                        </h5>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque
                      </div>
                    </li>
                  </ul>
                </div>

                <div class='widget widget_tags'>
                  <h3>
                    <span>Tags</span>
                  </h3>
                  <ul>
                    <li>
                      <a href='#link'>course</a>
                    </li>
                    <li>
                      <a href='#link'>responsive</a>
                    </li>
                    <li>
                      <a href='#link'>css3</a>
                    </li>
                    <li>
                      <a href='#link'>html5</a>
                    </li>
                    <li>
                      <a href='#link'>website</a>
                    </li>
                    <li>
                      <a href='#link'>template</a>
                    </li>
                    <li>
                      <a href='#link'>elegant</a>
                    </li>
                    <li>
                      <a href='#link'>clean</a>
                    </li>
                    <li>
                      <a href='#link'>jquery</a>
                    </li>
                    <li>
                      <a href='#link'>php</a>
                    </li>
                    <li>
                      <a href='#link'>html</a>
                    </li>
                    <li>
                      <a href='#link'>css</a>
                    </li>
                  </ul>
                </div>

                <div class='widget widget-text'>
                  <h3>Our Address</h3>
                  <iframe
                    frameborder='0'
                    scrolling='no'
                    marginheight='0'
                    marginwidth='0'
                    src='https://maps.google.co.id/maps?f=q&amp;source=s_q&amp;hl=en&amp;q=16+Riverside+Rd,+Singapore&amp;sll=-2.547988,118.037109&amp;sspn=29.394918,50.756836&amp;ie=UTF8&amp;geocode=Fb8IFgAdu40vBg&amp;split=0&amp;hq=&amp;hnear=16+Riverside+Rd,+Singapore&amp;ll=1.444031,103.779771&amp;spn=0.014522,0.024784&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=false'></iframe>

                  <address>
                    <span>20 Main Street, Melbourne</span>
                    <span>
                      <strong>Phone:</strong>(200) 333 8890
                    </span>
                    <span>
                      <strong>Fax:</strong>(200) 333 8892
                    </span>
                    <span>
                      <strong>Email:</strong>
                      <a href='mailto:contact@example.com'>
                        contact@example.com
                      </a>
                    </span>
                    <span>
                      <strong>Web:</strong>
                      <a href='#test'>http://example.com</a>
                    </span>
                  </address>
                </div>
                <div class='widget widget-text'>
                  <h3>Text Widget</h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>

            <div class='map'></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogSingle;
