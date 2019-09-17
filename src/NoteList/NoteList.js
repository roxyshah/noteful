// this component controls the list of notes and the 
// addition of notes

import React from 'react';
import './NoteList.css'
import Note from '../Note/Note';
import ApiContext from '../ApiContext';

export default class NoteList extends React.Component{

    static contextType = ApiContext;
    
    render() {
        const notes = this.context.notes
            .filter(note => this.props.folderId ? note.folderId === this.props.folderId : true)
            .map(note => <Note 
                name={note.name} 
                modified={note.modified} 
                id={note.id}
                key={note.id} 
                onClickDelete={this.props.onClickDelete}
                redirectAfterDelete={this.props.redirectAfterDelete}/>);
    
        return (
            <section className='NoteList'>
                {notes}

                <button 
                type='button' 
                className='List-add-button'
                onClick={() => this.props.onClickAdd({name:"hello", modified: Date.now, id: "0"})}
                >+ Add Note</button>
            </section>
        )
    }

}
