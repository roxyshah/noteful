import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './NoteContent.css';

export default function NoteContent(props) {
    return (
        <Fragment>
            <p>{props.content}</p>
        </Fragment>
    );
}

NoteContent.propTypes = {
    content: PropTypes.string.isRequired
};
