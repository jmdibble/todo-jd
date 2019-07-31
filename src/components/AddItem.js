import React, { Component } from 'react';

export default class AddItem extends Component {
  state = {
    text: ''
  };

  handleUpdateText = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmitClear = event => {
    this.props.handleAddItem(event, this.state.text);
    this.setState({ text: '' });
  };

  render() {
    // console.log(this.state.text);
    // console.log(this.props);
    return (
      <div>
        <form onSubmit={event => this.handleSubmitClear(event)}>
          <input
            onChange={event => this.handleUpdateText(event)}
            placeholder='Add Item'
            value={this.state.text}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
