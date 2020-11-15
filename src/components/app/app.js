import React from 'react';
import PostStatusFilter from './../post-status-filter';
import AppHeader from './../app-header';
import SearchPanel from './../search-panel';
import PostList from './../post-list';
import PostAddForm from './../post-add-form';
import './app.scss';
import './index.css';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {label: 'Computers are fast; programmers keep it slow', important: false, like: false, id: 1},
                {label: 'Copy-and-Paste was programmed by programmers for programmers actually.', important: false, like: false, id: 2 },
                {label: 'There are two ways to write error-free programs; only the third works.',  important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)
        this.maxId = 4;
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.onToggleLike = this.onToggleLike.bind(this)
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
        this.onFilterSelect = this.onFilterSelect.bind(this)
    }
    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(element => element.id === id)
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newData = [...before, ...after];

            return {
                data: newData
            }
            
        })
    }

    addItem(body){
        const newItem = {
            label: body,
            important: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const biggerData = [...data, newItem];

            return {
                data: biggerData
            }
        })
    }

    onToggleImportant(id){
        this.setState(({data}) => {
            const index = data.findIndex(element => element.id === id);
            const old = data[index];
            const newItem = {...old, important: !old.important}
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newData = [...before, newItem, ...after];
            return {
                data: newData
            }
        })
    }

    onToggleLike(id){
        this.setState(({data}) => {
            const index = data.findIndex(element => element.id === id);
            const old = data[index];
            const newItem = {...old, like: !old.like}
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newData = [...before, newItem, ...after];
            return {
                data: newData
            }
        })
    }

    searchPost(items, term){
        if(term.length === 0){
            return items;
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        })
    }

    filterPost(items, filter){
        if(filter === 'like'){
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }
    
    onUpdateSearch(term){
        this.setState({term});
    }

    onFilterSelect(filter){
        this.setState({filter});
    }

    render(){
        const {data, term, filter} = this.state;
        const allPosts = data.length;
        const liked = data.filter(item => item.like).length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
        return(
            <div className= 'wrapper'>
            <div className='app'>
                <AppHeader
                liked={liked}
                allPosts={allPosts}/>
                <div className='search-panel d-flex container'>
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList posts={visiblePosts}
                onDelete={ this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleLike={this.onToggleLike}/>
                <PostAddForm
                onAdd={this.addItem}/>  
            </div>
            </div>
        )
    }
    
}

