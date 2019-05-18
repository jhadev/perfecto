import React, { Component } from 'react';
import API from './utils/API';

class App extends Component {
  state = {
    wines: []
  };

  componentDidMount() {
    this.retrieveWines();
  }

  retrieveWines = () => {
    API.getWines().then(res => {
      this.setState({ wines: res.data });
    });
  };

  render() {
    const { wines } = this.state;

    return (
      <div className="container">
        <h1 className="my-5">THIS IS A TEST</h1>
        <div>
          {wines.length > 0 ? (
            wines.map(wine => (
              <div key={wine.id}>
                <h3>{wine.name}</h3>
                <ul>
                  <li>Name: {wine.name}</li>
                  <li>Size: {wine.size}</li>
                  <li>Vintage: {wine.vintage}</li>
                  <li>Varietal: {wine.varietal}</li>
                  <li>Bottle Price: {wine.bottle_price}</li>
                  <li>Case Size: {wine.case_size}</li>
                  <li>Case Price: {wine.case_price}</li>
                  <li>Description: {wine.size}</li>
                </ul>
              </div>
            ))
          ) : (
            <h2>Loading wines...</h2>
          )}
        </div>
      </div>
    );
  }
}

export default App;
