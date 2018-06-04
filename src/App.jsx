import './App.scss';
import React from 'react';
import Book from './components/book/Book.jsx';
import book from '../books/book.json';
import { connect } from 'react-redux';
import { setBooks } from './store/actions/actions';

const mapDispatchToProps = (dispatch) => ({
  setBooks: (books) => dispatch(setBooks(books))
});

@connect(null, mapDispatchToProps)
export default class App extends React.Component {
  componentDidMount() {
    this.props.setBooks(book);
  }

  render () {
    return <div className="main-app">
      <Book />
    </div>;
  }
}
