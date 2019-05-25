import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import FilterableList from './FilterableList/FilterableList.js';

// const key = 'AIzaSyCWjlQeA2-JELVtmVVfpKN5RR92NrymKXU'

const books = [
  {
    title: 'Henry I',
    author: 'C. Warren Hollister',
    price: '$50.00',
    description: 'The resulting volume is one that will be welcomed by students and general readers alike',
  },
  {
    title: 'Henry VIII',
    author: 'Alison Weir',
    price: '$15.50',
    description: 'This is a triumph of historical writing which will appeal equally to the general reader and the serious historian',
  }
]

class App extends React.Component {

  render() {
    return (
      <main className='App'>
        <header>
          <h1>Google Book Search</h1>
          <SearchForm />
        </header>

        <FilterableList books={books}/>
      </main>
    );
  }
}

export default App;
