import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './Note.css';
import ApiContext from '../ApiContext';

export default function Note(props) {

    return (
        <div className='Note'>
            <Link to={'/note/' + props.id}>
                    <h3>{props.name}</h3>
                    <p>{format(props.modified, "Do MMM YYYY")}</p>
            </Link>

            <button
                type='button'
                onClick={() => {
                    props.onClickDelete(props.id);
                }}>delete note
            </button>
        </div>
    )
}

Note.contextType = ApiContext;
Note.propTypes = {
    onClickDelete: () => {}
}