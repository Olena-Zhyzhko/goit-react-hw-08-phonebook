import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { Lable, Input } from 'components/Form.styled'



export class Filter extends Component {
  filterId = nanoid();

  render() {
    return (
        <div>
            <Lable htmlFor={this.filterId}>Find contacts by name</Lable>
            <Input
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
