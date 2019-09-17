import React, { Component } from 'react';
import ApiContext from '../ApiContext';
import apiConfig from '../apiConfigs';
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

    static defaultProps = {
        history: {
          push: () => { }
        },
      }

    static contextType = ApiContext;

    updateNoteName(name) {
        this.setState({name: {value: name, touched: true}});
    }

    updateNoteContent(content) {
        this.setState({content: {value: content, touched: true}});
    }

    updateNoteFolder(folder) {
        console.log(folder);
        this.setState({folder: {value: folder, touched: true}});
    }

    handleSubmit = event => {
        event.preventDefault();
        const { name, content, folder } = this.state;
        const newNote = { 
            name: name.value, 
            content: content.value, 
            folderId: folder.value, 
            modified: new Date() 
        };

        console.log(newNote);
        fetch(`${apiConfig.API_ENDPOINT}/notes`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(newNote),
          })
            .then(res => {
              if (!res.ok)
                return res.json().then(e => Promise.reject(e))
              return res.json()
            })
            .then(note => {
              this.context.addNote(note)
              this.props.history.push(`/folder/${note.folderId}`)
            })
            .catch(error => {
              console.error({ error })
            })
    }

    validateNoteName(fieldValue) {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return "Name is required";
        } else if (name.length < 3) {
            return "Name must be at least 3 characters long";
        }
    }

    render() {
        const nameError = this.validateNoteName();

        return (
            <section className='AddNote'>
                <h2>Add a note</h2>
                <form className='addNote-form' onSubmit={this.handleSubmit}>
                    <div className='note-field'>
                        <label htmlFor='note-name'>Note Name: </label>
                        <input 
                            type='text' 
                            name='note-name' 
                            id='note-name' 
                            onChange={e => this.updateNoteName(e.target.value)} 
                        />
                       {this.state.name.touched && <ValidationError message={nameError} />} 
                    </div>

                    <div className='note-field'>
                        <label htmlFor='note-content'>Content: </label>
                        <input 
                            type='text' 
                            name='note-content' 
                            id='note-content' 
                            onChange={e => this.updateNoteContent(e.target.value)} 
                        />
                       {/* {this.state.content.touched && <ValidationError message={nameError} />}  */}
                    </div>

                    <div className='note-field'>
                        <label htmlFor='note-folder'>Folder: 
                            <select 
                                value={this.state.folder.value} 
                                onChange={e => this.updateNoteFolder(e.target.value)}>
                                {this.context.folders.map(folder => <option value={folder.id} key={folder.id}>{folder.name}</option>)}
                            </select>
                        </label>
                       {/* {this.state.folder.touched && <ValidationError message={nameError} />}  */}
                    </div>

                    <div className='buttons'>
                        <button type='submit'>
                          + Add Note
                        </button>
                    </div>
                </form>
            </section>
        );
    }
}

export default AddNote;


