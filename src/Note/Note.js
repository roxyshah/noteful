import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import './Note.css';

export default class Note extends Component {
    render() {
        return (
            <div className='Note'>
                <Link to={'/note/' + this.props.id}>
                        <h3>{this.props.name}</h3>
                        <p>{format(this.props.modified, "Do MMM YYYY")}</p>
                </Link>
    
                <button
                    type='button'
                    onClick={() => {
                        this.props.onClickDelete(this.props.id);
                    }}>delete note
                </button>
            </div>
        );
    }
}

Note.propTypes = {
    name: PropTypes.string.isRequired,
    onClickDelete: () => {}
}