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
    console.log(this.state);
    return <h1 className="text-center my-5">THIS IS A TEST</h1>;
  }
}

export default App;
