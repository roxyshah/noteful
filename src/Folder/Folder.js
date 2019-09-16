import React from 'react';
import { NavLink } from 'react-router-dom';
import './Folder.css';


export default function Folder(props) {
        return (
            <NavLink to={'/folder/' + props.id} >
                <div className='Folder'>
                    <h3>{props.name}</h3>
                </div> 
            </NavLink> 
    )
}
