import React from 'react';
import { Link } from 'react-router-dom';
import './Note.css';

export default function Note(props) {
    return (
        <Link to={'/note/' + props.id}>
            <div className='Note'>
                <button
                    type='button'
                    onClick={() => props.onClickDelete(props.id)}
                >delete note</button>

                <h3>{props.name}</h3>
                <p>{props.modified}</p>
            </div>
        </Link>   
    )
}

Note.propTypes = {
    onClickDelete: () => {}
}