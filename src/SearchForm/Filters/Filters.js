import React from 'react';

class Filters extends React.Component {
  render() {
    return(
      <div>
        <label htmlFor='PrintType'>Print Type</label>
        <select>
          <option value='All'>All</option>
          <option value='Books'>Books</option>
          <option value='Magazines'>Magazines</option>
        </select>
        <label htmlFor='BookType'>Book Type</label>
        <select>
          <option value='NoFilter'>No Filter</option>
          <option value='Free'>Free</option>
        </select>
      </div>
    )
  }
}

export default Filters