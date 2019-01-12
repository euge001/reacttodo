import React, { Component } from "react";

import "./add-list-item.css";

export default class AddListItem extends Component {
  state = {
    label: ""
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label: ""
    });
  };

  render() {
    return (
      <form className="d-flex mt-3" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control search-input"
          placeholder="add new item"
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button type="submit" className="btn btn-info">
          Add Item
        </button>
      </form>
    );
  }
}
