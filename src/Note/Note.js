import React from 'react';
import './Note.css';

export default function Note(props) {
    return (
        <div className='Note'>
            <button
                type='button'
                onClick={() => props.onClickDelete(props.id)}
            >delete note</button>

            <h3>{props.name}</h3>
            <p>{props.modified}</p>
        </div>   
    )
}

Note.propTypes = {
    onClickDelete: () => {}
}