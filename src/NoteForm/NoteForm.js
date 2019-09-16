import React from 'react';
import './NoteForm.css';

export default function NoteForm(props) {
    
    return (
        <form action='#'>
            <label for='noteName'>Note Name</label>
            <input type='text' name='noteName' id='note-name' placeholder='note name' />
        </form>
    )
}