import React from 'react';
import { NavLink } from 'react-router-dom';
import './FolderList.css'
import Folder from '../Folder/Folder';
import PropTypes from 'prop-types';

export default function FolderList(props){
    
    const folders = props.folders.map(folder => <Folder id={folder.id} name={folder.name} key={folder.id}/>);
    
    return (
        <section className='FolderList'>
            {folders}

            <NavLink 
                to={'/addFolder/'} >
                <button 
                    type='button' 
                    className='List-add-button'
                    >+ Add Folder
                </button>
            </NavLink>
        </section>
    )
}

FolderList.propTypes = {
    folders: PropTypes.array
};