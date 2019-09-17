import React, { Component } from 'react';
import ApiContext from '../ApiContext';
import './AddFolder.css';
import apiConfig from '../apiConfigs';

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
        return (
            <form className='addFolder-form' action='#' onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='folderName'>Folder Name</label>
                    <input 
                        type='text' 
                        name='folderName' 
                        id='folder-name' 
                        placeholder='folder name'
                        onChange={e => this.updateName(e.target.value)} />
                </div>

                <div className='buttons'>
                    <button type='submit'>
                      Add folder
                    </button>
                </div>
            </form>
        );
    }
}

export default AddFolder;