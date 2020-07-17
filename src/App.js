import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Homepage, EventList, EventCalendar, Sermon, SermonList, Blog, BlogSingle } from "./pages";

import "./main.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/events' component={EventList} />
        <Route path='/event-calendar' component={EventCalendar} />
        <Route path='/sermons' exact component={SermonList} />
        <Route path='/sermon/:id' component={Sermon} />
        <Route path='/blog' exact component={Blog} />
        <Route path='/blog/:id' component={BlogSingle} />
      </Switch>
    </Router>
  );
};

export default App;
