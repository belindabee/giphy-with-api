import React from 'react'
import *as CustomTypes from '../../lib/custom-types'

export default function SearchResults ({  }) {
    const { thumbnail } = results;
    return (
        <img src={thumnail} />
    )
}

SearchResults.PropTypes = {
    result: CustomTypes.SearchResult.isRequired
}