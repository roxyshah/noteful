import React from 'react';
import './Folder.css';

export default function Folder(props) {
    return (
        <div className='Folder'>
            <h3>{props.name}</h3>
            Click folder here to navigate to the Notes within Folder
        </div>   
    )
}
