import React, { Component } from 'react';
import STORE from '../dummy-store';
import './App.css'

import { Route } from 'react-router-dom';
import Header from '../Header/Header'
import NoteList from '../NoteList/NoteList';
import FolderList from '../FolderList/FolderList';
import NoteContent from '../NoteContent/NoteContent';
// import NoteForm from '../NoteForm/NoteForm';
import apiConfig from '../apiConfigs';
import ApiContext from '../ApiContext';


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

  handleDeleteNote = (noteId) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    });
  }

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote
  };

    return (
      <ApiContext.Provider value={value}>
        <main className='App'>
            <Route
              exact path='/'
              render= {() => {
                return <div>
                    <Header />
                    <div className='App-content'>
                      <NoteList 
                        onClickAdd={this.handleAddNote} 
                        onClickDelete={this.handleDeleteNote}
                        redirectAfterDelete={''} />
                      <FolderList folders = {this.state.folders} />
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

                    {/* we're using this.state on the onClickAdd button, because it's something that's going to change over time */}
                    <div className='App-content'>
                      <NoteList 
                        folderId={props.match.params.folderId} 
                        onClickAdd={this.handleAddNote}
                        onClickDelete={this.handleDeleteNote}
                        redirectAfterDelete={''}/>
                      <FolderList folders = {this.state.folders} />
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
                      <NoteList 
                        folderId={props.match.params.folderId}
                        onClickAdd={this.handleAddNote}
                        onClickDelete={(noteId) => {
                          props.history.push('/');
                          this.handleDeleteNote(noteId);
                        }}
                        redirectAfterDelete={'/'}/>

                      <FolderList folders = {this.state.folders} />
                      <NoteContent content={this.state.notes.find(note => props.match.params.noteId === note.id).content} />
                    </div>    
                  </div>
              }}
            />
        </main>
      </ApiContext.Provider>
    );
  }
} 

export default App;
