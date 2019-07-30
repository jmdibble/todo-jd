import React, { Component } from 'react';
import ListItem from './ListItem';
import AddItem from './AddItem';
import List from './List';

export default class ToDoApp extends Component {
  state = {
    items: []
  };

  handleAddItem = item => {
    this.setState({
      items: this.state.items.push(item)
    });
  };

  render() {
    return (
      <div className='ToDoApp'>
        <AddItem handleAddItem={this.handleAddItem} />
        <List />
      </div>
    );
  }
}

// todo
//
