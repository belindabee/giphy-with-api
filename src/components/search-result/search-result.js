import React from 'react'
import PropTypes from 'prop-types'
import *as CustomTypes from '../../lib/custom-types'
import SearchResults from '../search-results/search-results'

export default function SearchResult ({ result }) {
    return(
        <div>
            { result.map({results} =><SearchResults results={results} />) }
        </div>
    )
}

SearchResult.PropTypes = {
    result: PropTypes.arrayOf(CustomTypes.SearchResult),
}