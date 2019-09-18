import React, { Component } from 'react';
import Header from '../Header/Header';
import FolderList from '../FolderList/FolderList';
import NoteContent from '../NoteContent/NoteContent';
import ApiContext from '../ApiContext'

class MainNoteNav extends Component {

    static contextType = ApiContext;

    render() {
        const noteId=this.props.match.params.noteId;

        const note = this.context.notes.find(singleNote => singleNote.id === noteId);

        if (!note) {
            this.props.history.push('/');
            return (<></>);
        }

        return(
            <div className='wrapper'>
                <Header />
                {noteId && (
                    <button 
                        type='button' 
                        className='back-button'
                        onClick={() => this.props.history.goBack()}
                        >Back
                    </button>
                )}

                <h2>{note.name}</h2>

                <div className='App-content'>
                    <FolderList folders = {this.context.folders} />
                    <NoteContent content={this.context.notes.find(note => noteId === note.id).content} />
                </div>    
          </div>
        );
    }
}

export default MainNoteNav;


