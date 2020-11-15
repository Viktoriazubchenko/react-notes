import React from 'react';
import './post-status-filter.scss';

export default class PostStatusFilter extends React.Component{
    constructor(props){
        super(props);
        this.buttons =[
            { name: 'all', label: 'All' },
            { name: 'like', label: 'Liked' },

        ]
    }
    render(){
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'btn-red' : 'btn-normal';
            return(
            <button
            onClick={() => this.props.onFilterSelect(name)} 
            type='button' 
            key={name}  
            className={`btn btn-lg ${clazz}`}>{label}</button>
            )
        });
        return(
            <div className='btn-group'>
                {buttons}
            </div>
        )
        
    }
        
    }
    


