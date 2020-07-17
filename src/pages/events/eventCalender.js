import React, { useEffect } from "react";
import { Header, Footer, UpcomingEvents} from "../../components";
import "./events.css";


const EventCalendar = () => {
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

        <UpcomingEvents />

        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div id='calendar'></div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default EventCalendar;
