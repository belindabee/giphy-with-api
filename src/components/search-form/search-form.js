import React from 'react'
import PropTypes from 'prop-types'

export default function SearchForm ({ onSearchSubmitted }) {
    return (
        <form>
            <input type='text' placeholder='find me Giphy...' />
            <input type='submit' value='search' />
        </form>
    )
}

SearchForm.proptypes = {
    onSearchSubmitted: PropTypes.func.isRequired,
}