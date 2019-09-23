import React, { Component } from 'react';
import Header from '../Header/Header';
import FolderList from '../FolderList/FolderList';
import NoteList from '../NoteList/NoteList';
import ApiContext from '../ApiContext'

class MainNav extends Component {

    static contextType = ApiContext;

    render() {
        const folderId=this.props.match.params.folderId;

        return(
            <div>
                <Header />
                {folderId && (
                    <button 
                        type='button' 
                        className='back-button'
                        onClick={() => this.props.history.goBack()}
                        >Back
                    </button>
                )}

                <div className='App-content'>
                  <NoteList 
                    folderId={folderId}
                    onClickAdd={this.context.addNote} 
                    onClickDelete={this.context.deleteNote}
                    redirectAfterDelete={''} />
                  <FolderList folders = {this.context.folders} />
                </div>
            </div>
        );
    }
}

export default MainNav;