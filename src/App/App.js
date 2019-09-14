import React, { Component } from 'react';
import STORE from '../dummy-store';
import './App.css'

import { Route } from 'react-router-dom';
import Header from '../Header/Header'
import NoteList from '../NoteList/NoteList';
import FolderList from '../FolderList/FolderList';
import NoteContent from '../NoteContent/NoteContent';


class App extends Component {

  state = {
    store: STORE,
  };

  render() {
    return (
      <main className='App'>
          <Route
            exact path='/'
            render= {() => {
              return <div>
                  <Header />
                  <div className='App-content'>
                    <NoteList notes={STORE.notes} />
                    <FolderList folders = {STORE.folders} />
                  </div>    
                </div>
            }}
          />

          <Route 
            path='/folder/:folderId'
            render= {(props) => {
              return <div>
                  <Header />
                  <button 
                    type='button' 
                    className='back-button'
                    onClick={() => props.history.goBack()}
                    >Back
                  </button>

                  <div className='App-content'>
                    <NoteList notes={STORE.notes} folderId={props.match.params.folderId}/>
                    <FolderList folders = {STORE.folders} />
                  </div>    
                </div>
            }}
          />

          <Route 
            path='/note/:noteId'
            render= {(props) => {
              return <div>
                  <Header />
                  <button 
                    type='button' 
                    className='back-button'
                    onClick={() => props.history.goBack()}
                    >Back
                  </button>
                  <div className='App-content'>
                    <NoteList notes={STORE.notes} folderId={props.match.params.folderId}/>
                    <FolderList folders = {STORE.folders} />
                    <NoteContent content={STORE.notes.find(note => props.match.params.noteId === note.id).content} />
                  </div>    
                </div>
            }}
          />
      </main>
    );
  }
} 

export default App;
