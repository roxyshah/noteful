import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Folder.css';


export default class Folder extends Component {
    render() {
        return (
            <NavLink to={'/folder/' + this.props.id} >
                <div className='Folder'>
                    <h3>{this.props.name}</h3>
                </div> 
            </NavLink> 
        );
    }
}

Folder.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    modified: PropTypes.string.isRequired,
};