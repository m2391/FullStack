import React from 'react'

const FilterPerson = (props) => {
    return (
        <form>
        Search: 
        <input
            value={props.newSearch}
            onChange={props.handleSearchChange} />
            <br />
        </form> 
    ) 
}

export default FilterPerson