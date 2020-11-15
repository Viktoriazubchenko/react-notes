import React from 'react';
import './post-add-form.scss'
export default class PostAddForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(event){
        this.setState({
            text: event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
        
    }
    render(){
        return (
            <form 
            className='bottom-panel d-flex'
            onSubmit={this.onSubmit}>
                <input
                    type='text'
                    placeholder='write smth'
                    className='form-control new-post-label'
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button 
                
                 type='submit' 
                 className='add-button btn'>
                    Add
                </button>
            </form>
        )
    }

}

