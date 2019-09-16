import React, { Component } from 'react';
import STORE from '../dummy-store';
import './App.css'

import { Route } from 'react-router-dom';
import Header from '../Header/Header'
import NoteList from '../NoteList/NoteList';
import FolderList from '../FolderList/FolderList';
import NoteContent from '../NoteContent/NoteContent';
import NoteForm from '../NoteForm/NoteForm';


class App extends Component {

  state = {
    notes: [],
    folders: []
  };

  componentDidMount() {
    setTimeout(() => this.setState(STORE), 200);
  }

  render() {
    return (
      <main className='App'>
          <Route
            exact path='/'
            render= {() => {
              return <div>
                  <Header />
                  <div className='App-content'>
                    <NoteList notes={this.state.notes} />
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
                      notes={this.state.notes} 
                      folderId={props.match.params.folderId} 
                      onClickAdd={() => {}}
                      onClickDelete={() => {}}/>
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
                    <NoteList notes={this.state.notes} folderId={props.match.params.folderId}/>
                    <FolderList folders = {this.state.folders} />
                    <NoteContent content={this.state.notes.find(note => props.match.params.noteId === note.id).content} />
                  </div>    
                </div>
            }}
          />
      </main>
    );
  }
} 

export default App;
