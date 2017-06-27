import React, { Component } from 'react';
import Card from './components/card'

class App extends Component {
  
  render() {
    const { container } = style;

    return (
      <div style={container}>
        <Card />
        <Card />
      </div>
    );
  }
}

const style = {
  container: {
    'listStyle': 'none',
    'width': '600px',
    'margin': '0 auto',
  },
};

export default App;
