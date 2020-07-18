import React, { useEffect, useState } from "react";

import RequestClient from "../../services/RequestClient";
import { Header, Footer } from "../../components";
import SermonListCard from "../../components/sermonListCard";

const SermonList = () => {
  const [sermons, setSermons] = useState({
    fetched: false,
    data: [],
  });

  useEffect(() => {
    RequestClient.get("sermons").then((res) => {
      setSermons({ fetched: true, data: [...res.data.data] });
    });
  }, []);

  return (
    <>
      <div id='preloader'></div>
      <div id='wrapper'>
        <Header />

        <section id='subheader' data-speed='2' data-type='background'>
          <div class='container'>
            <div class='row'>
              <div class='col-md-12'>
                <h1>Sermons</h1>
              </div>
            </div>
          </div>
        </section>

        <div className='clearfix'></div>

        <div id='content'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10 col-md-offset-1'>
                {sermons.fetched &&
                  sermons.data.length > 0 &&
                  sermons.data.map(({ sermon_title, sermon_author, createdAt }) => (
                    <SermonListCard
                      sermonTitle={sermon_title}
                      sermonAuthor={sermon_author}
                      createdAt={createdAt}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SermonList;
