import React from 'react'
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import { Lable, Input } from 'components/Form.styled'
import { useSelector, useDispatch } from "react-redux";
import { filter } from '../redux/filterSlice'



export const Filter = () => {
  const filterId = nanoid();

    const dispatch = useDispatch();
  const filterName = useSelector(state => state.filter);

    
    return (
        <div>
            <Lable htmlFor={filterId}>Find contacts by name</Lable>
            <Input
                id={filterId}
                type="text"
                name="filter"
                value={filterName}
                onChange={(e) => {
                    const { value } = e.target;
                    dispatch(filter(value));
                }}
                // onBlur={() => dispatch(filter(''))}
            />
        </div>
    )
}
  
// Filter.propTypes = {
//     filter: PropTypes.string,
//     handleChange: PropTypes.func.isRequired,
//     cleanFilter: PropTypes.func.isRequired,
// }