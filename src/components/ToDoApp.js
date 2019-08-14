import React, { Component } from 'react';
import AddItem from './AddItem';
import List from './List';

export default class ToDoApp extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    const items = localStorage.getItem('items');
    const parsedList = JSON.parse(items);

    this.setState({
      items: parsedList || []
    });
  }

  handleAddItem = (event, item) => {
    event.preventDefault();
    // console.log(item);
    this.setState(
      {
        items: this.state.items.concat(item)
      },
      () => this.handleStoreItem()
    );
  };

  handleStoreItem = () => {
    const items = this.state.items;
    localStorage.setItem('items', JSON.stringify(items));
  };

  deleteItem = index => {
    var arr = this.state.items;
    arr.splice(index, 1);

    this.setState({ items: arr }, () => {
      localStorage.setItem('items', JSON.stringify(this.state.items));
    });
  };

  render() {
    // console.log(this.state.items);
    // console.log(localStorage.getItem('items'));
    // console.log(this.state.items);
    return (
      <div className='ToDoApp'>
        <AddItem handleAddItem={this.handleAddItem} />
        <List deleteItem={this.deleteItem} items={this.state.items} />
      </div>
    );
  }
}
