import React, { Component } from 'react';
import Header from '../Header/Header';
import ApiContext from '../ApiContext';
import './AddFolder.css';
import apiConfig from '../apiConfigs';

import ValidationError from '../ValidationError';
import AddFolderError from './AddFolderError';

class AddFolder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: {
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

    updateName(name) {
        this.setState({name: {value: name, touched: true}});
    }

    validateFolderName() {
      const name = this.state.name.value.trim();
      if (name.length === 0) {
          return "Name is required";
      } else if (name.length < 3) {
          return "Name must be at least 3 characters long";
      }
    }

    handleSubmit = e => {
        e.preventDefault()
        const folder = {
          name: e.target['folder-name'].value
        }
        fetch(`${apiConfig.API_ENDPOINT}/folders`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(folder),
        })
          .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
            return res.json()
          })
          .then(folder => {
            console.log(folder);
            this.context.addFolder(folder)
            this.props.history.push(`/folder/${folder.id}`)
            
          })
          .catch(error => {
            console.error({ error })
          })
      }

    render() {
      const nameError = this.validateFolderName();

        return (
            <>
                <Header />
                <section className='AddFolder'>
                    <h2>Add a folder</h2>
                    <form className='addFolder-form' action='#' onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='folderName'>Folder Name: </label>
                            <input 
                                type='text' 
                                name='folderName' 
                                id='folder-name' 
                                onChange={e => this.updateName(e.target.value)} />
                                {this.state.name.touched && <ValidationError message={nameError} />}
                        </div>
            
                        <div className='buttons'>
                            <button 
                              type='submit'
                              className='not-important'
                              disabled={
                                nameError
                              }>
                              + Add folder
                            </button>
                        </div>
                    </form>
                </section>
            </>
        );
    }
}

export default AddFolder;