import React from "react";
import Nav from "./component/Nav";
import searchPage from "./component/SearchPage";
import searchHistory from "./component/SearchHistory";
import detailsPage from "./component/DetailsPage";

import "./App.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//creates the react router
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        <Route path="/" exact component={searchPage}/>
        <Route path="/searchHistory" component={searchHistory}/>
        <Route path="/detailsPage" component={detailsPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

