import React from 'react'
import Filters from './Filters/Filters.js'

class SearchForm extends React.Component {

  render() {
    return (
      <div>
        <form
          className='bookSearch-Form'
        >
          <label htmlFor='Search'>Search</label>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Search Term'
          />
          <button
            type="submit"
          >Search</button>
          <Filters />
        </form>

      </div>
    )
  }
}

export default SearchForm