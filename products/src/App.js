import React, { Component } from 'react';
import './App.css';
import ProductListContainer from "./components/ProductListContainer";
import ProductDetailComponent from "./components/ProductDetailComponent"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/:id' component={ProductDetailComponent} />
            <Route exact path='/' component={ProductListContainer} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
