import React, { Component } from 'react';
import AddItem from './AddItem';
import List from './List';

export default class ToDoApp extends Component {
  state = {
    items: []
  };

  handleAddItem = (event, item) => {
    event.preventDefault();
    console.log(item);
    this.setState({
      items: this.state.items.concat(item)
    });
  };

  deleteItem = index => {
    this.setState({
      items: this.state.items.filter((item, i) => {
        return i !== index;
      })
    });
  };

  render() {
    console.log(this.state.items);
    return (
      <div className='ToDoApp'>
        <AddItem handleAddItem={this.handleAddItem} />
        <List deleteItem={this.deleteItem} items={this.state.items} />
      </div>
    );
  }
}
