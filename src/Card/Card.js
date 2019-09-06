import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div className='Card'>
            <button
                type='button'
                onClick={() => props.onClickDelete(props.id)}
            >delete note</button>

            <h3>{props.name}</h3>
            <p>{props.modified}</p>
        </div>   
    )
}

Card.propTypes = {
    onClickDelete: () => {}
}