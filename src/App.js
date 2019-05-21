import React, { Component } from 'react';
import API from './utils/API';
import Container from './components/common/Container';
import Card from './components/common/Card';
import ColContainer from './components/common/ColContainer';
import Column from './components/common/Column';
import 'bulma-helpers/css/bulma-helpers.min.css';

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
      <Container>
        <h1 className="has-margin-top-15 has-margin-bottom-15 is-size-1 has-text-centered">
          THIS IS A TEST
        </h1>
        <ColContainer>
          {wines.length > 0 ? (
            wines.map(wine => (
              <Column key={wine.id}>
                <Card
                  title={wine.name}
                  image={wine.image}
                  subtitle={wine.varietal}
                  helper="has-margin-top-15 has-margin-bottom-15"
                >
                  <div>
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
                </Card>
              </Column>
            ))
          ) : (
            <h2>Loading wines...</h2>
          )}
        </ColContainer>
      </Container>
    );
  }
}

export default App;
