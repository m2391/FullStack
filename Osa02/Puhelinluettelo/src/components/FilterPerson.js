import React from 'react'
//Etsitään tietokannasta henkilöä
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