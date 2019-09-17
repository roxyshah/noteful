import React, { Component } from 'react';
import './AddNote.css';

import ValidationError from '../ValidationError';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: '',
                touched: false
            },
            content: {
                value: '',
                touched: false
            },
            folder: {
                value: '',
                touched: false
            }
        }
    }

    updateName(name) {
        this.setState({name: {value: name, touched: true}});
    }

    updateContent(content) {
        this.setState({content: {value: content, touched: true}});
    }

    updateFolder(folder) {
        this.setState({folder: {value: folder, touched: true}});
    }

    handleSubmit(event) {
        event.preventDefault();
        const { name, content, folder } = this.state;

        console.log('Name: ', name.value);
        console.log('content', content.value);
        console.log('folder', folder.value);
    }

    validateName(fieldValue) {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return "Name is required";
        } else if (name.length < 3) {
            return "Name must be at least 3 characters long";
        }
    }

    render() {
        const nameError = this.validateName();

        return (
            <form className='addNote-form' action='#' onSubmit={e => this.handleSubmit(e)}>
                <div className='form-group'>
                    <label htmlFor='name'>Note Name</label>
                    <input 
                        type='text' 
                        name='name' 
                        id='name' 
                        placeholder='note name'
                        onChange={e => this.updateName(e.target.value)} 
                    />
                   {this.state.name.touched && <ValidationError message={nameError} />} 
                </div>

                <div className='form-group'>
                    <label htmlFor='content'>Content</label>
                    <input 
                        type='text' 
                        name='content' 
                        id='content' 
                        onChange={e => this.updateContent(e.target.value)} 
                    />
                   {/* {this.state.content.touched && <ValidationError message={nameError} />}  */}
                </div>

                <div className='form-group'>
                    <label htmlFor='folder'>Folder </label>
                    <input 
                        type='text' 
                        name='folder' 
                        id='folder' 
                        onChange={e => this.updateFolder(e.target.value)} 
                    />
                   {/* {this.state.folder.touched && <ValidationError message={nameError} />}  */}
                </div>
            </form>
        );
    }
}

export default AddNote;


