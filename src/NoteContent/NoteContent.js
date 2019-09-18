import React from 'react';
import PropTypes from 'prop-types';
import './NoteContent.css';

export default function NoteContent(props) {
    return (
        <p>{props.content}</p>
    )
}

NoteContent.propTypes = {
    content: PropTypes.string.isRequired
};
