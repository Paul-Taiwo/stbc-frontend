import React, { useEffect } from "react";
import { Header, Footer } from "../../components";
import pics1 from "../../assets/img/sermons/pic (1).jpg";
// import RequestClient from "../../services/RequestClient";

const Sermon = () => {
  // useEffect(() => {
  //   RequestClient.get("sermons").then((res) => {
  //     console.log("Ress", res);
  //   });
  // }, []);

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

        <div class='clearfix'></div>

        <div id='content'>
          <div className='container event-single'>
            <div className='row'>
              <h1 className='col-md-12'>Transforming Live, Restoring Hope</h1>
              <div className='col-md-8'>
                <img src={pics1} className='img-event img-full' alt='' />

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>

                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt.
                </p>
              </div>

              <div className='col-md-4'>
                <a href='#' className='btn-icon'>
                  <i className='fa fa-video-camera'></i>Video Streaming
                </a>
                <a href='#' className='btn-icon'>
                  <i className='fa fa-volume-up'></i>Audio Streaming
                </a>
                <a href='#' className='btn-icon'>
                  <i className='fa fa-file-pdf-o'></i>Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Sermon;
