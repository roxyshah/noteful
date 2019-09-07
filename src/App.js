import React, { Component } from 'react';
import STORE from './dummy-store';
import './App.css'

import { Route } from 'react-router-dom';
import Header from './Header/Header'
import NoteList from './NoteList/NoteList';
import FolderList from './FolderList/FolderList';


class App extends Component {

  state = {
    store: STORE,
  };

  render() {
    return (
      <main className='App'>
          <Route>
            <Header />
            <div className='App-content'>
              <NoteList notes = {STORE.notes} />
              <FolderList folders = {STORE.folders} />
            </div>
          </Route>
      </main>
    );
  }
} 

export default App;
