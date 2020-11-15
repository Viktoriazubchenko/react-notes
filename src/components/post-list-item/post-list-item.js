import React from 'react';
import './post-list-item.scss'

export default class PostListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            important: false,
            like: false
        };
}

    render(){
        const {label, onToggleImportant, onToggleLike, important, like} = this.props;
        
        let classNames = 'app-list-item d-flex justify-content-between';
            if(important){
                classNames+=' important';
            }
            if(like){
                classNames+=' like';
            }
        return(
            <div className={classNames}>
                <span className='app-list-item-label'>
                    {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={onToggleImportant} type='button' className='btn-sm btn-star'>
                        <i className='fa fa-star'></i>
                    </button>
                    <button onClick={this.props.onDelete} type='button' className='btn-sm btn-trash'>
                        <i className='fa fa-trash-o'></i>
                    </button>
                    <i  onClick={onToggleLike} className='fa fa-heart'></i>
                </div>
            </div>
        )
    }
}




