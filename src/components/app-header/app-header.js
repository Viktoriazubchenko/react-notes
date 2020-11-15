import React from 'react';
import './app-header.scss';

const AppHeader = ({allPosts, liked}) => {
    return(
    
        <div className='app-header'>
            <h1>MY <span>REACT</span> NOTES</h1>
            <h2><badge className='badge'>{allPosts}</badge> notes, <badge className='badge badge-pink'>{liked}</badge> favorite notes</h2>
        </div>
      
        
    )
}

export default AppHeader;