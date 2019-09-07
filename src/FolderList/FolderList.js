import React from 'react';
import './FolderList.css'
import Folder from '../Folder/Folder';

export default function FolderList(props){
    
    const folders = props.folders.map(folder => <Folder id={folder.id} name={folder.name}  />);
    
    return (
        <section className='FolderList'>
            {folders} 
        </section>
    )
}