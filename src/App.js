import React from 'react';
import Mission from './Mission';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
          <div className="App">
          <Router>
          <Switch>
            <Route exact path="/" component={Mission} />
            {/* <Route path="/resume" component={Resume} />
            <Route path="/projects" component={projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/aboutme" component={Aboutme} />
            <Route path="/metrics" component={Metrics} /> */}
            {/* <Route component={Default} /> */}
          </Switch>
          </Router>

          </div>
  );
}

export default App;
