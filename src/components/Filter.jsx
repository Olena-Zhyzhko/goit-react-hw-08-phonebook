import React from 'react'
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import { Lable, Input } from 'components/Form.styled'

export const Filter = ({ filter, handleChange, cleanFilter}) => {
  const filterId = nanoid();

    return (
        <div>
            <Lable htmlFor={filterId}>Find contacts by name</Lable>
            <Input
                id={filterId}
                type="text"
                name="filter"
                value={filter}
                onChange={handleChange}
                onBlur={cleanFilter}
            />
        </div>
    )
}
  
Filter.propTypes = {
    filter: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    cleanFilter: PropTypes.func.isRequired,
}