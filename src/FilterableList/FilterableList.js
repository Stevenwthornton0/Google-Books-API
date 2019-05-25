import React from 'react';
import ListItem from './ListItem/ListItem';

class FilterableList extends React.Component {

  render() {
    const books = this.props.books.map(
      (book, i) => <ListItem {...book} key={i} />)

    return(
      <section className='bookResults'>
        {books}
      </section>
    )
  }

}

FilterableList.defaultProps = {
  books: []
}

export default FilterableList