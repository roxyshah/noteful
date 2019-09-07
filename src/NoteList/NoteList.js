import React from 'react';
import './NoteList.css'
import Note from '../Note/Note';

export default function NoteList(props){
    
    const notes = props.notes.map(note => <Note name={note.name} modified={note.modified} />);
    
    return (
        <section className='NoteList'>
            <header className='NoteList-header'><h2>{props.header}</h2></header>
            <div className='NoteList-notes'></div>
              {notes} 
        </section>
    )
}