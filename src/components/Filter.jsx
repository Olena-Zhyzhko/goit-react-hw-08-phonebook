import React, { Component } from 'react'
import { nanoid } from 'nanoid'


export class Filter extends Component {
  filterId = nanoid();

  render() {
    return (
        <div>
            <label htmlFor={this.filterId}>Find contacts by name</label>
            <input
                id={this.filterId}
                type="text"
                name="filter"
                value={this.props.filter}
                onChange={this.props.handleChange}
            />
        </div>
    )
  }
}
