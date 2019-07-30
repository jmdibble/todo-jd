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

  render() {
    console.log(this.state.text);
    return (
      <div>
        <form>
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
