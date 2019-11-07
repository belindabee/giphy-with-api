import React from 'react'
import PropTypes from 'prop-types'
import *as CustomTypes from '../../lib/custom-types'

export default function SearchResult ({ result }) {
    return(<div></div>)
}

SearchResult.PropTypes = {
    result: PropTypes.arrayOf(CustomTypes.SearchResult),
}