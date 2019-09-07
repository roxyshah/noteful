import React from 'react';
import { Link } from 'react-router-dom';
import './NoteContent.css';

export default function NoteContent(props) {
    return (
        <p>{props.content}</p>
    )
}