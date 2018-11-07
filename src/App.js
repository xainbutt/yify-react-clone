import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './containers/Home';
import Navbar from './components/Shared/Navbar';
import Movie from './containers/Movie';
import MovieDetail from './components/Movie/MovieDetail';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Navbar/>
                <Route path="/" exact component={Home} />
                <Route path="/movies" exact component={Movie} />
                <Route path="/movies/:id" exact component={MovieDetail} />
            </div>
        </Router>
    );
  }
}

export default App;
