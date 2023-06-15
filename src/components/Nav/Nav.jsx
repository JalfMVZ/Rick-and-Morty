import React from 'react'
import SearchBar from '../SeachBar/SearchBar'


export default function Nav({onSearch}) {
  return (
    <SearchBar onSearch={onSearch}/>
  )
}
