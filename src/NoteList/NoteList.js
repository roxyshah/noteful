import React from 'react';
import './NoteList.css'
import Note from '../Note/Note';

export default function NoteList(props){
    
    const notes = props.notes
        .filter(note => props.folderId ? note.folderId === props.folderId : true)
        .map(note => <Note name={note.name} modified={note.modified} id={note.id} />);
    
    return (
        <section className='NoteList'>
            {notes}

            <button 
            type='button' 
            className='List-add-button'
            onClick={() => props.onClickAdd(props.id)}
            >+ Add Note</button>
        </section>
    )
}