import React from 'react';
import './FolderForm.css';

export default function FolderForm(props) {
    
    return (
        <form action='#'>
            <label for='folderName'>Folder Name</label>
            <input type='text' name='folderName' id='folder-name' placeholder='folder name' />
        </form>
    )
}