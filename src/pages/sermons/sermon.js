import React, { useEffect, useState } from "react";
import { Header, Footer } from "../../components";
import { useParams } from "react-router-dom";
import RequestClient from "../../services/RequestClient";

const Sermon = () => {
  const params = useParams();
  const [sermon, setSermon] = useState({
    fetched: false,
    data: [],
  });

  useEffect(() => {
    RequestClient.get(`sermons/${params.id}`).then((res) => {
      setSermon({ fetched: true, data: { ...res.data.data } });
    });
  }, [params.id]);

  return (
    <>
      {!sermon.fetched && <div id='preloader'></div>}
      <div id='wrapper'>
        <Header />

        <section id='subheader' data-speed='2' data-type='background'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                s<h1>Events</h1>
              </div>
            </div>
          </div>
        </section>

        <div class='clearfix'></div>

        <div id='content'>
          {sermon.fetched && (
            <div className='container event-single'>
              <div className='row'>
                <h1 className='col-md-12'>{sermon.data.sermon_title}</h1>
                <div className='col-md-8'>
                  <img
                    src={sermon.data.featured_img}
                    className='img-event img-full'
                    alt=''
                  />

                  <p>{sermon.data.sermon_content}</p>

                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                    ab illo inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt.
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
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Sermon;
