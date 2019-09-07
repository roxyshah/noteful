import React from 'react';
import { Link } from 'react-router-dom';
import './Folder.css';


export default function Folder(props) {
    return (
            <Link to={'/folder/' + props.id} >
                <div className='Folder'>
                    <h3>{props.name}</h3>
                </div> 
            </Link> 
 
    )
}
