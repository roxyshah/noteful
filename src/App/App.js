import React, { Component } from 'react';
import './App.css'

import { Route } from 'react-router-dom';

import apiConfig from '../apiConfigs';
import ApiContext from '../ApiContext';
import AddFolder from '../AddFolder/AddFolder';
import AddFolderError from '../AddFolder/AddFolderError';
import AddNote from '../AddNote/AddNote';
import MainNav from '../MainNav/MainNav';
import MainNoteNav from '../MainNoteNav/MainNoteNav';
import AppError from './AppError';

class App extends Component {

  state = {
    notes: [],
    folders: []
  };

  componentDidMount() {
    Promise.all([
      fetch(`${apiConfig.API_ENDPOINT}/notes`),
      fetch(`${apiConfig.API_ENDPOINT}/folders`)
  ])
      .then(([notesRes, foldersRes]) => {
          if (!notesRes.ok)
              return notesRes.json().then(e => Promise.reject(e));
          if (!foldersRes.ok)
              return foldersRes.json().then(e => Promise.reject(e));

          return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
          this.setState({notes, folders});
      })
      .catch(error => {
          console.error({error});
      });
  }

  handleAddNote = note => {
    const newNotesArr = this.state.notes.slice();
    newNotesArr.push(note);
    this.setState({
      notes: newNotesArr
    });
  }

  handleAddFolder = folder => {
    const newFolderArr = this.state.folders.slice();
    newFolderArr.push(folder);
    this.setState({
      folders: newFolderArr
    });
  }

  handleDeleteNote = (noteId) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    });
  }

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote,
      addFolder: this.handleAddFolder,
      addNote: this.handleAddNote
    };

    return (
      <AppError>
        <ApiContext.Provider value={value}>
          <main className='App'>
              <Route
                exact path='/'
                component={MainNav}
              />
  
              <Route 
                path='/folder/:folderId'
                component={MainNav}
              />
  
              <Route 
                path='/note/:noteId'
                component={MainNoteNav}
              />
  
              <Route
                path='/addFolder'
                render={() => {
                  return (
                    <AddFolderError>
                      <AddFolder />
                    </AddFolderError>
                  );
                }}
              />
  
              <Route
                path='/addNote'
                component={AddNote}
              />
          </main>
        </ApiContext.Provider>
      </AppError>
    );
  }
} 

export default App;
