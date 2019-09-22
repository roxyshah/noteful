// this component controls the list of notes and the 
// addition of notes

import React from 'react';
import './NoteList.css'
import { NavLink } from 'react-router-dom';
import Note from '../Note/Note';
import ApiContext from '../ApiContext';
import PropTypes from 'prop-types';

class NoteList extends React.Component{

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

                <NavLink to={'/addNote/'} >
                    <button 
                        type='button' 
                        className='List-add-button'>
                        + Add Note
                    </button>
                </NavLink>
            </section>
        )
    }
}


NoteList.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    modified: PropTypes.string.isRequired,
    folderId: PropTypes.string.isRequired,
    onClickDelete: () => {}
}

export default NoteList;
