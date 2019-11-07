import React from 'react'
import PropTypes from 'prop-types'
import *as CustomTypes from '../../lib/custom-types'

export default function SearchResult ({ results }) {
    return(<div></div>)
}

SearchResult.PropTypes = {
    results: PropTypes.arrayOf(CustomTypes.SearchResult),
}