import React, { Component } from 'react';
import STORE from './dummy-store';

import Card from './Card/Card';


class App extends Component {

  state = {
    store: STORE,
  };

  render() {
    return (
      <main className='App'>
        <Card name="name" modified="3rd Jan 2019" />
      </main>
    );
  }
} 

export default App;
