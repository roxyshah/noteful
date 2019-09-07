import React, { Component } from 'react';
import STORE from './dummy-store';
import './App.css'
import NoteList from './NoteList/NoteList';
import FolderList from './FolderList/FolderList';


class App extends Component {

  state = {
    store: STORE,
  };

  render() {
    return (
      <main className='App'>
        <NoteList notes = {STORE.notes} />
        <FolderList folders = {STORE.folders} />
      </main>
    );
  }
} 

export default App;
