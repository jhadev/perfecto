import React, { Component } from 'react';
import API from './utils/API';
import Container from './components/common/Container';
import Card from './components/common/Card';
import ColContainer from './components/common/ColContainer';
import Column from './components/common/Column';
import Message from './components/common/Message';
import Title from './components/Title';
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
        <Title title="Perfecto Importers" />
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
                  <Message color="is-danger" title={wine.varietal}>
                    <ul>
                      <li>Size: {wine.size}</li>
                      <li>Vintage: {wine.vintage}</li>
                      <li>Bottle Price: {wine.bottle_price}</li>
                      <li>Case Size: {wine.case_size}</li>
                      <li>Case Price: {wine.case_price}</li>
                      <li>Description: {wine.description}</li>
                    </ul>
                  </Message>
                </Card>
              </Column>
            ))
          ) : (
            <h2 className="is-size-2 has-text-centered">Loading wines...</h2>
          )}
        </ColContainer>
      </Container>
    );
  }
}

export default App;
