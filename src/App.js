import React, { Component } from 'react';
import STORE from './dummy-store';

import Card from './Card/Card';


class App extends Component {

  state = {
    store: STORE,
  };

  render() {
    const Cards = STORE.notes.map(note => <Card name={note.name} modified={note.modified} />);
    return (
      <main className='App'>
        {Cards}
      </main>
    );
  }
} 

export default App;
